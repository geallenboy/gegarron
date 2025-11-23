'use client';

import { Hero3DScene } from './Hero3DScene';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Briefcase } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Hero3DScene />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="space-y-6">
              <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Ge Garron: Architecting the Future with AI & Web3
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                An AI developer exploring the decentralized frontier, crafting intelligent
                applications and tools for tomorrow's web.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('featured-projects')}
                className="group"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Explore My Work
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('philosophy')}
          className="rounded-full"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
