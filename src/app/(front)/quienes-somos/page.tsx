import React from "react";
import BannerHero from "../../../components/BannerHero/BannerHero";
import TeamComponent from "@/components/TeamComponent/TeamComponent";

const QuienesSomosPage = () => {
  return (
    <div>
      <BannerHero
        src={
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747457483/quienes-somos_af29qm.jpg"
        }
        title="¿Quiénes somos?"
        description="Somos una Asociación Civil que lucha contra la muerte súbita Conoce más sobre nuestra misión y visión."
      />

      <TeamComponent />
    </div>
  );
};

export default QuienesSomosPage;
