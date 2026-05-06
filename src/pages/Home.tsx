import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const [firstName, ...rest] = photographerInfo.name.split(' ');
  const lastName = rest.join(' ');
  
  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center bg-background">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative text-center space-y-6 max-w-4xl px-6">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.25em] leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">{firstName.toUpperCase()}</span>
              <span className="block">{lastName.toUpperCase()}</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {photographerInfo.tagline}
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  About Me
                </h2>

                <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: photographerInfo.biography.split('\n\n')[0],
                    }}
                  />
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                A selection of recent work
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Let's Connect */}
        <section
          id="contact"
          className="py-24 md:py-32 px-6 border-t border-border"
        >
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Let's Connect
              </h2>

              <p className="text-muted-foreground font-light mt-4">
                Open to PhD opportunities, research collaborations, and design engineering roles.
              </p>

              <div className="flex items-center justify-center gap-6 mt-8">
                <a
                  href="https://github.com/joshvantsant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border rounded-sm hover:bg-accent hover:scale-105 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </a>

                <a
                  href="https://linkedin.com/in/joshvantsant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border rounded-sm hover:bg-accent hover:scale-105 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>

                <a
                  href="mailto:J.W.vantSant@tudelft.nl"
                  className="p-4 border border-border rounded-sm hover:bg-accent hover:scale-105 transition-all"
                  aria-label="Email"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
