import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Zap, FileText, PiggyBank } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 127,
    suffix: '+',
    label: 'Företag',
    sublabel: 'Använder Frost Bygg',
  },
  {
    icon: Zap,
    value: 15847,
    suffix: '',
    label: 'Timmar sparade',
    sublabel: 'Genom AI-automation',
  },
  {
    icon: FileText,
    value: 2341,
    suffix: '',
    label: 'ROT-ansökningar',
    sublabel: 'Genererade med AI',
  },
  {
    icon: PiggyBank,
    value: 4.2,
    suffix: 'M kr',
    label: 'Besparingar totalt',
    sublabel: 'För våra kunder',
  },
];

function AnimatedCounter({ 
  value, 
  suffix, 
  isVisible 
}: { 
  value: number; 
  suffix: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const displayValue = value >= 1000 
    ? count.toLocaleString('sv-SE', { maximumFractionDigits: 0 })
    : count.toFixed(value % 1 !== 0 ? 1 : 0);

  return (
    <span className="text-4xl md:text-5xl font-bold text-foreground">
      {displayValue}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <div ref={ref} className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Betrodd av svenska byggföretag
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
