import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, ArrowRight, Check, Loader2, Twitter, Linkedin, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { subscribeNewsletter } from '@/lib/email';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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

  return (
    <footer className="border-t border-white/[0.06]">
      {/* Newsletter Section */}
      <div className="py-16 border-b border-white/[0.06]">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Få tips & tricks för byggbranschen
            </h3>
            <p className="text-white/40 mb-6">
              Prenumerera på vårt nyhetsbrev för de senaste uppdateringarna
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2 text-success py-3 px-6 rounded-lg bg-success/10 border border-success/20">
                <Check className="h-5 w-5" />
                <span className="font-medium">Tack för din prenumeration!</span>
              </div>
            ) : (
              <div className="space-y-3">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Din e-post"
                    className={`flex-1 px-4 py-3 rounded-lg bg-white/5 border text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                      error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary/50'
                    }`}
                    aria-label="E-postadress för nyhetsbrev"
                    aria-invalid={!!error}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow px-6 py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Prenumerera
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Snowflake className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-bold text-white">Frost Bygg</span>
              </div>
              <p className="text-sm text-white/40 max-w-xs">
                AI-driven projekthantering för svensk byggindustri.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Produkt</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-white/40 hover:text-white transition-colors">Funktioner</a></li>
                <li><a href="#pricing" className="text-sm text-white/40 hover:text-white transition-colors">Priser</a></li>
                <li><Link to="/changelog" className="text-sm text-white/40 hover:text-white transition-colors">Ändringslogg</Link></li>
                <li><Link to="/developers" className="text-sm text-white/40 hover:text-white transition-colors">För utvecklare</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Företag</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm text-white/40 hover:text-white transition-colors">Om oss</a></li>
                <li><Link to="/blog" className="text-sm text-white/40 hover:text-white transition-colors">Blogg</Link></li>
                <li><Link to="/contact" className="text-sm text-white/40 hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Juridiskt</h4>
              <ul className="space-y-2">
                <li><Link to="/security" className="text-sm text-white/40 hover:text-white transition-colors">Säkerhet</Link></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Integritetspolicy</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Användarvillkor</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/30">
              © 2026 Frost Solutions. Alla rättigheter förbehållna.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/frostbygg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Följ oss på Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/company/frostbygg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Följ oss på LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:kontakt@frostsolutions.se"
                className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Skicka e-post till oss"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <p className="text-xs text-white/20">
              Byggd med ❄️ i Stockholm
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
