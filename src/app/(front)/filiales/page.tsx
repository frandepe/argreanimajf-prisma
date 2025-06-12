"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { Titleh1 } from "@/components/Texts/Titleh1";
import React from "react";

import dynamic from "next/dynamic";
import { useMobile } from "@/hooks/useMedia";

const FilialesMap = dynamic(
  () => import("@/components/FilialesMap/FilialesMap"),
  {
    ssr: false, // 👈 importante
  }
);

const FilialesPage = () => {
  const isMobile = useMobile();
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
        // imgClassname={isMobile ? "object-cover object-[left_30%] " : ""}
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

        <div className="bg-white  md:p-10 rounded-2xl  max-w-4xl mx-auto space-y-6 border border-none">
          <h2 className=" mb-4  text-2xl md:text-3xl font-semibold md:text-center text-gray-500 capitalize lg:text-4xl dark:text-white">
            Convenio con Facultad de Psicología Universidad Nacional de Mar del
            Plata
          </h2>
          <Titleh1 title="Nuestro compromiso con Nacer entre Palabras" />

          <p className="text-gray-700 text-base md:text-lg">
            Con mucho orgullo y satisfacción, desde el año{" "}
            <span className="font-semibold">2023</span> aportamos nuestras
            capacitaciones al proyecto{" "}
            <span className="italic">Nacer entre Palabras</span>, dirigido por
            la <span className="font-semibold">Dra. Sandra Marañon</span> de la
            Facultad de Psicología de la{" "}
            <span className="font-semibold">U.N.M.d.P.</span>
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Nuestro compromiso consiste en:
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
              <li>
                Promover acciones tendientes a la prevención de la muerte
                súbita.
              </li>
              <li>
                Promocionar y difundir las técnicas de Reanimación Cardio
                Pulmonar (RCP) y el uso del Desfibrilador Externo Automático
                (DEA).
              </li>
              <li>
                Capacitar sobre el contenido y cumplimiento de la Ley 27159 de
                Muerte Súbita y Sistema de Prevención Integral.
              </li>
              <li>
                Mejorar la accesibilidad a la capacitación comunitaria en RCP,
                uso de equipos DEA y leyes de aplicación.
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 text-base md:text-lg">
              Nuestra filial{" "}
              <span className="font-semibold">Mar del Plata</span>, liderada por
              el Instructor{" "}
              <span className="font-semibold">Santiago González Goller</span>,
              es la encargada de proporcionar los medios físicos, teóricos y
              prácticos para las capacitaciones. Estas se realizan en las
              instalaciones de la Facultad, con aplicación en{" "}
              <span className="italic">adultos, niños y lactantes</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilialesPage;
