"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { Titleh1 } from "@/components/Texts/Titleh1";
import React from "react";
import Image from "next/image";
import InstagramEmbed from "@/components/RedesSociales/InstagramEmbed";
import { TextVideoBeeGees } from "@/components/TextImage/TextVideoBeeGees";
import { Separator } from "@/components/ui/separator";
import { TextVideoPalmeras } from "@/components/TextImage/TextVideoPalmeras";

const RedesSocialesPage = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-16">
      <BannerHero
        src={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1748923390/redes_n5ncln.jpg"
        }
        srcMobile={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1748923390/redes_n5ncln.jpg"
        }
        title="Redes Sociales"
        description="En esta sección encontrarás todo sobre nuestras redes sociales: síguenos y entérate de cursos, tips y novedades en RCP."
      />

      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16 pb-7 md:pb-16">
        <Titleh1 title="Con la RCP NO." />

        <div className="w-full flex justify-center gap-10 flex-wrap">
          <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
            <InstagramEmbed url="https://www.instagram.com/reel/CoalPgtDGhL/?igsh=a2pldzZtZHpxejJv" />
          </div>

          <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
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

        <h2 className="text-2xl md:text-3xl font-semibold md:text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          ¡Jualian weich tambien lucha contra la muerte subita!
        </h2>

        <div className="w-full flex justify-center gap-10 flex-wrap">
          <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
            <InstagramEmbed url="https://www.instagram.com/p/CSzQYtXgY2t/" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold md:text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          El Compromiso continúa Ley 27.159
        </h2>

        <div className="w-full flex justify-center gap-10 flex-wrap">
          <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
            <InstagramEmbed url="https://www.instagram.com/p/CmEwMU2r6fF/?utm_source=ig_embed&amp;utm_campaign=loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesSocialesPage;
