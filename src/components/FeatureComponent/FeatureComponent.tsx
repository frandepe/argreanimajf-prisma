import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Aprende lo básico',
    content: 'Flexible y accesible: aprendé cuándo y dónde quieras, a tu propio ritmo.', 
    image: 'https://res.cloudinary.com/dtbryiptz/image/upload/v1747443318/step1_abqguw.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'Aprendizaje en línea',
    content: 'Argentina Reanima ofrece cursos a distancia y combinados para una formación completa y flexible.',
    image: 'https://res.cloudinary.com/dtbryiptz/image/upload/v1747443444/step2_mdfnqi.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Aprende todo sobre rcp y desfibriladores',
    content: 'Aprende a usar desfibriladores y a realizar RCP.',
    image: 'https://res.cloudinary.com/dtbryiptz/image/upload/v1747443546/step3_jp7rfj.jpg'
  },
]

export function FeatureComponent() {
  return (
      <FeatureSteps 
        features={features}
        title="Capacitación en RCP, estés donde estés"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}