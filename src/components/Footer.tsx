import { Link } from 'react-router-dom';
import { Snowflake, Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = {
  produkt: [
    { label: 'Funktioner', href: '/#features' },
    { label: 'Priser', href: '/#pricing' },
    { label: 'Vs Bygglet', href: '/vs-bygglet', isRoute: true },
    { label: 'Changelog', href: '/changelog', isRoute: true },
    { label: 'För utvecklare', href: '/developers', isRoute: true },
  ],
  foretag: [
    { label: 'Om oss', href: '/#about' },
    { label: 'Kontakt', href: '/contact', isRoute: true },
    { label: 'Blogg', href: '/blog', isRoute: true },
  ],
  juridiskt: [
    { label: 'Säkerhet', href: '/security', isRoute: true },
    { label: 'Integritetspolicy', href: '#' },
    { label: 'Användarvillkor', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:vilmer.frost@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-frost text-primary-foreground">
                <Snowflake className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">Frost Bygg</span>
            </a>
            <p className="mt-4 max-w-xs text-muted-foreground">
              AI-driven projektverktyg för svenska byggföretag. Det Bygglet borde ha varit.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground">Produkt</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Företag</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.foretag.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Juridiskt</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.juridiskt.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Frost Solutions AB
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Snowflake className="h-4 w-4 text-accent" /> in Stockholm, Sweden
          </p>
        </div>
      </div>
    </footer>
  );
}
