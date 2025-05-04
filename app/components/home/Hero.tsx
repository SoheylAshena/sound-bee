import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-secondary relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-oneday text-primary mb-6 text-5xl md:text-6xl lg:text-7xl">Sound Bee</h1>
          <p className="text-text/90 mb-8 max-w-2xl text-xl md:text-2xl">
            Your trusted partner in bringing premium sound bars back to life. Professional repairs for all major brands.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-secondary rounded-lg px-8 py-3 text-lg font-semibold transition-colors"
          >
            Get Expert Help
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]" />
    </section>
  );
};

export default Hero;
