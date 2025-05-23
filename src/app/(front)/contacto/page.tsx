import BannerHero from "@/components/BannerHero/BannerHero";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import React from "react";

const ContactoPage = () => {
  return (
    <div className="py-20 px-7 md:px-40">
      <div className="flex flex-col gap-16">
        <BannerHero
          imgClassname="object-fit md:object-cover object-[center_55px]"
          src={
            "https://res.cloudinary.com/dtbryiptz/image/upload/v1748027840/banner-contacto_iukk0c.png"
          }
          title="Contacto"
          description="Comunicate con nosotros para consultas institucionales, alianzas estratégicas o información sobre nuestras actividades"
        />

        <ContactForm />

      </div>
    </div>
  );
};

export default ContactoPage;
