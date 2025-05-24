import BannerHero from "@/components/BannerHero/BannerHero";
import { TitleH2 } from "@/components/Texts/TitleH2";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";


const FilialesPage = () => {
  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          src={
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1748046785/banner-filiales_ppg1af.png"
          }
          title="Filiales"
          description="Somos 7 filiales en el país, con equipo de instructores y recursos propios, para continuar multiplicando manos que salvan vidas"
        />

        <TitleH2
          title="Expandiendo Nuestra Misión: 7 Filiales en Todo el País"
          className="pt-5 md:pt-20"
        />

        <div className="md:px-10 w-full max-w-7xl mx-auto">
          <p className="md:px-10 w-full max-w-7xl mx-auto">
            Queremos contarte que continuamos creciendo gracias a todos los que
            confían en Argentina Reanima. <br />
            Somos 7 filiales en el país, con equipo de instructores y recursos
            propios, para continuar multiplicando manos que salvan vidas.
          </p>{" "}
          <br />
    
          <p className="md:px-10 w-full max-w-7xl mx-auto">
            Ushuaia, Rio Grande, Mar del Plata, Puerto Iguazú, Río Tercero,
            Lobería y La Plata.
          </p>
          <br />
          <p className="md:px-10 w-full max-w-7xl mx-auto ">
            Seguinos atentos en nuestras redes, para enterarte de las próximas
            actividades que realizaremos en los diferentes lugares.
          </p>
          <p className="md:px-10 w-full max-w-7xl mx-auto ">
            Solo bajamos los brazos para hacer RCP
          </p>
        </div>

        <div className="w-full flex justify-center ">
            <Image width={500} height={300} src={"https://res.cloudinary.com/dtbryiptz/image/upload/v1748047099/filiales_n3sf6h.png"} alt={""}/>
        </div>

      </div>
    </div>
  );
};

export default FilialesPage;
