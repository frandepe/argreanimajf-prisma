import React from "react";
import BannerHero from "@/components/BannerHero/BannerHero";
import { Titleh1 } from "../../../components/Texts/Titleh1";
import { Separator } from "@/components/ui/separator";

const QuienesSomosPage = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-16">
      <BannerHero
        src={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747668586/1-88_ergm66.jpg"
        }
        title="¿Quiénes somos?"
        description="Somos una Asociación Civil que lucha contra la muerte súbita Conoce más sobre nuestra misión y visión."
      />

      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16">
        <Titleh1 title="En Argentina Reanima, creemos que cada segundo cuenta." />
        <div>
          <p>
            Somos una organizacion dedicada a la formación en Reanimación
            Cardiopulmonar (RCP) y primeros auxilios, con la misión de empoderar
            a personas y comunidades para actuar con rapidez y eficacia ante
            emergencias.
          </p>{" "}
          <br />
          <p>
            Con años de experiencia, capacitamos a ciudadanos, instituciones
            educativas, empresas y profesionales de la salud con técnicas
            actualizadas, basadas en estándares internacionales. Nuestro
            compromiso es simple pero poderoso: salvar vidas.
          </p>{" "}
          <br />
          <p>
            Con años de experiencia, capacitamos a ciudadanos, instituciones
            educativas, empresas y profesionales de la salud con técnicas
            actualizadas, basadas en estándares internacionales. Nuestro
            compromiso es simple pero poderoso: salvar vidas.
          </p>
          <br />
          <p>
            A través de la educación, la conciencia y la acción, trabajamos para
            construir una Argentina más preparada, más segura y más humana.
          </p>
        </div>

        <div className="md:text-center space-y-10">
          <Titleh1 title="Ley 27159 de Muerte Súbita" />
          <p>
            Objetivo Cumplido: Reglamentación de la Ley 27159 de Muerte Súbita y
            Sistema Integral de Prevención
          </p>

          <audio controls className="md:mx-auto md:w-1/3">
            <source src="/audio/audioMuerteSubita.mp3" type="audio/mpeg" />
            Tu navegador no soporta audio HTML5.
          </audio>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default QuienesSomosPage;
