import { skills } from '@/config/site';
import { FadeIn } from '@/components/animations/FadeIn';
import { BrainCircuit, Globe, Code, Bot, Database, Wind, Cog } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  'Next.js': Globe,
  React: Globe,
  TypeScript: Code,
  'Tailwind CSS': Wind,
  'Node.js': Cog,
  PostgreSQL: Database,
  Supabase: Database,
  Qdrant: Database,
  LangChain: Bot,
  n8n: Bot,
  Python: Code,
  wagmi: Cog,
  viem: Cog,
  RainbowKit: Cog,
  Solidity: Code,
  'Ethereum / L2': Cog,
};

const SkillIcon = ({ name }: { name: string }) => {
  const Icon = iconMap[name] || BrainCircuit; // Default to a generic AI icon
  return <Icon className="text-primary mr-2 h-5 w-5" />;
};

export function TechStackSection() {
  const { ai, web, web3 } = skills;

  const skillCategories = [
    { title: 'AI / Machine Learning', skills: ai.items },
    { title: 'Frontend', skills: web.items.filter((s) => s.category === 'frontend') },
    { title: 'Backend', skills: web.items.filter((s) => s.category === 'backend') },
    { title: 'Web3 / Blockchain', skills: web3.items },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Tech Stack</h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              The tools and technologies I use to build things.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <FadeIn key={category.title} className="flex flex-col items-center">
              <h3 className="mb-6 text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-card/50 hover:border-primary flex items-center rounded-full border px-4 py-2 transition-all hover:shadow-md"
                  >
                    <SkillIcon name={skill.name} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
