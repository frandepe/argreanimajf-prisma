"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { TitleH2 } from "@/components/Texts/TitleH2";
import React, { Suspense } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import InstagramEmbed from "@/components/RedesSociales/InstagramEmbed";

const VideoPlayer = dynamic(() => import("@/components/Video/video-player"), {
  ssr: false,
});

const RedesSocialesPage = () => {
  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          src={
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1747668586/1-88_ergm66.jpg"
          }
          title="Redes Sociales"
          description="En esta sección encontrarás todo sobre nuestras redes sociales: síguenos y entérate de cursos, tips y novedades en RCP."
        />

        <TitleH2 title="Con la RCP NO." className="pt-20" />

        <div className="w-full flex justify-center gap-10 flex-wrap">
          <div className="w-auto flex items-center justify-center h-full">
            <InstagramEmbed url="https://www.instagram.com/reel/CoalPgtDGhL/?igsh=a2pldzZtZHpxejJv" />
          </div>

          <div className="w-auto flex items-center justify-center h-full">
            <InstagramEmbed url="https://www.instagram.com/p/CnHaZbJumgG/?igsh=MWZvdHR5MHR5MXlxOA==" />
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-full flex items-center justify-center mx-auto">
            <Image
              src="https://res.cloudinary.com/dtbryiptz/image/upload/v1747883997/rcp-no_gdwfiv.jpg"
              width={100}
              height={100}
              alt="RCP"
              className="w-[500px] h-full object-contain rounded"
            />
          </div>
        </div>


        <TitleH2 title={"Pregunta por la vida"}/>

        <div className="md:px-10 w-full max-w-7xl mx-auto">
          <p>
            🎶 ¡Gracias, Bee Gees! Ahora, Argentina Reanima marca el ritmo. 🎶
          </p>
          <br />
          <p>
            Por años, Stayin Alive fue la canción que nos ayudó a mantener el
            ritmo correcto para hacer RCP.
          </p>
          <br />
          <p>
            Pero hoy damos un paso más: presentamos <b>Pregunta por la Vida</b>,
            nuestro propio himno para concientizar sobre la importancia del RCP
            y el DEA en las escuelas.
          </p>
          <br />
          <p>
            📢 Cuando los padres dejan a sus hijos en la escuela, confían en que
            estarán seguros. Se preocupan por los libros, los horarios y los
            viajes, pero pocas veces se preguntan:
          </p>
          <p>❗ ¿Hay alguien capacitado en RCP?</p>
          <p>❗ ¿La escuela cuenta con un DEA?</p>
          <p>
            ❗ ¿Está realmente preparada para responder ante una emergencia?
          </p>
          <p>
            La Ley de Muerte Súbita ya está vigente, pero debe ser implementada.
            No esperemos a que sea demasiado tarde.
          </p>
          <p>
            💬 Pregunta por la vida en la escuela de tus hijos. Exijamos
            escuelas cardioasistidas. Disponible para todos los instructores¡!
          </p>
          <p>
            #GraciasBeeGees #PreguntaPorLaVida #ArgentinaReanimaAC #RCP #DEA
            #EscuelasCardioasistidas #SoloBajamosLosBrazosParaHacerRCP
          </p>
        </div>

        <Card className="max-w-7xl flex text-start w-[800px] mx-auto ">
          <div className="h-full w-full transition-opacity duration-200 fade-in hover:opacity-70">
            <Suspense fallback={<div>Cargando video...</div>}>
              <VideoPlayer
                src={"https://www.youtube.com/watch?v=RAJHlryxTGw"}
                height="500px"
              />
            </Suspense>
          </div>
    
        </Card>
      </div>
    </div>
  );
};

export default RedesSocialesPage;
