import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, FlaskConical, Calendar, Building2 } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';

const education = [
  {
    title: 'MSc in Mechanical Engineering',
    organisation: 'TU Delft',
    period: '2022 – 2024',
    description: 'Specialisation in medical devices and compliant mechanisms. Thesis on soft robotic systems.',
  },
  {
    title: 'BSc in Mechanical Engineering',
    organisation: 'TU Delft',
    period: '2019 – 2022',
    description: 'Add your BSc details here.',
  },
];

const researchExperience = [
  {
    title: 'Research Assistant',
    organisation: 'TU Delft · BioMorphic Intelligence Lab',
    period: "Jul '25 – present",
    description: 'Development of soft robotic grippers and bio-inspired systems for adaptive manipulation.',
  },
];

const industryExperience = [
  {
    title: 'Space & Mechanical Design Engineer',
    organisation: 'ISISpace',
    period: "Jul '25 – Dec '25",
    description: 'Space hardware design and mechanical system development for small satellite platforms.',
  },
  {
    title: 'Design Engineer',
    organisation: 'Flexous',
    period: "...",
    description: 'Add details here.',
  },
];

interface TimelineItemProps {
  title: string;
  organisation: string;
  period: string;
  description: string;
  index: number;
  isLast: boolean;
}

function TimelineItem({ title, organisation, period, description, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-4"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Dot and line */}
      <div className="flex flex-col items-center">
        <div className="size-2 rounded-full bg-foreground/40 mt-1.5 shrink-0 z-10" />
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2" />
        )}
      </div>

      {/* Card */}
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <div className="border border-border rounded-sm p-4 space-y-2 hover:bg-accent/50 transition-colors">
          <h3 className="text-base font-light tracking-wide">{title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="size-3" />
              {organisation}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="size-3" />
              {period}
            </span>
          </div>
          <p className="text-sm font-light text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface ColumnProps {
  icon: React.ReactNode;
  title: string;
  items: typeof education;
  startDelay?: number;
}

function Column({ icon, title, items, startDelay = 0 }: ColumnProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-foreground/60">{icon}</div>
        <h2 className="text-2xl md:text-3xl font-light tracking-wide">{title}</h2>
      </div>
      <div>
        {items.map((item, i) => (
          <TimelineItem
            key={i}
            {...item}
            index={i + startDelay}
            isLast={i === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <SEOHead
        title="Experience"
        description="Education, research, and professional engineering experience of Josh van 't Sant."
      />

      <div className="min-h-screen">
        {/* Header */}
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

        {/* Two column layout */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left — Education */}
            <Column
              icon={<GraduationCap className="size-6" />}
              title="Education"
              items={education}
            />

            {/* Right — Experience */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-foreground/60">
                    <FlaskConical className="size-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                    Research
                  </h2>
                </div>
                {researchExperience.map((item, i) => (
                  <TimelineItem
                    key={i}
                    {...item}
                    index={i}
                    isLast={i === researchExperience.length - 1}
                  />
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-foreground/60">
                    <Briefcase className="size-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                    Industry
                  </h2>
                </div>
                {industryExperience.map((item, i) => (
                  <TimelineItem
                    key={i}
                    {...item}
                    index={i + researchExperience.length}
                    isLast={i === industryExperience.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
