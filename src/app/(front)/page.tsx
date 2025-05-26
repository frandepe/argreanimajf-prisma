import {
  features,
  FeatureSteps,
} from "@/components/FeatureComponent/FeatureComponent";

import { Titleh1 } from "@/components/Texts/Titleh1";
import { LogoSlider } from "@/components/LogoSlider/LogoSlider";
import { TextImage } from "@/components/TextImage/TextImage";
import { BoxTresHome } from "@/components/Box3Home/BoxTresHome";
import { VideoExpansionTextBlend } from "@/components/BannerHero/BnnerHeroVideoDemo";

export default function Home() {
  return (
    <div className="flex flex-col gap-7 md:gap-16">
      <VideoExpansionTextBlend />
      <div className="px-4 md:px-0 container mx-auto">
        <Titleh1
          title={"Dedicamos nuestros esfuerzos a prevenir la muerte súbita."}
          className="mb-4 text-black dark:text-white"
        />
        <p className="text-lg text-black dark:text-white">
          Capacitamos a la gente en reanimación cardiopulmonar (RCP), manejo de
          desfibriladores (DEA) y primeros auxilios.
        </p>

        <p className="text-lg  text-black dark:text-white">
          Impulsamos una comunidad más consciente, solidaria y preparada para
          responder ante emergencias, con la misión de que cada persona pueda
          convertirse en el primer eslabón de la cadena que sostiene la vida.
        </p>
      </div>

      <div className="px-4 md:px-0 ">
        <TextImage />
      </div>

      <div className="bg-gray-100 py-5 md:py-10 px-4 md:px-0">
        <Titleh1 title="Explora nuestras noticias" className="mb-6" />
        <BoxTresHome />
      </div>

      <div className="px-4 md:px-0">
        <FeatureSteps
          features={features}
          title="Capacitación en RCP, estés donde estés"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
      </div>

      <div className="pb-7 md:pb-10 px-4 md:px-0">
        <LogoSlider />
      </div>
    </div>
  );
}
