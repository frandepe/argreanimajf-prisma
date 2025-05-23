import React from "react";
import BannerHero from "@/components/BannerHero/BannerHero";
import { SidebarCourses } from "@/components/Courses/SideBarCourses";
import { CoursesSection } from "@/components/Courses/CourseSection";
import { seedDataCourses } from "@/components/Courses/SeedDataCourses";
import SearchBar from "@/components/SearchBarComponent/SearchBarComponent";

const CapacitacionesPage = () => {
  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          src={
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750355/IMG_8272_vqatui.jpg"
          }
          title="Capacitaciones"
          description="
            Aprendé técnicas de reanimación cardiopulmonar y primeros auxilios con nuestros cursos diseñados para toda la comunidad."
        />

        <div className="pt-20">
          <SearchBar />
        </div>
        <div className="flex">
          <SidebarCourses />
          <CoursesSection courses={seedDataCourses} />
        </div>
      </div>
    </div>
  );
};

export default CapacitacionesPage;
