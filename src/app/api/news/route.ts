import cloudinary from "@/libs/cloudinary";
import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const news = await prisma.news.findMany();

    return NextResponse.json({
      message: "Noticias obtenidas correctamente",
      news,
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
