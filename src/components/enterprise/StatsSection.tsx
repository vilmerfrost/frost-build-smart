import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Clock, FileText, PiggyBank, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 127,
    suffix: '+',
    label: 'Företag',
    sublabel: 'Använder Frost Bygg',
    color: 'from-primary to-blue-600',
  },
  {
    icon: Clock,
    value: 15847,
    suffix: '',
    label: 'Timmar sparade',
    sublabel: 'Genom AI-automation',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FileText,
    value: 2341,
    suffix: '',
    label: 'ROT-ansökningar',
    sublabel: 'Genererade med AI',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: PiggyBank,
    value: 4.2,
    suffix: 'M',
    label: 'Kronor sparade',
    sublabel: 'För våra kunder',
    color: 'from-accent to-orange-600',
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
    <section className="py-20 md:py-28 bg-card/50 border-y border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      
      <div className="section-container relative">
        <div ref={ref} className="text-center mb-16">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Statistik
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Betrodd av svenska <span className="text-gradient">byggföretag</span>
          </h2>
          <p className={`mt-4 text-lg text-muted-foreground ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            Våra kunder sparar tid och pengar varje dag
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`stat-card group ${
                  isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
                
                {/* Hover indicator */}
                <div className="mt-4 flex items-center justify-center gap-1 text-xs text-success opacity-0 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="h-3 w-3" />
                  <span>+12% denna månad</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
