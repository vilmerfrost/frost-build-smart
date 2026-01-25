import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, ArrowRight, Check, Loader2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
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
              <div className="flex items-center justify-center gap-2 text-success">
                <Check className="h-5 w-5" />
                <span>Tack för din prenumeration!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Din e-post"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow px-6 py-3 flex items-center gap-2 disabled:opacity-50"
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
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Företag</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm text-white/40 hover:text-white transition-colors">Om oss</a></li>
                <li><Link to="/blog" className="text-sm text-white/40 hover:text-white transition-colors">Blogg</Link></li>
                <li><a href="#contact" className="text-sm text-white/40 hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Juridiskt</h4>
              <ul className="space-y-2">
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
            <p className="text-xs text-white/20">
              Byggd med ❄️ i Stockholm
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
