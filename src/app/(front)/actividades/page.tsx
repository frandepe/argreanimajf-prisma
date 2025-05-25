import React from "react";
import BannerHero from "../../../components/BannerHero/BannerHero";
import { seedDataActivities } from "@/components/Activities/ActivitiesCardsComponent";
import { ActivitiesCards } from "@/components/Activities/ActivitiesCards";
import { Timeline } from "@/components/TimeLineComponent/TimeLineComponent";
import { Titleh1 } from "@/components/Texts/Titleh1";

const Actividades = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-16">
      <BannerHero
        src="https://res.cloudinary.com/dtbryiptz/image/upload/v1747684788/DSC_4071_ebrq8f.jpg"
        title="Actividades"
        imgClassname="object-fit md:object-cover object-[left_0px]"
        description="Capacitaciones, jornadas, simulacros y encuentros en distintas ciudades del país, pensados para enseñar a salvar vidas."
      />

      <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16">
        <div className="md:text-center">
          <Titleh1
            title="Nuestros Eventos"
            className="mx-auto mb-4 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl"
          />

          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Descubre los últimos eventos y actividades sobre nuestra misión de
            salvar vidas. Participa y mantente informado.
          </p>
        </div>

        <ActivitiesCards {...seedDataActivities} />

        <Timeline />
      </div>
    </div>
  );
};

export default Actividades;
