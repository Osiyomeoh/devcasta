import FaqSection from "@/components/landingpage/FaqSection";
import Features from "@/components/landingpage/Features";
import FooterCard from "@/components/landingpage/FooterCard";
import Hero from "@/components/landingpage/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <FaqSection />
      <FooterCard />
    </main>
  );
}
