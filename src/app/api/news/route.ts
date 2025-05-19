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
    const { title, imageUrl, imagePublicId, description, redirect, category } =
      await request.json();

    const news = await prisma.news.create({
      data: {
        title,
        imageUrl,
        imagePublicId,
        description,
        redirect,
        category,
      },
    });
    console.log("news", news);

    return NextResponse.json({
      message: "Noticias obtenidas correctamente",
      news,
      status: 201,
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
