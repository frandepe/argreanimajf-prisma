"use client"

import { AuthorCard } from "@/components/ui/content-card"

const cards = [
  {
    backgroundImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1650&q=80",
    author: {
      name: "Argentina Reanima",
      avatar: "https://res.cloudinary.com/dtbryiptz/image/upload/v1747447163/logo_iczhux.png",
    },
    content: {
      title: "Cursos Gratuitos",
      description: "Accedé a tus cursos, certificados y materiales complementarios desde tu cuenta de formación online."
    }
  },
  {
    backgroundImage: "https://res.cloudinary.com/dtbryiptz/image/upload/v1747446956/cursos_i9g0tk.jpg",
    author: {
      name: "Argentina Reanima",
      avatar: "https://res.cloudinary.com/dtbryiptz/image/upload/v1747447163/logo_iczhux.png",

    },
    content: {
      title: "Guía de Inscripción",
      description: "Inscribite para una sesión práctica presencial tras completar tus cursos de primeros auxilios online."
    }
  },
 
  {
    backgroundImage: "https://res.cloudinary.com/dtbryiptz/image/upload/v1747447092/card3_jvdjc9.jpg",
    author: {
      name: "Argentina Reanima",
      avatar: "https://res.cloudinary.com/dtbryiptz/image/upload/v1747447163/logo_iczhux.png",
    },
    content: {
      title: "Los beneficios de Anima eLearning",
      description: "Argentina Reanima ofrece cursos online de RCP y primeros auxilios, con un enfoque práctico y accesible."
    }
  }
]


export function ContentCard() {
  return (
    <div className="grid grid-cols-1 px-7 lg:px-32 2xl:px-64 max-w-8xl lg:grid-cols-2 xl:grid-cols-3 justify-center w-full items-center mx-auto gap-4 ">
      {cards.map((card, index) => (
        <AuthorCard
          key={index}
          backgroundImage={card.backgroundImage}
          author={card.author}
          content={card.content}
        />
      ))}
    </div>
  )
}
