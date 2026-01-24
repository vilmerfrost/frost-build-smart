import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Snowflake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTION_URL = 'https://frostsolutions.se';

const navLinks = [
  { href: '#features', label: 'Funktioner' },
  { href: '#pricing', label: 'Priser' },
  { href: '/changelog', label: 'Ändringslogg', isRoute: true },
  { href: '/blog', label: 'Blogg', isRoute: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]'
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
            <span className="text-lg font-bold text-white">Frost Bygg</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`${PRODUCTION_URL}/login`}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Logga in
            </a>
            <a
              href={`${PRODUCTION_URL}/signup`}
              className="btn-glow text-sm px-4 py-2"
            >
              Starta gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/[0.06] pt-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                  <a
                    href={`${PRODUCTION_URL}/login`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Logga in
                  </a>
                  <a
                    href={`${PRODUCTION_URL}/signup`}
                    className="btn-glow text-center"
                  >
                    Starta gratis
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
