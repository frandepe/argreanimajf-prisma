"use client";

import { AnimatedCarousel } from "./AnimatedCarousel";

function AnimatedQuienesSomos() {
  const testimonials = [
    {
      quote:
        "Se reglamenta la ley 27.159 de muerte súbita y sistema de prevención integral",
      name: "Ley 27.159",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/ley.jpg",
    },
    {
      quote:
        "En manos del Dr. Mario Fitz Maurice y con profunda emoción, nuestra querida Asociación fue reconocida por su lucha contra la muerte súbita.",
      name: "Argentina Reanima recibió el Premio INADEA por la Vida 2023",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/equipo3.jpg",
    },
    {
      quote: "",
      name: "Equipo",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/equipo1.jpg",
    },
    {
      quote: "",
      name: "Equipo",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/equipo2.jpg",
    },
    {
      quote: "",
      name: "Equipo",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/equipo4.jpg",
    },
    {
      quote: "",
      name: "Equipo",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/equipo5.jpg",
    },
    {
      quote: "",
      name: "Equipo",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/equipo6.jpg",
    },
    {
      quote: "",
      name: "Equipo",
      designation: "Asociación Civil Argentina Reanima",
      src: "/images/quienes-somos/equipo7.jpg",
    },
  ];
  return <AnimatedCarousel testimonials={testimonials} />;
}

export { AnimatedQuienesSomos };
