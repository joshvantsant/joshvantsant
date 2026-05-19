import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

/**
 * Portfolio / Projects page
 * Displays engineering and academic projects in a responsive grid.
 * Hover over any card to reveal the project summary and skill tags.
 */
export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Projects"
        description="Engineering and research projects spanning mechanical design, robotics, compliant mechanisms, soft robotics, and fabrication."
      />

      <div className="min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Projects
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                A collection of engineering and research work spanning academic
                study, industry internships, and independent projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <PortfolioGrid projects={projects} />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
