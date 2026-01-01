import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, FileText, Clock, Receipt, PieChart, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Resursplanering',
    description: 'I Frost Bygg får du rätt person på rätt plats i rätt tid och hanterar enkelt frånvaro, semester och andra aktiviteter.',
  },
  {
    icon: FileText,
    title: 'Offerter',
    description: 'Skapa proffsiga offerter snabbt och enkelt. Anpassa mallar, spåra status och konvertera till projekt med ett klick.',
  },
  {
    icon: Receipt,
    title: 'Fakturor',
    description: 'Fakturera direkt från projekt eller tidrapporter. Integration med Fortnox och Visma för sömlös bokföring.',
  },
  {
    icon: Clock,
    title: 'Tidrapporter',
    description: 'Enkel tidrapportering via mobil eller dator. Automatisk OB-beräkning och koppling till lönehantering.',
  },
  {
    icon: PieChart,
    title: 'Projektbudget',
    description: 'Håll koll på projektets ekonomi i realtid. Se marginal, förbrukad tid och återstående budget direkt.',
  },
  {
    icon: Smartphone,
    title: 'AI-automation',
    description: 'ROT-ansökningar på 2 minuter. AI läser fakturor automatiskt. Spara 10+ timmar per månad.',
  },
];

export function EnhancedFeaturesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="funktioner" className="py-16 md:py-24">
      <div className="section-container">
        <div ref={ref} className="mb-12">
          <h2 className={`text-2xl md:text-3xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Våra mest omtyckta funktioner
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`group ${
        isVisible ? `animate-fade-in-up stagger-${(index % 3) + 1}` : 'opacity-0'
      }`}
    >
      {/* Icon */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-bold text-foreground">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
