"use client";

import { createContext, useContext, useState } from "react";
import { ICourse, ICreateCourse, IUpdateCourse } from "@/interfaces/courses";

export const CourseContext = createContext<{
  courses: ICourse[];
  loadCourses: () => Promise<void>;
  createCourse: (newCourse: ICreateCourse) => Promise<void>;
  deleteCourse: (id: number) => Promise<void>;
  updateCourse: (id: number, updated: IUpdateCourse) => Promise<void>;
  selectedCourse: ICourse | null;
  setSelectedCourse: (c: ICourse | null) => void;
}>({
  courses: [],
  loadCourses: async () => {},
  createCourse: async () => {},
  deleteCourse: async () => {},
  updateCourse: async () => {},
  selectedCourse: null,
  setSelectedCourse: () => {},
});

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse debe ser usado dentro de un CourseProvider");
  }
  return context;
};

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);

  async function loadCourses() {
    const res = await fetch("/api/courses");
    const data = await res.json();
    setCourses(data.courses);
  }

  async function createCourse(newCourse: ICreateCourse) {
    const res = await fetch("/api/courses", {
      method: "POST",
      body: JSON.stringify(newCourse),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCourses([...courses, data]);
  }

  async function deleteCourse(id: number) {
    const res = await fetch(`/api/courses/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);

    setCourses(courses.filter((c) => c.id !== id));
  }

  async function updateCourse(id: number, updatedCourse: IUpdateCourse) {
    const res = await fetch(`/api/courses/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedCourse),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    setCourses(courses.map((c) => (c.id === id ? data.updatedCourse : c)));
  }

  return (
    <CourseContext.Provider
      value={{
        courses,
        loadCourses,
        createCourse,
        deleteCourse,
        updateCourse,
        selectedCourse,
        setSelectedCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
