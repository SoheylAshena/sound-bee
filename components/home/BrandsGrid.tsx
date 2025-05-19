import Image from "next/image";
import { getTranslations } from "../../utils/translations";

const brands = [
  { name: "JBL", logo: "/brands/jbl.svg" },
  { name: "Crown", logo: "/brands/crown.svg" },
  { name: "HARMAN", logo: "/brands/harman.svg" },
  { name: "YAMAHA", logo: "/brands/yamaha.svg" },
  { name: "AKG", logo: "/brands/akg.svg" },
  { name: "DB TECHNOLOGY", logo: "/brands/db-technologies.svg" },
  { name: "DYNACORD", logo: "/brands/dynacord.svg" },
  { name: "MACKIE", logo: "/brands/mackie.svg" },
  { name: "FOCAL", logo: "/brands/focal.svg" },
  { name: "Outline", logo: "/brands/outline.svg" },
  { name: "FBT", logo: "/brands/fbt.svg" },
  { name: "RCF", logo: "/brands/rfc.svg" },
  { name: "Bang & Olufsen", logo: "/brands/bang-olufsen.svg" },
  { name: "ICE power", logo: "/brands/icepower.svg" },
  { name: "Electro Voice", logo: "/brands/electro-voice.svg" },
  { name: "Montarbo", logo: "/brands/montarbo.svg" },
  { name: "Behringer", logo: "/brands/behringer.svg" },
  { name: "Pascal", logo: "/brands/pascal.svg" },
  { name: "DBX", logo: "/brands/dbx.svg" },
  { name: "Soundcraft", logo: "/brands/soundcraft.svg" },
];

const BrandsGrid = () => {
  const t = getTranslations();

  return (
    <section className="flex w-full flex-col items-center p-5">
      <h2 className="text-primary animate-fade-in mb-4 text-center text-4xl max-md:text-2xl">{t.home.brands.title}</h2>
      <p className="text-text/70 animate-fade-in-delay mb-3 max-w-2xl text-center text-lg">{t.home.brands.subtitle}</p>
      <div className="grid w-full max-w-7xl grid-cols-2 gap-8 py-5 md:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={192}
            height={192}
            className="h-24 object-contain grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0 active:scale-110 active:grayscale-0 max-md:w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandsGrid;
