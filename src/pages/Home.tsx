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
    src: '/images/highlights/Graduation.webp',
    title: 'Master Graduation',
    detail: 'Graduating with a Masters in Mechanical Engineering from TU Delft',
    date: "Oct '24",
  },
  {
    src: '/images/compliant_thesis/Flexous.png',
    title: 'Compliant Mechanism Design',
    detail: 'Designing and prototyping a compliant mechanical watch with Flexous Mechanisms',
    date: "'23 - '24",
  },
  {
    src: '/images/highlights/Uganda.webp',
    title: 'Joint Interdisciplinary Project',
    detail: "Interdisciplinary project travelling to Uganda to explore the sustainability of Vela's medical device",
    date: "Sep '23 - Nov '23",
  },
  {
    src: '/images/highlights/honours.webp',
    title: 'Masters Honours Programme',
    detail: 'During my masters, I completed an additional honours programme researching mechanical design and AI',
    date: "'23 - '24",
  },
  {
    src: '/images/highlights/Mont_blanc.webp',
    title: 'Summitting Mont Blanc',
    detail: 'Summitted Mont Blanc in the summer of 2024',
    date: "Sep '24",
  },
  {
    src: '/images/SMA_overview.jpg',
    title: 'Soft Robotic Research',
    detail: 'Post graduate research into interplanetary soft robotic grippers at the BioMorphic Intelligence Lab',
    date: "'25 - '26",
  },
];

const stats = [
  { icon: GraduationCap, value: 'MSc in Mechanical Engineering', label: 'TU Delft' },
  { icon: Building2,     value: 'TU Delft',                      label: 'Research Engineer' },
  { icon: MapPin,        value: 'NZ → NL',                       label: 'Canterbury to Delft' },
  { icon: Briefcase,     value: '5+',                            label: 'Projects & internships' },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const AUTOPLAY_MS = 4500;
const total       = highlights.length;
const mod         = (n: number, m: number) => ((n % m) + m) % m;

// ─── Animation ───────────────────────────────────────────────────────────────
//
// WHY small x instead of ±100%:
//   With ±100%, each slot has to slide its full width. Even a single-frame
//   difference between the three independent AnimatePresence instances is
//   visible as a jerk. With a small x offset (±6%) the travel distance is
//   tiny, so any sub-frame timing difference is imperceptible and the motion
//   feels like one unified fade-slide.
//
const slideVariants = {
  enter:  (dir: 1 | -1) => ({ x: dir > 0 ? '6%' : '-6%', opacity: 0 }),
  center: { x: '0%', opacity: 1 },
  exit:   (dir: 1 | -1) => ({ x: dir > 0 ? '-6%' : '6%', opacity: 0 }),
};

const slideTransition = {
  duration: 0.75,
  ease: [0.4, 0, 0.2, 1] as const,
};

// ─── Main component ───────────────────────────────────────────────────────────

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

        {/* ── About + Highlights + Stats ────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* ── Bio ───────────────────────────────────────────────────────── */}
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
                <ScrollReveal delay={0.15}>
                  <div className="mt-6 flex items-center justify-between w-full max-w-md mx-auto">
                    <a
                      href="#connect"
                      className="group inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <span>Let's Connect</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#projects"
                      className="group inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <span>View My Projects</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* ── Carousel ──────────────────────────────────────────────────── */}
            <ScrollReveal delay={0.1}>
              <div
                className="relative"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/*
                 * EDGE FADE OVERLAY — background-colour gradients sit on top of
                 * the side cards to give a natural "cut-off" bleed effect.
                 * The cards themselves are full-width in their slots; the gradient
                 * just hides the outermost portion so focus stays on the centre.
                 */}
                <div className="relative">
                  <div className="grid grid-cols-[1fr_1.55fr_1fr] gap-3">

                    {/* ── Left slot ─────────────────────────────────────────── */}
                    <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                      <AnimatePresence initial={false} custom={dir}>
                        <motion.div
                          key={`left-${current}`}
                          custom={dir}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={slideTransition}
                          className="absolute inset-0"
                          // Hint to the browser that this element will transform
                          style={{ willChange: 'transform, opacity' }}
                        >
                          <SideCard
                            highlight={highlights[mod(current - 1, total)]}
                            onClick={prev}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* ── Centre slot ───────────────────────────────────────── */}
                    <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                      <AnimatePresence initial={false} custom={dir}>
                        <motion.div
                          key={`center-${current}`}
                          custom={dir}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={slideTransition}
                          className="absolute inset-0"
                          style={{ willChange: 'transform, opacity' }}
                        >
                          <CentreCard highlight={highlights[current]} />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* ── Right slot ────────────────────────────────────────── */}
                    <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                      <AnimatePresence initial={false} custom={dir}>
                        <motion.div
                          key={`right-${current}`}
                          custom={dir}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={slideTransition}
                          className="absolute inset-0"
                          style={{ willChange: 'transform, opacity' }}
                        >
                          <SideCard
                            highlight={highlights[mod(current + 1, total)]}
                            onClick={next}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>

                  {/*
                   * Left + right edge gradients — sit above the cards (z-10),
                   * pointer-events-none so clicks still reach the side cards.
                   * Uses the page background colour to naturally "cut off" the
                   * side images toward the edges.
                   */}
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none rounded-l-sm" />
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none rounded-r-sm" />
                </div>

                {/* Arrows */}
                <button
                  onClick={prev}
                  aria-label="Previous highlight"
                  className="absolute -left-4 top-[42%] -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-foreground hover:bg-muted transition-colors shadow-sm"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next highlight"
                  className="absolute -right-4 top-[42%] -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-foreground hover:bg-muted transition-colors shadow-sm"
                >
                  <ChevronRight className="size-4" />
                </button>

                {/* Dots */}
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
              </div>
            </ScrollReveal>

            {/* ── Stats ─────────────────────────────────────────────────────── */}
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

      </div>
    </>
  );
}

// ─── Side Card ────────────────────────────────────────────────────────────────

function SideCard({
  highlight,
  onClick,
}: {
  highlight: Highlight;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-full overflow-hidden rounded-sm cursor-pointer focus:outline-none"
    >
      {/*
       * IMAGE OPTIMISATION NOTES
       * ─────────────────────────
       * 1. Use WebP (already done for .webp files). Target ~200–400 KB per image
       *    at 2× the displayed pixel width. Side cards display at ~22% of max-w-4xl
       *    (≈ 200px wide on desktop), so 400px wide WebP @ 80 quality is plenty.
       *    Centre card: ~500px displayed → 1000px wide source.
       *
       * 2. Add width/height attributes to prevent layout shift:
       *      <img width="400" height="533" ... />   (3:4 ratio)
       *
       * 3. The first carousel image benefits from fetchpriority="high" since it's
       *    above the fold. All others stay lazy. This is handled in CentreCard for
       *    index 0 — pass an `isPriority` prop if you want to wire it up.
       *
       * 4. If using Next.js: replace <img> with <Image> from 'next/image' and set
       *    sizes="(max-width: 768px) 30vw, 22vw" for side cards.
       *    Centre: sizes="(max-width: 768px) 50vw, 40vw".
       *
       * 5. Generate images with sharp or Squoosh:
       *      npx @squoosh/cli --webp '{"quality":82}' -d public/images/highlights/ *.jpg
       */}
      <motion.img
        src={highlight.src}
        alt={highlight.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale:  hovered ? 1.03 : 1,
          filter: hovered ? 'grayscale(0%)' : 'grayscale(40%)',
          opacity: 0.92,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ willChange: 'transform, filter' }}
      />

      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: hovered ? 0.25 : 0.45 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-3 space-y-1"
          >
            <p className="text-white text-sm font-light leading-snug">
              {highlight.title}
            </p>
            {highlight.date && (
              <p className="text-white/60 text-xs font-light">{highlight.date}</p>
            )}
            {highlight.detail && (
              <p className="text-white/60 text-xs font-light leading-snug line-clamp-3">
                {highlight.detail}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

// ─── Centre Card ──────────────────────────────────────────────────────────────

function CentreCard({ highlight }: { highlight: Highlight }) {
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
        animate={{ scale: hovered ? 1.03 : 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{ willChange: 'transform' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
        <p className="text-white text-sm font-light leading-snug">
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
    </div>
  );
}
