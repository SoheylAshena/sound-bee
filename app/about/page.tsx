import Image from "next/image";

export default function About() {
  return (
    <div className="bg-background">
      <section className="bg-secondary relative py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-oneday text-primary mb-6 text-center text-4xl md:text-5xl">About Sound Bee</h1>
          <p className="text-text/90 mx-auto max-w-3xl text-center text-lg">
            We are passionate about bringing your premium sound equipment back to life with expert care and precision.
          </p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]" />
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-oneday text-primary mb-6 text-3xl">Our Story</h2>
              <div className="text-text/80 space-y-4">
                <p>
                  Founded by audio enthusiasts with decades of experience, Sound Bee has become the go-to workshop for
                  premium sound bar repairs.
                </p>
                <p>
                  We understand that your sound system is an investment in quality entertainment, which is why we treat
                  every repair with the utmost care and attention to detail.
                </p>
                <p>
                  Our team of certified technicians specializes in repairing and maintaining sound bars from all major
                  brands, ensuring that your audio equipment performs at its best.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <div className="bg-primary/20 absolute inset-0" />
              <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-oneday text-primary mb-12 text-center text-3xl">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Excellence",
                description: "We strive for perfection in every repair we undertake.",
              },
              {
                title: "Integrity",
                description: "Honest advice and transparent repair processes.",
              },
              {
                title: "Innovation",
                description: "Using the latest repair techniques and equipment.",
              },
            ].map((value, index) => (
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
