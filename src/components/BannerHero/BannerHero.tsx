import Image from "next/image";
import { BlurFade } from "../Texts/BlurFade";

interface BannerHeroProps {
  title?: string;
  description?: string;
  src?: string | null;
  imgClassname?: string;
}

export default function BannerHero({
  imgClassname,
  title,
  description,
  src,
}: BannerHeroProps) {
  return (
    <div className="relative  overflow-hidden min-h-screen flex items-center justify-center w-full">
      <div className=" absolute  inset-0 w-full -z-10 ">
        <Image
          src={src || ""}
          alt="Argentina Reanima"
          width={300}
          height={300}
          className={`${imgClassname} object-cover h-screen w-full`}
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 w-full min-h-screen h-full" />
      </div>

      <div className="absolute container text-center text-white w-full">
        <BlurFade delay={0.25} inView>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-oswald ">
            {title}
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-xl md:text-3xl italic whitespace-pre-line break-words w-full mx-auto max-w-3xl text-center">
            {description}
          </p>
        </BlurFade>
      </div>
    </div>
  );
}
