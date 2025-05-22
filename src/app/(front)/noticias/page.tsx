import BannerHero from "@/components/BannerHero/BannerHero";
import { seedDatanews } from "@/components/News/SeedDataNews";
import { NewsSection } from "@/components/News/NewsSection";
import { SidebarNews } from "@/components/News/SidebarNews";
import { SearchBar } from "@/components/SearchBarComponent/SearchBarComponent";

import React from "react";

const NoticiasPage = () => {
  // const news = await fetch("http://localhost:3000/api/news");
  // const data = await news.json();
  // console.log(data.news);

  //console.log(SeedDatanews);

  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          src={
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1747876454/banner-noticias_cgbfet.png"
          }
          title="Novedades"
          description="Enterate de las últimas acciones, eventos y novedades de Argentina Reanima."
        />

        <div className="pt-20">
         <SearchBar/>
        </div>
        <div className="flex">
          <SidebarNews />
          <NewsSection news={seedDatanews} />
        </div>
      </div>
    </div>
  );
};

export default NoticiasPage;
