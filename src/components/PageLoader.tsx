import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake } from 'lucide-react';

interface PageLoaderProps {
  minDuration?: number;
}

export function PageLoader({ minDuration = 1500 }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Faster at start, slower near end
        const increment = prev < 70 ? Math.random() * 15 : Math.random() * 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    // Minimum display duration
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300);
    }, minDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [minDuration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Background glow */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, hsl(18 100% 55% / 0.1), transparent 70%)',
            }}
          />

          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative mb-8"
          >
            {/* Pulsing glow behind logo */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'radial-gradient(circle, hsl(18 100% 55% / 0.22), transparent)',
                filter: 'blur(16px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Logo container */}
            <motion.div
              className="relative p-4 rounded-2xl bg-primary/20 border border-primary/30"
              animate={{
                boxShadow: [
                  '0 0 16px hsl(18 100% 55% / 0.18)',
                  '0 0 28px hsl(18 100% 55% / 0.28)',
                  '0 0 16px hsl(18 100% 55% / 0.18)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Snowflake className="h-12 w-12 text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Frost Bygg
          </motion.h1>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="relative h-1 bg-secondary rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
              }}
              animate={{ x: [-200, 200] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-sm text-muted-foreground mt-4"
          >
            Laddar...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
