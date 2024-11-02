import CtaSection from "@/components/sections/CtaSection";
import FaqsSection from "@/components/sections/FaqsSection";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeamSection />
      <FaqsSection />
      <CtaSection />
    </main>
  );
}
