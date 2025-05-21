import { Prisma } from "@/generated/prisma";
import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

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
    const body = await request.json();
    const { title, category, lessons } = body;

    if (!title || !category || !Array.isArray(lessons)) {
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

    return NextResponse.json({
      message: "Curso correctamente",
      updatedCourse,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error("Error actualizando curso:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
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
    const deletedCourse = await prisma.course.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deletedCourse) {
      return NextResponse.json({
        message: `No se ha encontrado el curso con el id ${id}`,
        status: 400,
        success: false,
      });
    }

    return NextResponse.json({
      message: "Curso eliminado correctamente",
      deletedCourse,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error(`Error in /api/courses/${id}`, error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code, error.message);

      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}
