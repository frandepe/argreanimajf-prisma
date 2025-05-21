import React from "react";
import BannerHero from "@/components/BannerHero/BannerHero";
import { TitleH2 } from "../../../components/Texts/TitleH2";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/TimeLineComponent/TimeLineComponent";
import { MagicText } from "@/components/MagicTextComponent/MagicTextComponent";


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
        <MagicText
          text={
            "Somos una organizacion dedicada a la formación en Reanimación Cardiopulmonar (RCP) y primeros auxilios, con la misión de empoderar a personas y comunidades para actuar con rapidez y eficacia ante emergencias. Con años de experiencia, capacitamos a ciudadanos, instituciones educativas, empresas y profesionales de la salud con técnicas actualizadas, basadas en estándares internacionales. Nuestro compromiso es simple pero poderoso: salvar vidas. A través de la educación, la conciencia y la acción, trabajamos para construir una Argentina más preparada, más segura y más humana."
          }
        />

        {/* <TeamComponent /> */}

        <Separator />

        <Timeline />
      </div>
    </div>
  );
};

export default QuienesSomosPage;
