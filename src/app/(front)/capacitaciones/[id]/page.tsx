"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
// import { ICourse } from "@/interfaces/courses";

const VideoPlayer = dynamic(() => import("@/components/Video/video-player"), {
  ssr: false,
});

const course = {
  id: 1,
  title: "Introducción a React",
  category: "Desarrollo Web",
  createdAt: new Date(),
  updatedAt: new Date(),
  lessons: [
    {
      id: 1,
      title: "¿Qué es React?",
      href: "https://www.youtube.com/watch?v=ReK0kscoF8o",
      courseId: 1,
    },
    {
      id: 2,
      title: "JSX y componentes",
      href: "https://www.youtube.com/watch?v=CWcfNuO696M",
      courseId: 1,
    },
    {
      id: 3,
      title: "Props y estado",
      href: "https://www.youtube.com/watch?v=BWQ_PS5jomM",
      courseId: 1,
    },
    {
      id: 4,
      title: "Efectos con useEffect",
      href: "https://www.youtube.com/watch?v=EPF8D92ssas",
      courseId: 1,
    },
  ],
};

const CapacitacionPorId = () => {
  const { id } = useParams();

  // Estado para el video seleccionado
  //   const [course, setCourse] = useState<ICourse | null>(null);
  const [currentLesson, setCurrentLesson] = useState(course?.lessons[0]);

  //   useEffect(() => {
  //     if (!id) return;

  //     const fetchCourse = async () => {
  //       try {
  //         const res = await fetch(`/api/courses/${id}`);
  //         const data = await res.json();

  //         if (res.ok) {
  //           setCourse(data.course);
  //           setCurrentLesson(data.course.lessons[0] || null);
  //         } else {
  //           console.error("Error al obtener curso:", data.message);
  //         }
  //       } catch (error) {
  //         console.error("Error de red:", error);
  //       }
  //     };

  //     fetchCourse();
  //   }, [id]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!course || !currentLesson) {
    return <div className="p-6">Cargando curso...</div>;
  }

  return (
    <div>
      {/* Barra de navegación superior */}
      <div className="w-full bg-blue-50 border-b border-blue-100 py-3 px-6 text-sm text-primary flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <a href="/capacitaciones" className="hover:underline font-medium">
          Volver a capacitaciones
        </a>
      </div>

      <main className="flex flex-col md:flex-row gap-8 px-6 py-12 max-w-7xl mx-auto">
        {/* Video a la izquierda */}
        <section className="md:w-3/5 w-full rounded-lg overflow-hidden shadow-lg h-full">
          <Suspense
            fallback={<div className="p-4 text-center">Cargando video...</div>}
          >
            <VideoPlayer src={currentLesson.href} />
          </Suspense>
        </section>

        {/* Información y listado de lecciones a la derecha */}
        <aside className="md:w-2/5 w-full flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <Badge variant="outline" className="mb-3 inline-block">
              {course.category}
            </Badge>
            <p className="text-sm text-muted-foreground mb-1">
              Creado: {formatDate(course.createdAt)}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Actualizado: {formatDate(course.updatedAt)}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Lecciones ({course.lessons.length})
            </h2>
            <ul className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
              {course.lessons.map((lesson) => {
                const isActive = lesson.title === currentLesson.title;
                return (
                  <li
                    key={lesson.title}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`cursor-pointer rounded-md p-3 border ${
                      isActive
                        ? "border-blue-600 bg-blue-50"
                        : "border-transparent hover:bg-gray-100"
                    } transition-colors`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setCurrentLesson(lesson);
                    }}
                    aria-current={isActive ? "true" : "false"}
                  >
                    <span
                      className={`text-base font-medium ${
                        isActive ? "text-blue-600" : "text-gray-800"
                      }`}
                    >
                      {lesson.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default CapacitacionPorId;
