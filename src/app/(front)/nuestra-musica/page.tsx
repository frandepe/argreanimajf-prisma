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
        src={"/images/Banner-nuestra-musica.jpg"}
        srcMobile={"/images/Banner-nuestra-musica.jpg"}
        title="Nuestra música"
        description="Las canciones que nos ayudan a mantener el ritmo correcto para hacer RCP."
      />

      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16 pb-7 md:pb-16">
        <Titleh1 title="Marcando el ritmo" />
        <TextVideoPalmeras />
        <Separator className="bg-gray-300" />
        <TextVideoBeeGees />
      </div>
      
      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16 pb-7 md:pb-16">
        <Separator className="bg-gray-300" />
        <Titleh1 title="Pregunta por la Vida: La Voz de RCP en Spotify" />
        {/* <TextVideoPalmeras /> */}

        {/* <TextVideoBeeGees /> */}

        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/62bECNwYQFBbmmjxnlPTYk?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default RedesSocialesPage;
