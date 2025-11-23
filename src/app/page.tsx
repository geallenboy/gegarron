import { Header } from '@/components/navigation/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import InteractiveAiSection from '@/components/sections/InteractiveAiSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <FeaturedProjectsSection />
        <TechStackSection />
        <InteractiveAiSection />
        <ContactSection />
      </main>
    </div>
  );
}
