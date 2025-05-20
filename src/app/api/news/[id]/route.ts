import { Prisma } from "@/generated/prisma";
import cloudinary from "@/libs/cloudinary";
import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Readonly<{ id: string }> | Promise<Readonly<{ id: string }>>;
  }
) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  try {
    const news = await prisma.news.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!news) {
      return NextResponse.json({
        message: `No se ha encontrado la noticia con el id ${id}`,
        status: 400,
        success: false,
      });
    }

    return NextResponse.json({
      message: "Noticia obtenida correctamente",
      news,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error(`Error in /api/news/${id}`, error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: Readonly<{ id: string }> | Promise<Readonly<{ id: string }>>;
  }
) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  try {
    const deletedNews = await prisma.news.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deletedNews) {
      return NextResponse.json({
        message: `No se ha encontrado la noticia con el id ${id}`,
        status: 400,
        success: false,
      });
    }
    await cloudinary.uploader.destroy(deletedNews.imagePublicId);
    return NextResponse.json({
      message: "Noticia eliminada correctamente",
      deletedNews,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error(`Error in /api/news/${id}`, error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code, error.message);

      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: Readonly<{ id: string }> | Promise<Readonly<{ id: string }>>;
  }
) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  try {
    const { title, imageBase64, description, redirect, category } =
      await request.json();

    // Buscar la noticia actual
    const existingNews = await prisma.news.findUnique({
      where: { id },
    });

    if (!existingNews) {
      return NextResponse.json({
        message: `No se ha encontrado la noticia con el id ${id}`,
        status: 400,
        success: false,
      });
    }

    let imageUrl = existingNews.imageUrl;
    let imagePublicId = existingNews.imagePublicId;

    // Si hay una nueva imagen, reemplazamos la anterior
    if (imageBase64) {
      try {
        if (imagePublicId) {
          await cloudinary.uploader.destroy(imagePublicId);
        }
      } catch (err: any) {
        if (err.http_code !== 404) {
          console.error(
            "Error al intentar eliminar imagen de Cloudinary:",
            err
          );
          throw err;
        }
        // Si es 404, la imagen no existe, seguimos sin problema
      }

      const uploadResult = await cloudinary.uploader.upload(imageBase64, {
        folder: "images",
        transformation: [
          {
            crop: "fill",
            quality: 60,
            format: "auto",
            strip_metadata: true,
            delivery: "auto",
            bytes_limit: 200000,
          },
        ],
      });

      imageUrl = uploadResult.secure_url;
      imagePublicId = uploadResult.public_id;
    }

    // Actualizar la noticia
    const updatedNews = await prisma.news.update({
      where: { id },
      data: {
        title,
        imageUrl,
        imagePublicId,
        description,
        redirect,
        category,
      },
    });

    return NextResponse.json({
      message: "Noticia actualizada correctamente",
      updatedNews,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error("Error in /api/news PUT:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
