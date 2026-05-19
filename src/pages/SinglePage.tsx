import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Publications from './Publications';
import Contact from './Contact';

/**
 * Single-page layout — all sections stacked vertically.
 * Nav links use href="#<id>" to scroll to each section.
 * If the URL already has a hash on load (e.g. /#projects), we scroll there.
 *
 * Section IDs:
 *   #home        → landing / intro
 *   #projects    → portfolio grid
 *   #experience  → work & education timeline
 *   #publications → papers / reports
 *   #connect     → contact form
 */
export default function SinglePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1); // strip the leading '#'
    if (hash) {
      // Small delay lets React finish rendering before we try to scroll
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main>
      <section id="home" aria-label="Introduction">
        <Home />
      </section>

      <section id="projects" aria-label="Projects">
        <Portfolio />
      </section>

      <section id="experience" aria-label="Experience">
        <Experience />
      </section>

      <section id="publications" aria-label="Publications">
        <Publications />
      </section>

      <section id="connect" aria-label="Contact">
        <Contact />
      </section>
    </main>
  );
}
