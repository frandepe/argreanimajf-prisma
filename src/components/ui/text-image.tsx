import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

function TextImage() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Actuar salva vidas
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Aprendé los pasos esenciales para responder ante una emergencia. Con nuestras capacitaciones en primeros auxilios, podés marcar la diferencia cuando cada segundo cuenta.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4 cursor-pointer" variant="outline">
                Contactanos <PhoneCall className="w-4 h-4" />
              </Button>
        
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
          <div style={{ backgroundImage: "url(https://res.cloudinary.com/dtbryiptz/image/upload/v1747450753/gallery1_jztmbg.jpg)",backgroundPosition: "center",backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-auto bg-muted rounded-md aspect-square "></div>
            <div style={{ backgroundImage: "url(https://res.cloudinary.com/dtbryiptz/image/upload/v1747450752/gallery2_lh3llx.jpg)",backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat" }} className="bg-muted rounded-md row-span-2"></div>
            <div style={{ backgroundImage: "url(https://res.cloudinary.com/dtbryiptz/image/upload/v1747450752/gallery3_bklgdp.jpg)",backgroundPosition: "center",backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TextImage };
