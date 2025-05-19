import { getTranslations } from "@/utils/translations";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const t = getTranslations();

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
          src="/bwhero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="absolute h-full w-full max-w-[2200px] rounded-2xl object-cover"
        />
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.3),transparent_50%)]" />

        <div className="z-10 flex max-w-7xl flex-col items-center text-center">
          <h1 className="font-oneday text-primary mb-6 text-5xl md:text-6xl lg:text-7xl">{t.general.brandName}</h1>
          <p className="text-text/90 mb-8 max-w-2xl text-xl md:text-2xl">{t.general.tagline}</p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-secondary rounded-lg px-8 py-3 text-lg font-semibold transition-colors"
          >
            شروع سفارش
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
