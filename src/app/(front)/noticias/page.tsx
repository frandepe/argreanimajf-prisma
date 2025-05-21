import BannerHero from "@/components/BannerHero/BannerHero";
import { seedDataNews } from "@/components/News/SeedDataNews";
import { NewsSection } from "@/components/News/NewsSection";
import { SidebarNews } from "@/components/News/SidebarNews";
import { SearchBar } from "@/components/SearchBarComponent/SearchBarComponent";

import React from "react";

const news = [
  {
    title: "La revolución de la IA en 2025",
    description:
      "Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de l",
    category: "Tecnología",
    imageUrl:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg",
    imagePublicId: "images/mgeqbvdxrext2jzutfzc",
    redirect: "noticia-ia",
    createdAt: new Date("2025-05-21T12:36:49.804Z"),
    updatedAt: new Date("2025-05-21T12:48:32.206Z"),
  },
  {
    title: "Avances médicos en América Latina",
    description:
      "Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de l",
    category: "Salud",
    imageUrl:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg",
    imagePublicId: "images/mgeqbvdxrext2jzutfzc",
    redirect: "noticia-salud",
    createdAt: new Date("2025-05-19T10:15:00.000Z"),
    updatedAt: new Date("2025-05-19T10:16:00.000Z"),
  },
  {
    title: "Economía global en ascenso",
    description:
      "Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de l",
    category: "Economía",
    imageUrl:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg",
    imagePublicId: "images/mgeqbvdxrext2jzutfzc",
    redirect: "noticia-economia",
    createdAt: new Date("2025-05-18T14:00:00.000Z"),
    updatedAt: new Date("2025-05-18T14:05:00.000Z"),
  },
  {
    title: "Cambio climático y sus efectos",
    description:
      "Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de l",
    category: "Medio Ambiente",
    imageUrl:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg",
    imagePublicId: "images/mgeqbvdxrext2jzutfzc",
    redirect: "noticia-clima",
    createdAt: new Date("2025-05-17T08:30:00.000Z"),
    updatedAt: new Date("2025-05-17T08:32:00.000Z"),
  },
  {
    title: "Descubrimientos en el espacio",
    description:
      "Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de l",
    category: "Ciencia",
    imageUrl:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg",
    imagePublicId: "images/mgeqbvdxrext2jzutfzc",
    redirect: "noticia-espacio",
    createdAt: new Date("2025-05-16T11:20:00.000Z"),
    updatedAt: new Date("2025-05-16T11:22:00.000Z"),
  },
  {
    title: "Nuevas tendencias en educación",
    description:
      "Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de l",
    category: "Educación",
    imageUrl:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg",
    imagePublicId: "images/mgeqbvdxrext2jzutfzc",
    redirect: "noticia-educacion",
    createdAt: new Date("2025-05-15T09:10:00.000Z"),
    updatedAt: new Date("2025-05-15T09:15:00.000Z"),
  },
  {
    title: "Innovaciones tecnológicas en transporte",
    description:
      "Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de la noticia Test descripcion de l",
    category: "Transporte",
    imageUrl:
      "https://res.cloudinary.com/dtbryiptz/image/upload/v1747831009/images/mgeqbvdxrext2jzutfzc.jpg",
    imagePublicId: "images/mgeqbvdxrext2jzutfzc",
    redirect: "noticia-transporte",
    createdAt: new Date("2025-05-14T17:00:00.000Z"),
    updatedAt: new Date("2025-05-14T17:10:00.000Z"),
  },
];

const NoticiasPage = () => {
  // const news = await fetch("http://localhost:3000/api/news");
  // const data = await news.json();
  // console.log(data.news);

  console.log(news);

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
         <SearchBar/>
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
