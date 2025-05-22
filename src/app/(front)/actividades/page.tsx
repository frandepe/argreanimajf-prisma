import React from "react";
import BannerHero from "../../../components/BannerHero/BannerHero";
import { seedDataActivities } from "@/components/Activities/ActivitiesCardsComponent";
import { ActivitiesCards } from "@/components/Activities/ActivitiesCards";
import { Timeline } from "@/components/TimeLineComponent/TimeLineComponent";

const Actividades = () => {
  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          src="https://res.cloudinary.com/dtbryiptz/image/upload/v1747684788/DSC_4071_ebrq8f.jpg"
          title="Actividades"
          description="Capacitaciones, jornadas, simulacros y encuentros en distintas ciudades del país, pensados para enseñar a salvar vidas."
        />

        <ActivitiesCards {...seedDataActivities} />

        <Timeline />
        
      </div>
    </div>
  );
};

export default Actividades;
