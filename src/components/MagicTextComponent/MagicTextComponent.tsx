import { MagicText } from "@/components/ui/magic-text";

const MagictTextComponent = () => {
  return (
    <>
      <div className=" flex items-center justify-center">
        <MagicText
          text={
            "Somos una organizacion dedicada a la formación en Reanimación Cardiopulmonar (RCP) y primeros auxilios, con la misión de empoderar a personas y comunidades para actuar con rapidez y eficacia ante emergencias. Con años de experiencia, capacitamos a ciudadanos, instituciones educativas, empresas y profesionales de la salud con técnicas actualizadas, basadas en estándares internacionales. Nuestro compromiso es simple pero poderoso: salvar vidas. A través de la educación, la conciencia y la acción, trabajamos para construir una Argentina más preparada, más segura y más humana."
          }
        />
        
      </div>
    
    </>
  );
};

export { MagictTextComponent };
