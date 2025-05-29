"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { Titleh1 } from "@/components/Texts/Titleh1";
import React from "react";

import dynamic from "next/dynamic";

const FilialesMap = dynamic(
  () => import("@/components/FilialesMap/FilialesMap"),
  {
    ssr: false, // 👈 importante
  }
);

const FilialesPage = () => {
  return (
    <div className="flex flex-col  gap-7 md:gap-16">
      <BannerHero
        src={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1748046785/banner-filiales_ppg1af.png"
        }
        srcMobile={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1748046785/banner-filiales_ppg1af.png"
        }
        title="Filiales"
        description="Somos 7 filiales en el país, con equipo de instructores y recursos propios, para continuar multiplicando manos que salvan vidas"
      />
      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16 pb-7 md:pb-16">
        <div>
          <Titleh1
            title="Expandiendo Nuestra Misión: 7 Filiales en Todo el País"
            className="mx-auto mb-4 text-pretty text-3xl font-semibold md:text-4xl"
          />
          <div className="w-full space-y-1">
            <p>
              Queremos contarte que continuamos creciendo gracias a todos los
              que confían en Argentina Reanima. Somos 7 filiales en el país, con
              equipo de instructores y recursos propios, para continuar
              multiplicando manos que salvan vidas.
            </p>

            <p>
              Ushuaia, Rio Grande, Mar del Plata, Puerto Iguazú, Río Tercero,
              Lobería y La Plata. Seguinos atentos en nuestras redes, para
              enterarte de las próximas actividades que realizaremos en los
              diferentes lugares.
            </p>

            <p>Solo bajamos los brazos para hacer RCP</p>
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <FilialesMap />
        </div>
      </div>
    </div>
  );
};

export default FilialesPage;
