import Image from "next/image";

interface BannerHeroProps {
  title: string;  
  description: string;
  src?: string | null
}

export default function BannerHero({title, description,src}: BannerHeroProps) {
  return (
    <div className=" overflow-hidden  h-[700px] flex items-center justify-center w-full">
      {/* Imagen de fondo con next/image */}
      <div className="inset-0 w-full h-full -z-10">
        <Image
          src={src || ""}
          alt="Argentina Reanima"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="absolute container text-center text-white w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-oswald ">
     
          {title}
          
        </h1>
     <p className="text-xl md:text-3xl italic whitespace-pre-line break-words w-full mx-auto max-w-3xl text-center">
  {description}
</p>

      </div>
    </div>
  );
}
