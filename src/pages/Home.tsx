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

// ─── Highlight photos ─────────────────────────────────────────────────────────
// Add your own photos to /public/images/ and update the list below.

interface Highlight {
  src: string;
  title: string;       // always visible (one line)
  detail?: string;     // revealed on hover
  date?: string;       // revealed on hover
}

const highlights: Highlight[] = [
  {
    src: '/images/highlights/Graduation.jpg',         // TODO: your actual graduation photo
    title: 'MSc Graduation',
    detail: 'Mechanical Engineering — TU Delft',
    date: '2025',
  },
  {
    src: '/images/Flexous.png',
    title: 'Compliant Mechanism Testing',
    detail: 'Master thesis with Flexous Mechanisms',
    date: '2024',
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

// ─── Stat row ─────────────────────────────────────────────────────────────────

const stats = [
  { icon: GraduationCap, value: 'MSc',       label: 'Mechanical Engineering' },
  { icon: Building2,     value: 'TU Delft',  label: 'Graduate university'    },
  { icon: MapPin,        value: 'NZ → NL',   label: 'Canterbury to Delft'   },
  { icon: Briefcase,     value: '5+',        label: 'Projects & internships' },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const AUTOPLAY_MS = 4500;
const total = highlights.length;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const [firstName, ...rest] = photographerInfo.name.split(' ');
  const lastName = rest.join(' ');

  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [dir,     setDir]     = useState<1 | -1>(1);

  const goTo = useCallback((next: number, direction: 1 | -1 = 1) => {
    setDir(direction);
    setCurrent(mod(next, total));
  }, []);

  const prev = () => goTo(current - 1, -1);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const prevIdx = mod(current - 1, total);
  const nextIdx = mod(current + 1, total);

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
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

        {/* ── About me + Highlights ─────────────────────────────────────── */}
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

            {/* ── 3-up Highlight Carousel ────────────────────────────────── */}
            <ScrollReveal delay={0.1}>
              <div
                className="relative"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Slides */}
                <div className="flex items-stretch gap-3">

                  {/* ── Left (prev) ──────────────────────────────────────── */}
                  <SideCard
                    highlight={highlights[prevIdx]}
                    onClick={prev}
                    side="left"
                  />

                  {/* ── Centre (active) ───────────────────────────────────── */}
                  <CentreCard
                    highlight={highlights[current]}
                    paused={paused}
                    dir={dir}
                  />

                  {/* ── Right (next) ─────────────────────────────────────── */}
                  <SideCard
                    highlight={highlights[nextIdx]}
                    onClick={next}
                    side="right"
                  />
                </div>

                {/* Dot indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {highlights.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > current ? 1 : -1)}
                      aria-label={`Go to highlight ${i + 1}`}
                      className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                      style={{ width: i === current ? 28 : 10 }}
                    >
                      <span className="absolute inset-0 bg-border rounded-full" />
                      {i === current && !paused && (
                        <motion.span
                          key={`fill-${current}`}
                          className="absolute inset-0 bg-foreground rounded-full origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                        />
                      )}
                      {i === current && paused && (
                        <span className="absolute inset-0 bg-foreground rounded-full" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Prev / next arrow buttons */}
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
              </div>
            </ScrollReveal>

            {/* ── Stat row (below highlights) ───────────────────────────── */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center">
                    <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
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

        {/* CTA to projects */}
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

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * Side card — dimmed, clickable to navigate, shows title only.
 * Hover reveals detail text and lifts slightly.
 */
function SideCard({
  highlight,
  onClick,
  side,
}: {
  highlight: Highlight;
  onClick: () => void;
  side: 'left' | 'right';
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Go to ${highlight.title}`}
      className="relative flex-[0_0_22%] overflow-hidden rounded-sm aspect-[3/4] cursor-pointer focus:outline-none"
      style={{ minWidth: 0 }}
    >
      <motion.img
        src={highlight.src}
        alt={highlight.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ filter: hovered ? 'grayscale(0%)' : 'grayscale(60%)' }}
      />

      {/* Dim overlay — lightens slightly on hover */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: hovered ? 0.25 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white/80 text-[11px] font-light leading-snug line-clamp-1">
          {highlight.title}
        </p>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="space-y-0.5 mt-1"
            >
              {highlight.date && (
                <p className="text-white/50 text-[10px] font-light">{highlight.date}</p>
              )}
              {highlight.detail && (
                <p className="text-white/50 text-[10px] font-light leading-snug line-clamp-2">
                  {highlight.detail}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Edge fade toward centre */}
      <div
        className={`absolute inset-y-0 w-8 ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-background/60 to-transparent'
            : 'left-0 bg-gradient-to-r from-background/60 to-transparent'
        }`}
      />
    </button>
  );
}

/**
 * Centre card — full brightness, slide-animated, hover reveals detail text.
 */
function CentreCard({
  highlight,
  paused,
  dir,
}: {
  highlight: Highlight;
  paused: boolean;
  dir: 1 | -1;
}) {
  const [hovered, setHovered] = useState(false);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? '-60%' : '60%', opacity: 0 }),
  };

  return (
    <div
      className="relative flex-1 overflow-hidden rounded-sm aspect-[3/4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={highlight.src}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.42, ease: [0.32, 0, 0.67, 0] }}
          className="absolute inset-0"
        >
          <motion.img
            src={highlight.src}
            alt={highlight.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Caption */}
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
                    <p className="text-white/60 text-xs font-light">{highlight.date}</p>
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
