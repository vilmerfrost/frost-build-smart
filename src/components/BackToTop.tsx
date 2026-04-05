import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-lg shadow-lg text-[#1b1c1a] hover:ember-gradient hover:text-white hover:shadow-[0_0_20px_rgba(242,101,34,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:ring-offset-2 focus:ring-offset-[#fbf9f6]"
          aria-label="Tillbaka till toppen"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={1.75} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
