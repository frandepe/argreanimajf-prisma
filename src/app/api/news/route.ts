import { Prisma } from "@/generated/prisma";
import cloudinary from "@/libs/cloudinary";
import { prisma } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const pageParam = searchParams.get("page") || "1";

    const page = Math.max(parseInt(pageParam, 10) || 1, 1);
    const limit = 6;
    const skip = (page - 1) * limit;

    const where: Prisma.NewsWhereInput = {
      ...(category && { category }),
      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            description: {
              contains: search,
              mode: Prisma.QueryMode.insensitive,
            },
          },
        ],
      }),
    };

    // Obtener las noticias paginadas
    const news = await prisma.news.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Obtener el total de noticias que coinciden con el filtro
    const totalNews = await prisma.news.count({
      where,
    });

    return NextResponse.json({
      message: "Noticias obtenidas correctamente",
      news,
      totalNews,
      currentPage: page,
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

export async function POST(request: Request) {
  try {
    const {
      title,
      description,
      redirect,
      category,
      imageBase64, // esto es la imagen en base64, ej: "data:image/png;base64,...."
    } = await request.json();

    if (!imageBase64) {
      return NextResponse.json(
        { error: "La imagen es requerida" },
        { status: 400 }
      );
    }

    // Subir la imagen a Cloudinary
    const uploadResult = await cloudinary.uploader.upload(imageBase64, {
      folder: "images",
      transformation: [
        {
          crop: "fill",
          quality: 60,
          format: "auto",
          strip_metadata: true,
        },
      ],
    });

    const news = await prisma.news.create({
      data: {
        title,
        description,
        redirect,
        category,
        imageUrl: uploadResult.secure_url,
        imagePublicId: uploadResult.public_id,
      },
    });

    return NextResponse.json(
      { message: "Noticia creada exitosamente", news, success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear noticia:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
