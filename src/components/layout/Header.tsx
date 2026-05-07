import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home',         sectionId: 'home' },
  { name: 'Projects',     sectionId: 'projects' },
  { name: 'Experience',   sectionId: 'experience' },
  { name: 'Publications', sectionId: 'publications' },
];

/**
 * Tracks which section is currently in view by comparing scroll position
 * against each section's top offset.
 */
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Use 40% down the viewport as the trigger point
      const trigger = window.scrollY + window.innerHeight * 0.4;

      // Walk backwards through sections — whichever one we've passed is active
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
}

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navLinks.map(l => l.sectionId);
  const activeSection = useActiveSection(sectionIds);

  // Transparent only on the homepage hero when not scrolled
  const isOnHome = location.pathname === '/';
  const isTransparent = isOnHome && !isScrolled;

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (isOnHome) {
      // Already on the single page — just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On a sub-page (e.g. project detail) — navigate home then scroll via hash
      navigate(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          
            href="#home"
            onClick={e => handleNavClick(e, 'home')}
            className={cn(
              'text-lg font-light tracking-widest transition-colors duration-300',
              isTransparent
                ? 'text-white hover:text-white/70'
                : 'text-foreground hover:text-foreground/70'
            )}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {photographerInfo.name.toUpperCase()}
            </motion.span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = isOnHome && activeSection === link.sectionId;

              return (
                <motion.div
                  key={link.sectionId}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  
                    href={`#${link.sectionId}`}
                    onClick={e => handleNavClick(e, link.sectionId)}
                    className={cn(
                      // Base
                      'relative text-sm font-light tracking-wide transition-colors duration-300 pb-1',
                      // Underbar via after pseudo-element
                      'after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300',
                      // Transparent hero state (dark background)
                      isTransparent && [
                        isActive
                          ? 'text-white after:w-full after:bg-white'
                          : 'text-white/70 hover:text-white after:w-0 hover:after:w-full hover:after:bg-white',
                      ],
                      // Solid header state (light or dark background)
                      !isTransparent && [
                        isActive
                          ? 'text-foreground after:w-full after:bg-foreground'
                          : 'text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full hover:after:bg-foreground',
                      ]
                    )}
                  >
                    {link.name}
                  </a>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'size-9',
                    isTransparent && 'text-white hover:bg-white/10'
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map(link => (
                    
                      key={link.sectionId}
                      href={`#${link.sectionId}`}
                      onClick={e => handleNavClick(e, link.sectionId)}
                      className={cn(
                        'text-lg font-light tracking-wide transition-colors',
                        activeSection === link.sectionId
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
