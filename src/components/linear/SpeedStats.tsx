import { motion, useInView } from 'framer-motion';
import { ScanLine, MapPin, FileDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: ScanLine, time: 5, unit: 'sek', label: 'Scanna faktura' },
  { icon: MapPin, time: 2, unit: 'sek', label: 'Stämpla in' },
  { icon: FileDown, time: 10, unit: 'sek', label: 'Exportera löneunderlag' },
];

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
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.round(easeOutQuart * target));
        if (now < endTime) requestAnimationFrame(animate);
        else setCount(target);
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function SpeedStats() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-bold tracking-widest text-[#f26522] uppercase">
            Hur snabbt är det?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1b1c1a]">
            Blixtsnabbt. <span className="text-[#594138]/40">Alltid.</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.label}
                className="rounded-2xl bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="mb-5 flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-[#f26522]" strokeWidth={1.75} />
                  </div>
                </div>

                <div className="mb-3 flex flex-wrap items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-extrabold tabular-nums tracking-tight text-[#1b1c1a] sm:text-6xl">
                    <AnimatedCounter target={stat.time} duration={1.2} />
                  </span>
                  <span className="text-xl font-bold text-[#594138]/40 sm:text-2xl">
                    {stat.unit}
                  </span>
                </div>

                <p className="text-base font-medium text-[#594138]">
                  {stat.label}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
