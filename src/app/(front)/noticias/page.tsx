import BannerHero from "@/components/BannerHero/BannerHero";
import { seedDataNews } from "@/components/News/SeedDataNews";

import { NewsSection } from "@/components/News/NewsSection";
import { SidebarNews } from "@/components/News/SidebarNews";
import { SearchBarComponent } from "@/components/SearchBarComponent/SearchBarComponent";

import React from "react";

const NoticiasPage = () => {
  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          src={
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1747673633/banner-noticias_ibxcjw.jpg"
          }
          title="Novedades"
          description="Enterate de las últimas acciones, eventos y novedades de Argentina Reanima."
        />

        <div className="pt-20">
          <SearchBarComponent />
        </div>
        <div className="flex">
          <SidebarNews />
          <NewsSection {...seedDataNews} />;
        </div>
      </div>
    </div>
  );
};

export default NoticiasPage;
