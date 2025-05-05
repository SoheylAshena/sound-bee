import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import BrandsGrid from "@/components/home/BrandsGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <BrandsGrid />
    </main>
  );
}
