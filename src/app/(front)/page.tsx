import BannerHero from "@/components/BannerHero/BannerHero";
import { FeatureComponent } from "@/components/FeatureComponent/FeatureComponent";
import { ContentCard } from "@/components/ContentCard/ContentCard";
import { TextWithImage } from "@/components/TextImage/TextImage";
import { LogoSlider } from "@/components/LogoSlider/LogoSlider";

export default function Home() {
  return (
    <div className="py-20">
      <main className="flex flex-col gap-16">
        <BannerHero title="Argentina Reanima" description="Objetivo Cumplido: Reglamentación de la Ley 27159 de Muerte Súbita y Sistema Integral de Prevención" src={"/images/1.png"}/>

        <FeatureComponent />

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-center">
          Explora nuestros cursos
        </h2>

        <ContentCard />

        <TextWithImage />

        
    
        <LogoSlider />
      </main>
    </div>
  );
}
