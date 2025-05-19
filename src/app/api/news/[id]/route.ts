import { Prisma } from "@/generated/prisma";
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
    const { title, imageUrl, imagePublicId, description, redirect, category } =
      await request.json();

    const updatedNews = await prisma.news.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        imageUrl,
        imagePublicId,
        description,
        redirect,
        category,
      },
    });

    if (!updatedNews) {
      return NextResponse.json({
        message: `No se ha encontrado la noticia con el id ${id}`,
        status: 400,
        success: false,
      });
    }

    return NextResponse.json({
      message: "Noticias obtenidas correctamente",
      updatedNews,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error("Error in /api/news:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
