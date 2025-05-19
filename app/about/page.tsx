import Image from "next/image";
import { getTranslations } from "../../utils/translations";

export default function About() {
  const { about } = getTranslations();

  return (
    <div className="mt-18 flex flex-col gap-20 p-5">
      <section className="bg-secondary/50 relative rounded-2xl py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-primary mb-6 text-center text-4xl md:text-5xl">{about.title}</h1>
          <p className="text-text/90 mx-auto max-w-3xl text-center text-lg">{about.description}</p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]" />
      </section>

      <section>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-primary mb-6 text-3xl">{about.ourStory.title}</h2>
              <div className="text-text/80 space-y-4">
                {about.ourStory.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] overflow-hidden rounded-lg max-md:h-[400px]">
              <Image
                className="h-full w-full object-cover opacity-50"
                alt=""
                src="/shop.jpg"
                width={500}
                height={500}
                loading="eager"
                blurDataURL="/shop.jpg"
              />
              <div className="from-accent/20 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 rounded-2xl p-5">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-primary mb-5 text-center text-3xl">{about.ourValues.title}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {about.ourValues.values.map((value, index) => (
              <div key={index} className="bg-background/50 hover:bg-background rounded-lg p-6 transition-colors">
                <h3 className="text-primary mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-text/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
