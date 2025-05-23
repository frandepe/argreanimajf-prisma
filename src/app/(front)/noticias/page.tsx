"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { NewsSection } from "@/components/News/NewsSection";
import { SidebarNews } from "@/components/News/SidebarNews";
import SearchBar from "@/components/SearchBarComponent/SearchBarComponent";
import { TitleH2 } from "@/components/Texts/TitleH2";
import { Button } from "@/components/ui/button";
import { CardVideoNews } from "@/components/Video/card-video-news";
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
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1747673633/banner-noticias_ibxcjw.jpg"
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

            <div id="videos" className="py-10">
              <TitleH2 title="Actividades historicas" />
            </div>

            <CardVideoNews
              youtubeLink={[
                {
                  id: "1",
                  title:
                    "Asociación Civil Argentina Reanima filial Cba, Julio Godoy",
                  description:
                    "La Asociación, liderada por Julio Godoy, promueve la prevención de la muerte súbita y la formación en reanimación en todo el país.",
                  author: "Local Noticias",
                  published: "12-04-2024",
                  url: "https://www.youtube.com/watch?v=34BQ1mWAyC4",
                },
                {
                  id: "2",
                  title:
                    "Capacitacion de RCP junto a Argentina Reanima, Néstor Beltrame",
                  description:
                    "Capacitación en RCP junto a  Néstor Beltrame, promoviendo una comunidad más preparada.",
                  author: "Local Noticias",
                  published: "25-03-2022",
                  url: "https://www.youtube.com/watch?v=2V2m6fbIL4Y&t",
                },
                {
                  id: "3",
                  title: "Leonardo Hariyo (Argentina Reanima)",
                  description:
                    "Actividad junto a Leonardo Hariyo de Argentina Reanima, impulsando la formación en reanimación y prevención comunitaria.",
                  author: "CVINOTICIAS",
                  published: "20-03-2024",
                  url: "https://www.youtube.com/watch?v=_3TUNUU69Po",
                },
                {
                  id: "4",
                  title:
                    "Programa 'Argentina Reanima': Dictarán un taller de RCP y DEA en Madryn",
                  description: "Nota a Marcelo Do Pazo, jefe Bomberos Madryn.",
                  author: "12 Web Noticias",
                  published: "28-09-2021",
                  url: "https://www.youtube.com/watch?v=szY9_ak1ANI",
                },
                {
                  id: "5",
                  title:
                    "Entrevista a Sergio Felice Coordinador de Argentina Reanima",
                  description:
                    "ARGENINA REANIMA DICE PRESENTE EN SAN MARTIN DE LOS ANDES.",
                  author: "Cadena Sur 94.5",
                  published: "23-03-2021",
                  url: "https://www.youtube.com/watch?v=w5D2QijTJEQ",
                },
                {
                  id: "6",
                  title: "Leonardo Hariyo (Rep. Argentina reanima).",
                  description:
                    "Entrevista a Leonardo Hariyo (representante de Argentina Reanima). Proyecto de ordenanza referente a capacitaciones de RCP.",
                  author: "CVINOTICIAS",
                  published: "17-06-2023",
                  url: "https://www.youtube.com/watch?v=1x1zSiDuRZk",
                },
                {
                  id: "7",
                  title:
                    "Argentina Reanima. RCP/Heimlich Instituto Esperanza Pto. Iguazú",
                  description:
                    "4ta. Jornada Nacional de Argentina Reanima por la Reglamentación de la Ley 27159 de Muerte Súbita y Prevención Integral. Bomberos Voluntarios de Puerto Iguazú y Filial Cataratas de Estudiantes de La Plata.",
                  author: "Cadena Sur 94.5",
                  published: "30-04-2021",
                  url: "https://www.youtube.com/watch?v=_rg8NztSOKc",
                },
                {
                  id: "8",
                  title: "CAMPAÑA DE RCP ARGENTINA REANIMA 2021",
                  description:
                    "Dialogamos con Alejandra Nogues ,coordinadora de gestión de riesgo & defensa civil de la municipalidad de Cosquin y nos comenta que este sábado 27 desde las 10 de la mañana , se realizara la segunda (CAMPAÑA DE RCP ARGENTINA REANIMA 2021) en la plaza San Martin contara con la presencia de  profesionales del área, será dirigido al publico en general..",
                  author: "TD Cosquin",
                  published: "25-02-2021",
                  url: "https://www.youtube.com/watch?v=wqWC-M_4dfM",
                },
                {
                  id: "9",
                  title:
                    "Capacitación Gratuita en RCP //Julio Godoy paramédico",
                  description:
                    "Integrantes de Argentina Reanima organizan una jornada Nacional por la reglamentación por muerte súbita. Capacitación Gratuita en RCP. para integrantes de la Liga Riotercerense de Fútbol.",
                  author: "Somos Rio Tercero - Flow",
                  published: "21-03-2022",
                  url: "https://www.youtube.com/watch?v=Ub3l0KzZuxY",
                },
                {
                  id: "10",
                  title: "ARGENTINA REANIMA EN HORA SOCIAL PARTE II",
                  description: "Entrevista a Daniel Palacios",
                  author: "AHORA RCP ARGENTINA",
                  published: "19-08-2021",
                  url: "https://www.youtube.com/watch?v=9YdX5Uu82ec",
                },
                {
                  id: "11",
                  title: "Argentina Reanima.Barrio Las Leñas ,Puerto Iguazú",
                  description:
                    "Bomberos Voluntarios de Puerto Iguazú, Filial  Cataratas  de Estudiantes de La Plata, Argentina Reanima.",
                  author: "Leonardo Hariyo",
                  published: "14-06-2021",
                  url: "https://www.youtube.com/watch?v=G40uBp3c5Bc",
                },
                {
                  id: "12",
                  title: "Capacitación en RCP",
                  description:
                    "El Sábado 5 de octubre, se realizo una jornada de Prevención de Muerte Súbita. El Hospital Provincial junto a representantes de Argentina Reanima, se unen para llevar a cabo esta actividad libre y gratuita desde las 10.30 hs. en nosocomio local. Juntos, podemos salvar vidas...",
                  author: "Somos Rio Tercero - Flow",
                  published: "5-10-2024",
                  url: "https://www.youtube.com/watch?v=3ZXbFr6PwEI",
                },
                {
                  id: "13",
                  title:
                    "Campaña Nacional por la reglamentación de la Ley 27.159 para evitar la muerte súbita",
                  description:
                    "NICOLÁS DE PAULO - Impulsado por la organización “Argentina Reanima” el próximo martes habrá un evento nacional para la reglamentación de la Ley  27.159 de Sistema de Prevención Integral para Evitar la Muerte Súbita. Esta norma busca prevenir y evitar más casos de fallecimientos por un paro cardiorrespiratorio a través de la enseñanza de maniobras de RCP.",
                  author: "Noticias 12 Trenque Lauquen",
                  published: "22-01-2021",
                  url: "https://www.youtube.com/watch?v=1O9yrxPGGcU",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasPage;
