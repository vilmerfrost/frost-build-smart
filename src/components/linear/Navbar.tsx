import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Snowflake, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTION_URL } from '@/lib/constants';

const navLinks = [
  { href: '#features', label: 'Funktioner' },
  { href: '#pricing', label: 'Priser' },
  { href: '/vs-bygglet', label: 'Vs Bygglet', isRoute: true },
  { href: '/changelog', label: 'Ändringslogg', isRoute: true },
  { href: '#about', label: 'Om oss' },
  { href: '/blog', label: 'Blogg', isRoute: true },
];

// Throttle function for scroll performance
function useThrottle<T extends (...args: unknown[]) => void>(callback: T, delay: number): T {
  const lastCall = useRef(0);
  const lastCallTimer = useRef<NodeJS.Timeout>();

  return useCallback(
    ((...args: unknown[]) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCall.current;

      if (timeSinceLastCall >= delay) {
        lastCall.current = now;
        callback(...args);
      } else {
        // Schedule a call at the end of the delay
        if (lastCallTimer.current) {
          clearTimeout(lastCallTimer.current);
        }
        lastCallTimer.current = setTimeout(() => {
          lastCall.current = Date.now();
          callback(...args);
        }, delay - timeSinceLastCall);
      }
    }) as T,
    [callback, delay]
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  const throttledHandleScroll = useThrottle(handleScroll, 100);

  useEffect(() => {
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [throttledHandleScroll, handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border'
          : 'py-5'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Snowflake className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground">Frost Bygg</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Boka demo
            </Link>
            <a
              href={`${PRODUCTION_URL}/login`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Logga in
            </a>
            <a
              href={`${PRODUCTION_URL}/signup`}
              className="group flex items-center gap-2 text-sm px-5 py-2.5 bg-foreground text-background font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105"
            >
              Starta gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={isMobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-border pt-4"
              aria-label="Mobilmeny"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Boka demo
                  </Link>
                  <a
                    href={`${PRODUCTION_URL}/login`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Logga in
                  </a>
                  <a
                    href={`${PRODUCTION_URL}/signup`}
                    className="flex items-center justify-center gap-2 bg-foreground text-background font-semibold rounded-lg px-4 py-2.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Starta gratis
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
