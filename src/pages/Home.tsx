import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Building2,
  Briefcase,
} from 'lucide-react';

// ─── Types & data ─────────────────────────────────────────────────────────────

interface Highlight {
  src: string;
  title: string;
  detail?: string;
  date?: string;
}

const highlights: Highlight[] = [
  {
    src: '/images/highlights/Graduation.jpg',
    title: 'MSc Graduation',
    detail: 'Mechanical Engineering — TU Delft',
    date: 'Oct 2024',
  },
  {
    src: '/images/Flexous.png',
    title: 'Compliant Mechanism Testing',
    detail: 'Master thesis with Flexous Mechanisms',
    date: "'23 - '24",
  },
  {
    src: '/images/RoboCup.jpg',
    title: 'RoboCup Arena Robot',
    detail: 'Autonomous robot — University of Canterbury',
    date: '2022',
  },
  {
    src: '/images/muffler_system.jpeg',
    title: 'Exhaust Fabrication',
    detail: 'Custom automotive exhaust systems — Uniweld',
    date: '2021',
  },
  {
    src: '/images/spot_welding.jpg',
    title: 'Workshop Manufacturing',
    detail: 'Wire racking fabrication & spot welding',
    date: '2021',
  },
];

const stats = [
  {
    icon: GraduationCap,
    value: 'MSc in Mechanical Engineering',
    label: 'TU Delft',
  },
  {
    icon: Building2,
    value: 'TU Delft',
    label: 'Research Engineer',
  },
  {
    icon: MapPin,
    value: 'NZ → NL',
    label: 'Canterbury to Delft',
  },
  {
    icon: Briefcase,
    value: '5+',
    label: 'Projects & internships',
  },
];

const AUTOPLAY_MS = 4500;
const total = highlights.length;

const mod = (n: number, m: number) => ((n % m) + m) % m;

// ─── Shared animation ────────────────────────────────────────────────────────
// Each slot animates independently inside its own overflow-hidden container.
// x: ±100% is now relative to the slot width ONLY.

const slideVariants = {
  enter: (dir: 1 | -1) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),

  center: {
    x: '0%',
    opacity: 1,
  },

  exit: (dir: 1 | -1) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const slideTransition = {
  duration: 0.52,
  ease: [0.4, 0, 0.2, 1] as const,
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function Home() {
  const [firstName, ...rest] = photographerInfo.name.split(' ');
  const lastName = rest.join(' ');

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);

  const goTo = useCallback((next: number, direction: 1 | -1 = 1) => {
    setDir(direction);
    setCurrent(mod(next, total));
  }, []);

  const prev = () => goTo(current - 1, -1);

  const next = useCallback(() => {
    goTo(current + 1, 1);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(next, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative h-screen w-full flex items-center justify-center bg-background">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative text-center space-y-6 max-w-4xl px-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.15em] leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">
                {firstName.toUpperCase()}
              </span>

              <span className="block whitespace-nowrap">
                {lastName.toUpperCase()}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-light tracking-normal leading-relaxed text-muted-foreground max-w-3xl mx-auto"
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

        {/* ── About + Highlights + Stats ───────────────────────────── */}
        <section className="py-16 md:py-20 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Bio */}
            <ScrollReveal>
              <div className="text-center space-y-5">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  About Me
                </h2>

                <div className="text-lg font-light leading-relaxed text-muted-foreground">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: photographerInfo.biography.split('\n\n')[0],
                    }}
                  />
                </div>

                <a
                  href="#connect"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Let's Connect</span>

                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>

            {/* ── Carousel ─────────────────────────────────────────── */}
            <ScrollReveal delay={0.1}>
              <div
                className="relative"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >

                <div className="flex gap-4 items-center">

                  {/* LEFT SLOT */}
                  <div className="relative flex-[0_0_22%] overflow-hidden rounded-sm aspect-[3/4]">

                    <AnimatePresence
                      initial={false}
                      custom={dir}
                      mode="popLayout"
                    >
                      <motion.div
                        key={`left-${current}`}
                        custom={dir}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={slideTransition}
                        className="absolute inset-0"
                      >
                        <SideCard
                          highlight={highlights[mod(current - 1, total)]}
                          side="left"
                          onClick={prev}
                        />
                      </motion.div>
                    </AnimatePresence>

                  </div>

                  {/* CENTRE SLOT */}
                  <div className="relative flex-1 overflow-hidden rounded-sm aspect-[3/4]">

                    <AnimatePresence
                      initial={false}
                      custom={dir}
                      mode="popLayout"
                    >
                      <motion.div
                        key={`center-${current}`}
                        custom={dir}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={slideTransition}
                        className="absolute inset-0"
                      >
                        <CentreCard
                          highlight={highlights[current]}
                        />
                      </motion.div>
                    </AnimatePresence>

                  </div>

                  {/* RIGHT SLOT */}
                  <div className="relative flex-[0_0_22%] overflow-hidden rounded-sm aspect-[3/4]">

                    <AnimatePresence
                      initial={false}
                      custom={dir}
                      mode="popLayout"
                    >
                      <motion.div
                        key={`right-${current}`}
                        custom={dir}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={slideTransition}
                        className="absolute inset-0"
                      >
                        <SideCard
                          highlight={highlights[mod(current + 1, total)]}
                          side="right"
                          onClick={next}
                        />
                      </motion.div>
                    </AnimatePresence>

                  </div>

                </div>

                {/* Arrows */}
                <button
                  onClick={prev}
                  aria-label="Previous highlight"
                  className="absolute -left-4 top-[42%] -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-foreground hover:bg-muted transition-colors shadow-sm"
                >
                  <ChevronLeft className="size-4" />
                </button>

                <button
                  onClick={next}
                  aria-label="Next highlight"
                  className="absolute -right-4 top-[42%] -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-foreground hover:bg-muted transition-colors shadow-sm"
                >
                  <ChevronRight className="size-4" />
                </button>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {highlights.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        goTo(i, i > current ? 1 : -1)
                      }
                      aria-label={`Go to highlight ${i + 1}`}
                      className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                      style={{
                        width: i === current ? 28 : 10,
                      }}
                    >
                      <span className="absolute inset-0 bg-border rounded-full" />

                      {i === current && !paused && (
                        <motion.span
                          key={`fill-${current}`}
                          className="absolute inset-0 bg-foreground rounded-full origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: AUTOPLAY_MS / 1000,
                            ease: 'linear',
                          }}
                        />
                      )}

                      {i === current && paused && (
                        <span className="absolute inset-0 bg-foreground rounded-full" />
                      )}
                    </button>
                  ))}
                </div>

              </div>
            </ScrollReveal>

            {/* ── Stats ───────────────────────────────────────────── */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <Icon
                      className="size-5 text-muted-foreground"
                      strokeWidth={1.5}
                    />

                    <p className="text-xl md:text-2xl font-light tracking-wide text-foreground">
                      {value}
                    </p>

                    <p className="text-xs text-muted-foreground font-light tracking-wide uppercase leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center pb-16 px-6">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
          >
            <span>View My Projects</span>

            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </>
  );
}

// ─── Side Card ────────────────────────────────────────────────────────────────

function SideCard({
  highlight,
  side,
  onClick,
}: {
  highlight: Highlight;
  side: 'left' | 'right';
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Go to ${highlight.title}`}
      className="relative w-full h-full overflow-hidden rounded-sm cursor-pointer focus:outline-none"
    >
      <motion.img
        src={highlight.src}
        alt={highlight.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: hovered ? 1.06 : 1,
          filter: hovered ? 'grayscale(0%)' : 'grayscale(55%)',
        }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
      />

      <motion.div
        className="absolute inset-0 bg-black"
        animate={{
          opacity: hovered ? 0.2 : 0.48,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-3 space-y-0.5"
          >
            <p className="text-white text-[11px] font-light leading-snug">
              {highlight.title}
            </p>

            {highlight.date && (
              <p className="text-white/55 text-[10px] font-light">
                {highlight.date}
              </p>
            )}

            {highlight.detail && (
              <p className="text-white/55 text-[10px] font-light leading-snug line-clamp-2">
                {highlight.detail}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`absolute inset-y-0 w-6 pointer-events-none ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-background/50 to-transparent'
            : 'left-0 bg-gradient-to-r from-background/50 to-transparent'
        }`}
      />
    </button>
  );
}

// ─── Centre Card ──────────────────────────────────────────────────────────────

function CentreCard({
  highlight,
}: {
  highlight: Highlight;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={highlight.src}
        alt={highlight.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: hovered ? 1.05 : 1,
        }}
        transition={{
          duration: 0.45,
          ease: 'easeOut',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1.5">
        <p className="text-white text-sm font-light tracking-wide leading-snug">
          {highlight.title}
        </p>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.22 }}
              className="space-y-0.5"
            >
              {highlight.date && (
                <p className="text-white/60 text-xs font-light">
                  {highlight.date}
                </p>
              )}

              {highlight.detail && (
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {highlight.detail}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
