import BannerHero from "@/components/BannerHero/BannerHero";
import {
  features,
  FeatureSteps,
} from "@/components/FeatureComponent/FeatureComponent";

import { TitleH2 } from "@/components/Texts/TitleH2";
import { LogoSlider } from "@/components/LogoSlider/LogoSlider";
import { TextImage } from "@/components/TextImage/TextImage";
import { BoxTresHome } from "@/components/Box3Home/BoxTresHome";

export default function Home() {
  return (
    <div className="py-20">
      <main className="flex flex-col gap-16">
        <BannerHero
          title="Argentina Reanima"
          description="Objetivo Cumplido: Reglamentación de la Ley 27159 de Muerte Súbita y Sistema Integral de Prevención"
          src={"/images/bannerhero.png"}
        />
        <TextImage />
        <div className="bg-gray-100 py-10">
          <TitleH2 title="Explora nuestras noticias" className="mb-6" />
      <BoxTresHome/>
        </div>
        <FeatureSteps
          features={features}
          title="Capacitación en RCP, estés donde estés"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
        <LogoSlider />

      </main>
    </div>
  );
}
