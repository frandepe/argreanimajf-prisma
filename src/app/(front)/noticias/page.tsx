"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { NewsSection } from "@/components/News/NewsSection";
import { SidebarNews } from "@/components/News/SidebarNews";
import SearchBar from "@/components/SearchBarComponent/SearchBarComponent";
import { Button } from "@/components/ui/button";
import { CardVideoNews } from "@/components/Video/card-video-news";
import { useNews } from "@/context/NewsContext";

import React, { useEffect, useState } from "react";
import { seedDataYoutubeNews } from "./SeedDataYoutubeNews";

const NoticiasPage = () => {
  const { loadNews } = useNews();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const clearFilters = () => {
    setCategory("");
    setSearch("");
    loadNews("", "");
  };

  useEffect(() => {
    loadNews(category, search);
  }, [loadNews, search, category]);

  return (
    <div className="flex flex-col  gap-7 md:gap-16">
      <BannerHero
        src={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747673633/banner-noticias_ibxcjw.jpg"
        }
        title="Novedades"
        description="Enterate de las últimas acciones, eventos y novedades de Argentina Reanima."
      />

      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16 pb-7 md:pb-16">
        <div>
          <SearchBar
            onSearch={(query) => {
              setSearch(query);
            }}
          />
        </div>
        <div className="flex">
          <SidebarNews setCategory={setCategory} />
          <div className="flex flex-col gap-7 md:gap-16">
            <NewsSection />
            {(category || search) && (
              <Button
                variant="outline"
                className="mt-10 ml-16"
                onClick={clearFilters}
              >
                🧹 Limpiar filtros
              </Button>
            )}
            <CardVideoNews seedDataYoutubeNews={seedDataYoutubeNews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasPage;
