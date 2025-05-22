"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useState } from "react";

interface Course {
  id: string;
  title: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CoursesProps {
  courses: Course[];
}

const CoursesSection = ({ courses }: CoursesProps) => {
  const [expandedSummaries, setExpandedSummaries] = useState<
    Record<string, boolean>
  >({});

  const toggleSummary = (courseId: string) => {
    setExpandedSummaries((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 text-white">
            Cursos Online
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Cursos
          </h2>
          <p className="text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Formate en reanimación cardiopulmonar y aprendé a salvar vidas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {courses?.map((course) => {
            return (
              <Card
                key={course.id}
                className="grid grid-rows-[auto_auto_1fr_auto]"
              >
                <div className="aspect-[16/9] w-full">
                  <a
                    href={
                      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg"
                    }
                    target="_blank"
                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                  >
                    <Image
                      src={
                        "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg"
                      }
                      alt={course.title}
                      className="h-full w-full object-cover object-center"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <CardContent className="p-4">
                  <CardHeader>
                    <h3 className="text-lg font-semibold hover:underline md:text-xl">
                      <a
                        href={
                          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {course.title}
                      </a>
                    </h3>
                  </CardHeader>
                  <p className="text-muted-foreground">Categoria: {course.category}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { CoursesSection };
