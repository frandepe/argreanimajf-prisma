"use client";

import { cn } from "@/libs/utils";
import Image from "next/image";



export const BoxTresHome = () => {
  // Definimos el array de tarjetas directamente dentro del componente BoxTresHome
  const cards = [
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1650&q=80",
      author: {
        name: "Argentina Reanima",
        avatar:
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747751406/logo_compress_gxgwwh.png",
      },
      content: {
        title: "Cursos Gratuitos",
        description:
          "Accedé a tus cursos, certificados y materiales complementarios desde tu cuenta de formación online.",
      },
    },
    {
      backgroundImage:
        "https://res.cloudinary.com/dtbryiptz/image/upload/v1747446956/cursos_i9g0tk.jpg",
      author: {
        name: "Argentina Reanima",
        avatar:
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747751406/logo_compress_gxgwwh.png",
      },
      content: {
        title: "Guía de Inscripción",
        description:
          "Inscribite para una sesión práctica presencial tras completar tus cursos de primeros auxilios online.",
      },
    },
    {
      backgroundImage:
        "https://res.cloudinary.com/dtbryiptz/image/upload/v1747447092/card3_jvdjc9.jpg",
      author: {
        name: "Argentina Reanima",
        avatar:
          "https://res.cloudinary.com/dtbryiptz/image/upload/v1747751406/logo_compress_gxgwwh.png",
      },
      content: {
        title: "Los beneficios de Anima eLearning",
        description:
          "Argentina Reanima ofrece cursos online de RCP y primeros auxilios, con un enfoque práctico y accesible.",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 px-7 lg:px-32 2xl:px-64 max-w-8xl lg:grid-cols-2 xl:grid-cols-3 justify-center w-full items-center mx-auto gap-4">
      {cards.map((card, index) => (
        <div key={index} className="lg:w-fit w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-between p-4 bg-cover"
            )}
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
          >
            <div className="absolute w-full h-full top-0 left-0 bg-black/50 transition duration-300 group-hover/card:bg-black opacity-60" />

            <div className="flex flex-row items-center md:space-x-4 z-10 ">
              <Image
                height={100}
                width={100}
                alt={`${card.author.name}'s avatar`}
                src={card.author.avatar}
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  {card.author.name}
                </p>
              </div>
            </div>

            <div className="text content z-10">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50">
                {card.content.title}
              </h1>
              <p className="font-normal text-sm text-gray-50 my-4">
                {card.content.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
