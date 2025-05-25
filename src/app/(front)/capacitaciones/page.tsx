import React from "react";
import BannerHero from "@/components/BannerHero/BannerHero";
import { SidebarCourses } from "@/components/Courses/SideBarCourses";
import { CoursesSection } from "@/components/Courses/CourseSection";
import { seedDataCourses } from "@/components/Courses/SeedDataCourses";
import SearchBar from "@/components/SearchBarComponent/SearchBarComponent";

const CapacitacionesPage = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-16">
      <BannerHero
        src={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747750355/IMG_8272_vqatui.jpg"
        }
        title="Capacitaciones"
        description="
            Aprendé técnicas de reanimación cardiopulmonar y primeros auxilios con nuestros cursos diseñados para toda la comunidad."
      />

      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16 pb-7 md:pb-16" >
        <SearchBar />
        <div className="flex">
          <SidebarCourses />
          <CoursesSection courses={seedDataCourses} />
        </div>
      </div>
    </div>
  );
};

export default CapacitacionesPage;
