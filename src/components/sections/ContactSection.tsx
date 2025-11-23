'use client';

import { socialLinks, siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Mail } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  github: Github,
  twitter: Twitter,
  mail: Mail,
};

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <FadeIn className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Have a project in mind, or just want to say hello? I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <Button key={link.name} size="lg" variant="outline" asChild>
                  <a
                    href={link.url}
                    target={link.icon !== 'mail' ? '_blank' : 'noopener noreferrer'}
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Icon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    {link.name}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <footer className="mt-32 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
