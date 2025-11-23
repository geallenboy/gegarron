'use client';

import Image from 'next/image';
import { projects, type Project } from '@/config/site';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn>
      <div className="group relative grid h-auto w-full grid-cols-1 overflow-hidden rounded-lg border shadow-lg lg:grid-cols-2">
        <div className="relative aspect-video lg:order-last">
          <Image
            src={project.image || '/2.jpg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <h3 className="text-primary text-2xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground mt-4">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary/10 text-secondary rounded-full px-3 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            {project.links.demo && (
              <Button asChild>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" asChild>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="featured-projects" className="bg-secondary/10 w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              A selection of my best work in AI and Web3.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-5xl space-y-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
