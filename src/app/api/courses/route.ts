import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, category, lessons } = body;

    if (!title || !category || !Array.isArray(lessons)) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const newCourse = await prisma.course.create({
      data: {
        title,
        category,
        lessons: {
          create: lessons.map((lesson: { title: string; href: string }) => ({
            title: lesson.title,
            href: lesson.href,
          })),
        },
      },
      include: {
        lessons: true,
      },
    });

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error("Error creando curso:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
