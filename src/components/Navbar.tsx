import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useEasterEggTriggers } from '@/components/EasterEggs';
import { ExternalLink } from '@/components/ExternalLink';

const PRODUCTION_URL = 'https://frostsolutions.se';

const navLinks = [
  { href: '#funktioner', label: 'Funktioner' },
  { href: '#priser', label: 'Priser' },
  { href: '#vs-bygglet', label: 'Vs Bygglet' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '/changelog', label: 'Changelog', isRoute: true },
  { href: '/blog', label: 'Blogg', isRoute: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { triggerLogoClick, triggerThemeToggle, triggerLogoHover } = useEasterEggTriggers();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggleClick = () => {
    toggleTheme();
    triggerThemeToggle();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2.5 font-bold text-xl text-foreground group" 
            onClick={triggerLogoClick} 
            onMouseEnter={triggerLogoHover}
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-105">
              FB
            </div>
            <span className="hidden sm:inline font-semibold tracking-tight">Frost Bygg</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={handleThemeToggleClick}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-105"
              aria-label="Växla tema"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <ExternalLink href={`${PRODUCTION_URL}/login`}>Logga in</ExternalLink>
            </Button>
            <Button variant="frost" size="sm" className="shadow-md hover:shadow-lg transition-shadow group" asChild>
              <ExternalLink href={`${PRODUCTION_URL}/signup`}>
                Kom igång
                <ExternalLinkIcon className="ml-1 h-3 w-3 opacity-70" />
              </ExternalLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted"
              aria-label="Växla tema"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted"
              aria-label="Öppna meny"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start text-muted-foreground" asChild>
                <ExternalLink href={`${PRODUCTION_URL}/login`}>Logga in</ExternalLink>
              </Button>
              <Button variant="frost" className="shadow-md" asChild>
                <ExternalLink href={`${PRODUCTION_URL}/signup`}>
                  Kom igång
                  <ExternalLinkIcon className="ml-1 h-3 w-3 opacity-70" />
                </ExternalLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
