import React from "react";
import BannerHero from "../../../components/BannerHero/BannerHero";
import { TimelineComponent } from "@/components/TimeLineComponent/TimeLineComponent";
import { MagictTextComponent } from "@/components/MagicTextComponent/MagicTextComponent";
import { TitleH2 } from "../../../components/Texts/TitleH2";
import { Separator } from "@/components/ui/separator";

const QuienesSomosPage = () => {
  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          src={
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1747668586/1-88_ergm66.jpg"
          }
          title="¿Quiénes somos?"
          description="Somos una Asociación Civil que lucha contra la muerte súbita Conoce más sobre nuestra misión y visión."
        />

        <TitleH2
          title="En Argentina Reanima, creemos que cada segundo cuenta."
          className="pt-20"
        />
        <MagictTextComponent />

        {/* <TeamComponent /> */}


        <Separator />

        <TimelineComponent />
      </div>
    </div>
  );
};

export default QuienesSomosPage;
