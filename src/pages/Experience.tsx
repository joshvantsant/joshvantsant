import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';

const experience = [
  {
    type: 'education',
    title: 'MSc in Mechanical Engineering',
    organisation: 'TU Delft',
    period: '2022 – 2024',
    description: 'Specialisation in medical devices and compliant mechanisms.',
  },
  {
    type: 'work',
    subtype: 'research',
    title: 'Research Assistant',
    organisation: 'TU Delft · BioMorphic Intelligence Lab',
    period: "Jul '25 – present",
    description: 'Development of soft robotic grippers and bio-inspired systems.',
  },
  {
    type: 'work',
    subtype: 'industrial',
    title: 'Space & Mechanical Design Engineer',
    organisation: 'ISISpace',
    period: "Jul '25 – Dec '25",
    description: 'Space hardware design and mechanical system development.',
  }
];

export default function Experience() {
  return (
    <>
      <SEOHead
        title="Experience"
        description="Education, research, and professional engineering experience of Josh van 't Sant."
      />

      <div className="min-h-screen">

        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide">
              Experience
            </h1>
            <p className="text-muted-foreground font-light text-lg">
              Education, research, and professional work
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">

            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-sm p-6 space-y-2"
              >
                <div className="flex justify-between gap-4">
                  <h3 className="text-lg font-light">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {item.organisation}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

      </div>
    </>
  );
}
