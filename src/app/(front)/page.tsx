import BannerHero from "@/components/BannerHero/BannerHero";
import { FeatureComponent } from "@/components/FeatureComponent/FeatureComponent";
import { ContentCard } from "@/components/ContentCard/ContentCard";
import { TextWithImage } from "@/components/TextImage/TextImage";
import { LogoSlider } from "@/components/LogoSlider/LogoSlider";
import { TitleH2 } from "@/components/Texts/TitleH2";

export default function Home() {
  return (
    <div className="py-20">
      <main className="flex flex-col gap-16">
        <BannerHero
          title="Argentina Reanima"
          description="Objetivo Cumplido: Reglamentación de la Ley 27159 de Muerte Súbita y Sistema Integral de Prevención"
          src={"/images/1.png"}
        />
        <TextWithImage />
        <div className="bg-gray-100 py-10">
          <TitleH2 title="Explora nuestros cursos" className="mb-6" />
          <ContentCard />
        </div>
        <FeatureComponent />
        <LogoSlider />
      </main>
    </div>
  );
}
