import Image from "next/image";

export default function BannerHero() {
  return (
    <header className=" overflow-hidden  h-[700px] flex items-center justify-center">
      {/* Imagen de fondo con next/image */}
      <div className="inset-0 w-full h-full -z-10">
        <Image
          src="/images/1.png"
          alt="Argentina Reanima"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute container text-center text-white z-10">
        <h1 className="text-5xl md:text-8xl font-bold mb-4 font-oswald ">
          Argentina Reanima
        </h1>
        <p className="text-xl md:text-4xl italic">
          De muerte súbita y sistema <br />de prevención integral reglamentada
        </p>
      </div>
    </header>
  );
}
