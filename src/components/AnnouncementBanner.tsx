import { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnnouncementBannerProps {
  message: string;
  linkText?: string;
  linkHref?: string;
  storageKey?: string;
}

export function AnnouncementBanner({
  message,
  linkText = 'Läs mer',
  linkHref = '/changelog',
  storageKey = 'frost-announcement-dismissed',
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed this announcement
    const dismissed = localStorage.getItem(storageKey);
    if (!dismissed) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(storageKey, 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative z-40 overflow-hidden bg-gradient-to-r from-primary/90 via-primary to-primary/90"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm pr-8">
              <Sparkles className="h-4 w-4 text-white/90 animate-pulse flex-shrink-0 hidden sm:block" />
              
              <span className="text-white font-medium text-center sm:text-left">
                {message}
              </span>

              {linkHref && (
                <Link
                  to={linkHref}
                  className="inline-flex items-center gap-1 text-white font-semibold hover:underline underline-offset-2 group flex-shrink-0"
                >
                  {linkText}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>

            <button
              onClick={handleDismiss}
              className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label="Stäng meddelande"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
