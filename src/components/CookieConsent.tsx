import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'frost-cookie-consent';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

export function CookieConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus | null;
    if (stored === 'accepted' || stored === 'declined') {
      setConsentStatus(stored);
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus('accepted');
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setConsentStatus('declined');
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (consentStatus !== 'pending') return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="relative bg-card border border-border rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
              aria-label="Stäng"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Vi använder cookies</h3>
                <p className="text-xs text-muted-foreground">För att förbättra din upplevelse</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Vi använder cookies för att analysera trafik och förbättra vår tjänst. 
              Kontakta oss på{' '}
              <a 
                href="mailto:vilmer.frost@gmail.com?subject=Integritetspolicy" 
                className="text-primary hover:underline underline-offset-2"
              >
                vilmer.frost@gmail.com
              </a>{' '}
              för mer information om integritet.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Acceptera alla
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2.5 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Endast nödvändiga
              </button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-border">
              <Shield className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                GDPR-kompatibel • Dina data är säkra
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
