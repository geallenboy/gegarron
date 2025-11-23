import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { personalInfo } from '@/config/site';

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="bg-background w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me & My Philosophy
              </h2>
              <p className="text-muted-foreground text-lg">{personalInfo.bio}</p>

              <div className="space-y-8 pt-6">
                <div>
                  <h3 className="text-primary mb-2 text-2xl font-semibold">My AI Philosophy</h3>
                  <p className="text-muted-foreground">
                    I believe AI is a tool for empowerment. My focus is on building practical,
                    efficient AI applications that automate complex tasks and unlock new creative
                    possibilities, transforming data into actionable intelligence.
                  </p>
                </div>
                <div>
                  <h3 className="text-secondary mb-2 text-2xl font-semibold">My Web3 Vision</h3>
                  <p className="text-muted-foreground">
                    While I'm still early in my Web3 journey, I'm captivated by the potential of
                    decentralization. I am passionate about learning and contributing to a future
                    where users have true ownership of their data and assets.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="group relative h-96 w-80 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/4.png" // Placeholder image
                  alt={personalInfo.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PhilosophySection;
