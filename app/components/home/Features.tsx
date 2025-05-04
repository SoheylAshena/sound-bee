import { FaTools, FaClock, FaAward, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: FaTools,
    title: "Expert Repairs",
    description: "Specialized technicians with years of experience in sound bar repair",
  },
  {
    icon: FaClock,
    title: "Quick Service",
    description: "Fast turnaround times without compromising on quality",
  },
  {
    icon: FaAward,
    title: "Quality Guaranteed",
    description: "All repairs come with our satisfaction guarantee",
  },
  {
    icon: FaHandshake,
    title: "Trusted Service",
    description: "Authorized repair center for major sound bar brands",
  },
];

const Features = () => {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-oneday text-primary mb-12 text-center text-3xl md:text-4xl">Why Choose Sound Bee?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/50 hover:bg-secondary flex flex-col items-center rounded-lg p-6 text-center transition-colors"
            >
              <feature.icon className="text-primary mb-4 h-12 w-12" />
              <h3 className="text-text mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-text/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
