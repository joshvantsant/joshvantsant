import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Highlight photos ─────────────────────────────────────────────────────────
// Add your own images to /public/images/ and update this list.
// Each entry has a src, a short caption, and an optional sub-caption.

interface Highlight {
  src: string;
  caption: string;
  sub?: string;
}

const highlights: Highlight[] = [
  {
    src: '/images/graduation.jpg',           // TODO: replace with your actual photo
    caption: 'MSc Graduation',
    sub: 'TU Delft, 2025',
  },
  {
    src: '/images/Flexous.png',
    caption: 'Compliant Mechanism Testing',
    sub: 'Master thesis — Flexous Mechanisms',
  },
  {
    src: '/images/RoboCup.jpg',
    caption: 'RoboCup Arena Robot',
    sub: 'University of Canterbury',
  },
  {
    src: '/images/muffler_system.jpeg',
    caption: 'Exhaust Fabrication',
    sub: 'Uniweld internship',
  },
  // Add more highlights here as you get photos from your JIP, design projects, etc.
];

// ─── Stat row ─────────────────────────────────────────────────────────────────

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: 'MSc',        label: 'Mechanical Engineering' },
  { value: 'TU Delft',   label: 'Graduate university' },
  { value: 'NZ → NL',    label: 'Canterbury to Delft' },
  { value: '5+',         label: 'Projects & internships' },
];

// ─── Component ────────────────────────────────────────────────────────────────

const AUTOPLAY_MS = 4500;

export default function Home() {
  const [firstName, ...rest] = photographerInfo.name.split(' ');
  const lastName = rest.join(' ');

  // Carousel state
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [dir,     setDir]     = useState<1 | -1>(1); // animation direction

  const total = highlights.length;

  const goTo = useCallback(
    (next: number, direction: 1 | -1 = 1) => {
      setDir(direction);
      setCurrent((next + total) % total);
    },
    [total],
  );

  const prev = () => goTo(current - 1, -1);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center:              { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative h-screen w-full flex items-center justify-center bg-background">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative text-center space-y-6 max-w-4xl px-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.15em] leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">{firstName.toUpperCase()}</span>
              <span className="block whitespace-nowrap">{lastName.toUpperCase()}</span>
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

        {/* ── About + Stats ─────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto space-y-12">

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

            {/* Stat row */}
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-border">
                {stats.map((s) => (
                  <div key={s.label} className="text-center space-y-1">
                    <p className="text-2xl md:text-3xl font-light tracking-wide text-foreground">
                      {s.value}
                    </p>
                    <p className="text-xs text-muted-foreground font-light tracking-wide uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Photo highlight carousel ───────────────────────────────────────── */}
        <section className="py-20 md:py-28 border-t border-border bg-background">
          <ScrollReveal>
            <div className="text-center mb-10 px-6 space-y-2">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                Highlights
              </h2>
              <p className="text-base text-muted-foreground font-light">
                Moments from study, research, and work
              </p>
            </div>
          </ScrollReveal>

          {/* Carousel */}
          <div
            className="relative max-w-3xl mx-auto px-4"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Slide window */}
            <div className="relative overflow-hidden rounded-sm aspect-[16/10] bg-muted">
              <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.div
                  key={current}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.32, 0, 0.67, 0] }}
                  className="absolute inset-0"
                >
                  <img
                    src={highlights[current].src}
                    alt={highlights[current].caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />

                  {/* Caption gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 space-y-0.5">
                    <p className="text-white text-base font-light tracking-wide">
                      {highlights[current].caption}
                    </p>
                    {highlights[current].sub && (
                      <p className="text-white/60 text-xs font-light">
                        {highlights[current].sub}
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                aria-label="Previous highlight"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 border border-white/15 text-white backdrop-blur-sm transition-colors"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next highlight"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 border border-white/15 text-white backdrop-blur-sm transition-colors"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Dot indicators + progress */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {highlights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Go to highlight ${i + 1}`}
                  className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: i === current ? 28 : 12 }}
                >
                  {/* Track */}
                  <span className="absolute inset-0 bg-border rounded-full" />
                  {/* Active fill — animates across the active dot */}
                  {i === current && !paused && (
                    <motion.span
                      key={`fill-${current}`}
                      className="absolute inset-0 bg-foreground rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                    />
                  )}
                  {/* Static fill when paused or inactive-but-active */}
                  {i === current && paused && (
                    <span className="absolute inset-0 bg-foreground rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA to projects */}
          <ScrollReveal delay={0.3}>
            <div className="flex justify-center mt-14 px-6">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View My Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </>
  );
}
