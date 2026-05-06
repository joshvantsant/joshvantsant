import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'The design of a compliant horizontal clutch and braking system for chronographs',
    authors: 'van \'t Sant, J.W.',
    venue: 'MSc Thesis, TU Delft',
    year: '2024',
    status: 'under-embargo' as const,
    link: 'https://repository.tudelft.nl/record/uuid:541e0440-0b79-45f1-97a7-a98760d9bc15',
    description: 'This thesis therefore presents the design, modelling and evaluation of a compliant bi-state switching mechanism designed for fabrication from a silicon wafer and integrated with the horizontal clutch and braking system sub-components of mechanical chronographs. The functional requirements of the chronograph sub-functions include reliable switching between the engaged and braking states, secure gear engagement with minimal misalignment during the engaged state, and precise timekeeping through minimal brake timing delay and slippage of the chronograph seconds hand during the braked state. The design is modelled and validated using both an analytical pseudo-rigid body model and a numerical finite element model. A scaled PETG-based proof-of-concept was then fabricated to verify the performance.',
  }
];

const statusStyles = {
  'published': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'under-embargo': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

export default function Publications() {
  return (
    <>
      <SEOHead title="Publications" description="Research publications and thesis work by Josh van 't Sant." />
      
      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide">Publications</h1>
            <p className="text-muted-foreground font-light text-lg">
              Research output and academic contributions
            </p>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-sm p-6 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-light tracking-wide leading-snug">
                    {pub.title}
                  </h3>
                  <span className={`shrink-0 px-2 py-1 text-xs rounded-sm ${statusStyles[pub.status]}`}>
                    {pub.status === 'in-progress' ? 'In Progress' : pub.status === 'under-review' ? 'Under Review' : 'Published'}
                  </span>
                </div>
                <p className="text-sm font-light text-muted-foreground">{pub.authors}</p>
                <p className="text-sm font-light text-muted-foreground">
                  {pub.venue} · {pub.year}
                </p>
                {pub.description && (
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                )}
                {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-light hover:text-muted-foreground transition-colors"
                >
                  <ExternalLink className="size-4" />
                  View Paper
                </a>
              )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
