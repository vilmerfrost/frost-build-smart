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
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollSyncDone = useRef(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const prev = lastScrollY.current;
    setIsScrolled(y > 20);

    if (!scrollSyncDone.current) {
      scrollSyncDone.current = true;
      lastScrollY.current = y;
      return;
    }

    if (y < 24) {
      setIsVisible(true);
    } else if (y > prev && y > 72) {
      setIsVisible(false);
    } else if (y < prev) {
      setIsVisible(true);
    }
    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const linkClass =
    'text-sm font-medium tracking-tight text-[#594138] transition-colors duration-200 hover:text-[#f26522]';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#fbf9f6]/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#1b1c1a] hover:opacity-90 transition-opacity"
        >
          <Snowflake className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
          <span className="text-xl font-bold tracking-tighter">Frost Solutions</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.href} to={link.href} className={linkClass}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            )
          )}
          <a
            href={`${PRODUCTION_URL}/login`}
            className={linkClass}
          >
            Logga in
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href={`${PRODUCTION_URL}/signup`}
            className="ember-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f26522]/20"
          >
            Starta gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden rounded-lg p-2 text-[#594138] transition-colors hover:text-[#f26522]"
          aria-label={isMobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.75} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.75} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mx-4 overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl"
            aria-label="Mobilmeny"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#1b1c1a] transition-colors hover:bg-[#f5f3f0]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#1b1c1a] transition-colors hover:bg-[#f5f3f0]"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href={`${PRODUCTION_URL}/login`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#594138] transition-colors hover:bg-[#f5f3f0]"
              >
                Logga in
              </a>
              <div className="mt-3 pt-3 border-t border-[#e1bfb3]/30">
                <a
                  href={`${PRODUCTION_URL}/signup`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block ember-gradient text-white text-center w-full py-3 rounded-full font-semibold text-sm"
                >
                  Starta gratis
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
