import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Check, Loader2, Twitter, Linkedin, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { subscribeNewsletter } from '@/lib/email';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Vänligen ange din e-postadress');
      return;
    }

    if (!validateEmail(email)) {
      setError('Vänligen ange en giltig e-postadress');
      toast.error('Ogiltig e-postadress', {
        description: 'Kontrollera att du har angett en korrekt e-postadress.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await subscribeNewsletter(email);

      if (result.success) {
        setIsSubscribed(true);
        setEmail('');
        toast.success('Prenumeration bekräftad!', {
          description: 'Du kommer nu få vårt nyhetsbrev.',
        });
      } else {
        throw new Error(result.error);
      }
    } catch {
      setError('Något gick fel. Försök igen.');
      toast.error('Något gick fel', {
        description: 'Kunde inte slutföra prenumerationen. Försök igen.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const linkClass =
    'text-sm text-[#594138] transition-colors hover:text-[#f26522]';

  return (
    <footer className="bg-white">
      {/* Newsletter */}
      <div className="border-t border-[#e1bfb3]/20">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="max-w-xl mx-auto text-center">
            <Mail className="h-8 w-8 text-[#f26522] mx-auto mb-4" strokeWidth={1.75} />
            <h3 className="text-2xl font-extrabold text-[#1b1c1a] mb-2">
              Få tips & tricks för byggbranschen
            </h3>
            <p className="text-[#594138] mb-8">
              Prenumerera på vårt nyhetsbrev för de senaste uppdateringarna.
            </p>

            {isSubscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f3f0] text-[#1b1c1a] font-medium">
                <Check className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
                Tack för din prenumeration!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Din e-post"
                  className={`flex-1 px-5 py-3.5 rounded-full bg-[#f5f3f0] text-[#1b1c1a] placeholder:text-[#594138]/50 focus:outline-none focus:ring-2 focus:ring-[#f26522]/30 ${
                    error ? 'ring-2 ring-red-400' : ''
                  }`}
                  aria-label="E-postadress för nyhetsbrev"
                  aria-invalid={!!error}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ember-gradient text-white px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.75} />
                  ) : (
                    <>
                      Prenumerera
                      <Send className="h-4 w-4" strokeWidth={1.75} />
                    </>
                  )}
                </button>
              </form>
            )}
            {error && !isSubscribed && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="border-t border-[#e1bfb3]/20">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="col-span-2 md:col-span-1">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#1b1c1a] mb-4"
              >
                <Snowflake className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
                <span className="text-lg font-extrabold tracking-tighter">Frost</span>
              </Link>
              <p className="text-sm text-[#594138] leading-relaxed max-w-xs">
                AI-driven projekthantering för svensk byggindustri.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1b1c1a] mb-5">
                Produkt
              </h4>
              <ul className="space-y-3">
                <li><Link to="/funktioner" className={linkClass}>Funktioner</Link></li>
                <li><Link to="/priser" className={linkClass}>Priser</Link></li>
                <li><Link to="/changelog" className={linkClass}>Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1b1c1a] mb-5">
                Företag
              </h4>
              <ul className="space-y-3">
                <li><Link to="/om-oss" className={linkClass}>Om oss</Link></li>
                <li><Link to="/contact" className={linkClass}>Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1b1c1a] mb-5">
                Juridiskt
              </h4>
              <ul className="space-y-3">
                <li><Link to="/integritetspolicy" className={linkClass}>Integritetspolicy</Link></li>
                <li><Link to="/villkor" className={linkClass}>Villkor</Link></li>
                <li><Link to="/cookies" className={linkClass}>Cookies</Link></li>
                <li><Link to="/security" className={linkClass}>Säkerhet</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#e1bfb3]/20 pt-8">
            <p className="text-sm text-[#594138]/60">
              © 2026 Frost Solutions AB
            </p>

            <div className="flex items-center gap-1">
              <a
                href="https://twitter.com/frostsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-[#594138] hover:text-[#f26522] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://linkedin.com/company/frost-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-[#594138] hover:text-[#f26522] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="mailto:vilmer.frost@gmail.com"
                className="rounded-lg p-2.5 text-[#594138] hover:text-[#f26522] transition-colors"
                aria-label="E-post"
              >
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
