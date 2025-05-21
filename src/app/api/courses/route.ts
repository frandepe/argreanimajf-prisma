import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        lessons: true,
      },
    });

    return NextResponse.json({
      message: "Cursos obtenidos correctamente",
      courses,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error("Error in /api/courses:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

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

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, category, lessons } = body;

    if (!id || !title || !category || !Array.isArray(lessons)) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Primero, eliminar lecciones antiguas del curso
    await prisma.lesson.deleteMany({
      where: {
        courseId: id,
      },
    });

    // Luego, actualizar título y categoría del curso y crear las nuevas lecciones
    const updatedCourse = await prisma.course.update({
      where: { id },
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

    return NextResponse.json(updatedCourse, { status: 200 });
  } catch (error) {
    console.error("Error actualizando curso:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
