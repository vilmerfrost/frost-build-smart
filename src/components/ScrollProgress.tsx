import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Only show progress bar after scrolling past the hero section
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left"
      style={{
        scaleX,
        opacity: isVisible ? 1 : 0,
        background: 'linear-gradient(90deg, hsl(22 100% 55%), hsl(22 100% 65%))',
        boxShadow: '0 0 10px hsl(22 100% 55% / 0.5)',
      }}
      initial={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    />
  );
}
