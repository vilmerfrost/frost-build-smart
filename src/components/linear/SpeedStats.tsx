import { motion, useInView } from 'framer-motion';
import { Scan, MapPin, Download, Zap } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  {
    icon: Scan,
    time: 5,
    unit: 'sek',
    label: 'Scanna faktura',
  },
  {
    icon: MapPin,
    time: 2,
    unit: 'sek',
    label: 'Stämpla in',
  },
  {
    icon: Download,
    time: 10,
    unit: 'sek',
    label: 'Exportera löneunderlag',
  },
];

// Animated counter component
function AnimatedCounter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.round(easeOutQuart * target);
        
        setCount(currentCount);

        if (now < endTime) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function SpeedStats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, hsl(22 100% 55% / 0.08), transparent)',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Hur snabbt är det?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Blixtsnabbt. <span className="text-white/40">Alltid.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors" style={{ filter: 'drop-shadow(0 0 12px hsl(22 100% 55% / 0.3))' }}>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              
              <div className="mb-3">
                <span className="text-6xl sm:text-7xl font-extrabold text-white">
                  <AnimatedCounter target={stat.time} duration={1.2} />
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-white/60 ml-1">{stat.unit}</span>
              </div>
              
              <p className="text-white/50 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
