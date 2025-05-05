import { FaTools, FaHandshake, FaHeadphones, FaClock } from "react-icons/fa";
import { getTranslations, TranslationsType } from "../../utils/translations";

type FeaturesType = TranslationsType["home"]["features"];
type FeatureKey = Extract<keyof FeaturesType, "expert" | "trusted" | "quality" | "support">;

const features = [
  {
    icon: FaTools,
    key: "expert" as FeatureKey,
  },
  {
    icon: FaHandshake,
    key: "trusted" as FeatureKey,
  },
  {
    icon: FaHeadphones,
    key: "quality" as FeatureKey,
  },
  {
    icon: FaClock,
    key: "support" as FeatureKey,
  },
];

const Features = () => {
  const t = getTranslations();

  return (
    <section className="bg-background mb-20 py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-primary mb-4 text-4xl">{t.home.features.title}</h2>
          <p className="text-text/70 mx-auto max-w-2xl text-lg">{t.home.features.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="group hover:bg-secondary/5 ring-accent flex flex-col items-center rounded-xl p-8 text-center ring-2 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary mb-6 rounded-full p-4 transition-all duration-300 group-hover:text-black">
                <feature.icon className="text-3xl" />
              </div>
              <h3 className="text-primary mb-3 text-xl font-semibold">{t.home.features[feature.key].title}</h3>
              <p className="text-text/70">{t.home.features[feature.key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
