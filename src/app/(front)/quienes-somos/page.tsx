import React from "react";
import BannerHero from "@/components/BannerHero/BannerHero";
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

        <div className="md:px-10 w-full max-w-7xl mx-auto">
          <p className="md:px-10 w-full max-w-7xl mx-auto">
            Somos una organizacion dedicada a la formación en Reanimación
            Cardiopulmonar (RCP) y primeros auxilios, con la misión de empoderar
            a personas y comunidades para actuar con rapidez y eficacia ante
            emergencias.
          </p>{" "}
          <br />
          <p className="md:px-10 w-full max-w-7xl mx-auto">
            Con años de experiencia, capacitamos a ciudadanos, instituciones
            educativas, empresas y profesionales de la salud con técnicas
            actualizadas, basadas en estándares internacionales. Nuestro
            compromiso es simple pero poderoso: salvar vidas.
          </p>{" "}
          <br />
          <p className="md:px-10 w-full max-w-7xl mx-auto">
            Con años de experiencia, capacitamos a ciudadanos, instituciones
            educativas, empresas y profesionales de la salud con técnicas
            actualizadas, basadas en estándares internacionales. Nuestro
            compromiso es simple pero poderoso: salvar vidas.
          </p>
          <br />
          <p className="md:px-10 w-full max-w-7xl mx-auto ">
            A través de la educación, la conciencia y la acción, trabajamos para
            construir una Argentina más preparada, más segura y más humana.
          </p>
        </div>

        <div className="my-8 text-center space-y-10 relative bottom-20">
          <TitleH2 title="Ley 27159 de Muerte Súbita" className="pt-20" />
          <p>Objetivo Cumplido: Reglamentación de la Ley 27159 de Muerte Súbita y Sistema Integral de Prevención</p>

          <audio controls className="mx-auto w-1/3" autoPlay>
            <source src="/audio/audioMuerteSubita.mp3" type="audio/mpeg" />
            Tu navegador no soporta audio HTML5.
          </audio>
        </div>

        {/* <TeamComponent /> */}

        <Separator />
      </div>
    </div>
  );
};

export default QuienesSomosPage;
