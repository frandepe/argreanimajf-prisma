import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {

  return (
    <section className="pt-5 md:py-24 w-full flex justify-center">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                Contactanos
              </h1>
              <p className="text-muted-foreground">
                Respondemos a la brevedad. Tu mensaje es importante para
                nosotros.
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Detalles de contacto
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Teléfono: </span>
                  (0221) 418-1611
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a
                    href="mailto:argentinareanima@gmail.com"
                    className="hover:text-gray-500"
                  >
                    argentinareanima@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Nombre</Label>
                <Input type="text" id="firstname" placeholder="Ingrese su nombre" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Apellido</Label>
                <Input type="text" id="lastname" placeholder="Ingrese su apellido" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Ingrese su email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Asunto</Label>
              <Input type="text" id="subject" placeholder="Asunto" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea placeholder="Escribe tu mensaje" id="message" />
            </div>
            <Button className="w-full">Enviar</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
