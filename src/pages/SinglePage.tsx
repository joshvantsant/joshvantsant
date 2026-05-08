import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Publications from './Publications';
import Contact from './Contact';

/**
 * Single-page layout — all sections stacked and scroll-snapped.
 * Nav links scroll to each section by ID.
 * Hash in URL (e.g. /#projects) scrolls to the correct section on load.
 */
export default function SinglePage() {
  const location = useLocation();

  // On mount, if there's a hash in the URL scroll to that section
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  return (
    <main>
      <section id="home">
        <Home />
      </section>

      <section id="projects">
        <Portfolio />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="publications">
        <Publications />
      </section>

      <section id="contact">
        <Publications />
      </section>
    </main>
  );
}
