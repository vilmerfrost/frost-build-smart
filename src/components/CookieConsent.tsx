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
          <div className="relative bg-white rounded-2xl p-6 shadow-xl">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 p-1.5 text-[#594138]/40 hover:text-[#1b1c1a] hover:bg-[#f5f3f0] rounded-lg transition-all"
              aria-label="Stäng"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 flex items-center justify-center shrink-0">
                <Cookie className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-[#1b1c1a]">Vi använder cookies</h3>
                <p className="text-xs text-[#594138]">För att förbättra din upplevelse</p>
              </div>
            </div>

            <p className="text-sm text-[#594138] mb-5 leading-relaxed">
              Vi använder cookies för att analysera trafik och förbättra vår tjänst.
              Läs vår{' '}
              <Link to="/cookies" className="text-[#f26522] font-bold hover:underline">
                cookiepolicy
              </Link>{' '}
              för mer information.
            </p>

            <div className="flex gap-3">
              <button onClick={handleAccept} className="flex-1 px-4 py-2.5 ember-gradient text-white font-bold rounded-full hover:scale-[1.02] active:scale-95 transition-transform text-sm">
                Acceptera alla
              </button>
              <button onClick={handleDecline} className="flex-1 px-4 py-2.5 bg-[#eae8e5] text-[#1b1c1a] font-bold rounded-full hover:bg-[#e4e2df] transition-colors text-sm">
                Endast nödvändiga
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-[#eae8e5]">
              <Shield className="h-3.5 w-3.5 text-[#594138]/50" strokeWidth={1.75} />
              <span className="text-xs text-[#594138]/50">GDPR-kompatibel</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
