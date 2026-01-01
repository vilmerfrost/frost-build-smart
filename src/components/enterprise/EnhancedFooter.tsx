import { Snowflake, Linkedin, Github, Mail, Phone, Shield, Server, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  produkt: [
    { label: 'Funktioner', href: '#funktioner' },
    { label: 'Priser', href: '#priser' },
    { label: 'Vs Bygglet', href: '#jamforelse' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Integrationer', href: '#integrationer' },
  ],
  foretag: [
    { label: 'Om oss', href: '#om-oss' },
    { label: 'Karriär', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Villkor', href: '#' },
    { label: 'Integritet', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
  resurser: [
    { label: 'Dokumentation', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blogg', href: '/blog' },
  ],
  kontakt: [
    { label: 'hej@frostbygg.se', href: 'mailto:hej@frostbygg.se', icon: Mail },
    { label: '+46 70 123 45 67', href: 'tel:+46701234567', icon: Phone },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'GitHub', href: '#', icon: Github },
  ],
};

const certifications = [
  { icon: Shield, label: 'GDPR' },
  { icon: Server, label: 'Data i Sverige' },
  { icon: Zap, label: '99.9% uptime' },
];

export function EnhancedFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand - takes 2 columns */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-frost text-primary-foreground">
                <Snowflake className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">Frost Bygg</span>
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Moderna projektverktyg för svenska byggföretag. AI-driven automation, offline-first och transparent prissättning.
            </p>
            
            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div key={cert.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <cert.icon className="h-3.5 w-3.5" />
                  <span>{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Produkt</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.produkt.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Företag</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.foretag.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Resurser</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.resurser.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Kontakt</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.kontakt.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-muted-foreground">
            <span>© 2025 Frost Solutions AB</span>
            <span className="hidden md:inline">|</span>
            <span>Org.nr: 559432-1847</span>
            <span className="hidden md:inline">|</span>
            <span>Ljusdal, Sverige 🇸🇪</span>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Snowflake className="h-4 w-4 text-accent" /> in Sweden
          </p>
        </div>
      </div>
    </footer>
  );
}
