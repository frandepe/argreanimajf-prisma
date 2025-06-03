"use client";

import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "¿Dónde es obligatorio un DEA?",
    answer: `Un DEA es obligatorio en una amplia variedad de espacios públicos y privados de acceso público cuyo volumen de tránsito y permanencia de personas se determine por la autoridad de aplicación. 
Incluyen:

• Lugares donde se practica actividad física competitiva y/o recreativa.
• Establecimientos carcelarios, centrales de policía, comisarías y cuarteles de bomberos.
• Efectores de salud con servicios de emergencia médica o más de 4 consultorios.
• Espacios con circulación de más de 1000 personas por día (centros comerciales, bancos, teatros, escuelas, etc.).
• Aeronaves, embarcaciones o trenes de larga distancia con capacidad para más de 100 personas.
• Lugares de trabajo con más de 1000 empleados diarios.

La circulación se calcula dividiendo la afluencia total anual por los días de funcionamiento.`,
  },
  {
    question:
      "¿Qué instructores están habilitados para transmitir esos conocimientos?",
    answer:
      "El Ministerio de Salud o quien este designe capacita a las personas que certifiquen espacios cardio-asistidos. Estas personas se denominan 'instructoras habilitantes'. Además, el personal debe estar capacitado en RCP básica por instructores habilitados por la Dirección Nacional de Emergencias Sanitarias. Las instituciones formadoras deben estar acreditadas oficialmente.",
  },
  {
    question: "¿Las escuelas deben ser cardioasistidas?",
    answer:
      "Sí, si tienen una capacidad, concentración o circulación de más de 1000 personas por día. Incluso si no alcanzan ese número, si se realiza actividad física, también deben contar con DEA. La ley contempla el ejercicio físico como un riesgo para eventos arrítmicos graves.",
  },
  {
    question: "¿Qué otros espacios deben ser cardioasistidos?",
    answer: `Cualquier espacio público o privado de acceso público que cumpla con los criterios de volumen de tránsito y permanencia. Estos espacios deben contar, como mínimo, con:

• Personal capacitado por instituciones oficiales.
• Señalización adecuada para los DEA.
• Sistema de emergencia médica (público o privado).
• Protocolo institucional adaptado para emergencias.`,
  },
  {
    question:
      "¿Una escuela donde se hace actividad física, donde asisten 500 personas, debe tener un DEA?",
    answer:
      "Sí. Aunque no se superen las 1000 personas por día, el hecho de que se realice actividad física es motivo suficiente para requerir un DEA, según la normativa.",
  },
  {
    question: "¿Un gimnasio donde asisten 100 personas debe tener DEA?",
    answer:
      "Sí. Los gimnasios y lugares donde se realiza actividad física están obligados a contar con DEA, sin importar la cantidad exacta de asistentes. El criterio clave es el riesgo asociado al esfuerzo físico.",
  },
  {
    question:
      "¿Qué requisitos deben tener los espacios públicos para exigir un DEA?",
    answer: `Deben cumplir con la Ley N.º 27.159 y el Decreto Reglamentario N.º 402/2022. Los criterios principales son:

• Ser espacios de acceso público.
• Superar las 1000 personas por día o pertenecer a categorías específicas (gimnasios, cárceles, centros de salud, etc.).

También deben cumplir con los requisitos para ser considerados espacios cardioasistidos, como personal capacitado, señalización, sistema de emergencias y protocolo adaptado.`,
  },
];

export const Faq = ({
  badge = "FAQ",
  heading = "Hacemos preguntas al texto de la ley y su reglamentación",
  faqs = defaultFaqs,
}: FaqProps) => {
  return (
    <section className="">
      <div className="container">
        <div className="text-center">
          <Badge className="text-lg font-medium">{badge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold">{heading}</h1>
        </div>
        <div className="mx-auto mt-14 max-w-screen-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary font-mono text-lg text-white">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium text-xl">{faq.question}</h3>
                </div>
                <p className="text-lg text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
