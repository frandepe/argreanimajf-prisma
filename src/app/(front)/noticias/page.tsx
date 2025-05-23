"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { NewsSection } from "@/components/News/NewsSection";
import { SidebarNews } from "@/components/News/SidebarNews";
import SearchBar from "@/components/SearchBarComponent/SearchBarComponent";
import { Button } from "@/components/ui/button";
import { useNews } from "@/context/NewsContext";

import React, { useEffect, useState } from "react";

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
          <SearchBar
            onSearch={(query) => {
              setSearch(query);
            }}
          />
        </div>
        <div className="flex">
          <SidebarNews setCategory={setCategory} />
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasPage;
