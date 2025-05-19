import { ActivitiesCards } from "@/components/ui/activities-cards"

const demoData = {
  heading: "Nuestros Eventos",
  description:
    "Descubre los últimos eventos y actividades sobre nuestra misión de salvar vidas. Participa y mantente informado.",
  posts: [
    {
      id: "post-1",
      title:
        "Jornada de RCP en Cañuelas",
      description:
        "Argentina Reanima llevó a cabo una jornada de RCP en la ciudad de Cañuelas, donde vecinos, estudiantes y profesionales participaron activamente en talleres de reanimación cardiopulmonar. l evento promovió la capacitación comunitaria en maniobras esenciales para salvar vidas, fortaleciendo el compromiso local con la salud y la prevención.",
      label: "RCP",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "https://res.cloudinary.com/dtbryiptz/image/upload/v1747685722/DSC_4068_i6wl0x.jpg",
      tags: ["RCP", "Muerte súbita"],
    },
    {
      id: "post-2",
      title: "Jornada de RCP en Mar del Plata",
      description:
        "En el corazón de Mar del Plata, Argentina Reanima llevó adelante una jornada intensiva de capacitación en RCP, abierta a toda la comunidad. Con una gran participación de vecinos, estudiantes y profesionales de la salud, el evento reforzó la importancia de estar preparados para actuar ante emergencias y salvar vidas.",
      label: "Web Design",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "https://res.cloudinary.com/dtbryiptz/image/upload/v1747686466/1-90_env0p8.jpg",
      tags: ["Web Design", "CSS"],
    },
  ],
};

function ActivitiesCardComponent() {
  return <ActivitiesCards {...demoData} />;
}

export { ActivitiesCardComponent };
