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
  { name: "BOSE", logo: "/brands/bose.svg" },
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
    <section className="flex w-full flex-col items-center p-2">
      <h2 className="text-primary animate-fade-in mb-4 text-center text-4xl max-md:text-2xl">{t.home.brands.title}</h2>
      <p className="text-text/70 animate-fade-in-delay max-w-2xl text-center text-lg">{t.home.brands.subtitle}</p>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="hover:bg-secondary/5 relative flex flex-col items-center justify-center rounded-xl p-8 transition-all duration-300"
          >
            <div className="relative h-24 w-48 transition-transform duration-300 hover:scale-110 max-md:h-12 max-md:w-24">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain grayscale filter transition-all duration-200 hover:grayscale-0"
                priority
              />
            </div>
            <h3 className="text-primary mt-6 text-xl font-semibold opacity-0 transition-all duration-300 hover:opacity-100">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsGrid;
