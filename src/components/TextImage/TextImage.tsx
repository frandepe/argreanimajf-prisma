"use client";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Titleh1 } from "../Texts/Titleh1";

function TextImage() {
  const router = useRouter();

  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="flex flex-col">
            <div></div>
            <div className="flex gap-4 flex-col items-start">
              <Titleh1
                title="Tu compromiso es necesario"
                className="max-w-lg tracking-tighter text-start font-regular"
              />

              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Aprendé los pasos clave para actuar ante una situación de muerte
                súbita. Con nuestras capacitaciones, dictadas por instructores
                certificados, podes estar preparado para intervenir de manera
                segura y eficaz cuando más se necesita; porque cada segundo
                cuenta.
              </p>
            </div>
            <div className="flex flex-row gap-4 py-4">
              <Button
                size="lg"
                className="gap-4 cursor-pointer"
                variant="outline"
                onClick={() => router.push("/capacitaciones")}
              >
                Ver cursos <Video className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div
              style={{
                backgroundImage: "url(/images/1.jpeg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-auto bg-muted rounded-md aspect-square "
            ></div>
            <div
              style={{
                backgroundImage: "url(/images/6.jpeg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="bg-muted rounded-md row-span-2"
            ></div>
            <div
              style={{
                backgroundImage: "url(/images/3.jpeg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="bg-muted rounded-md aspect-square"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TextImage };
