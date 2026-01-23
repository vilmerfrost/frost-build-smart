import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Calendar, FileText, Clock, Receipt, PieChart, Zap,
  MapPin, Users, Bell, Shield, Smartphone, BarChart3,
  FileCheck, Wrench, CalendarDays, Globe, CreditCard, Settings,
  ChevronDown, ChevronUp, Sparkles
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  gradient?: string;
}

const features: Feature[] = [
  {
    icon: Clock,
    title: 'Digital tidstämpling',
    description: 'Ett klick för att stämpla in/ut. Automatisk OB-beräkning för kväll, natt och helg.',
    badge: 'Populär',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'GPS Auto-incheckning',
    description: 'Automatisk incheckning när du kommer till arbetsplatsen. Konfigurerbar radie.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'AI Fakturaläsning',
    description: 'Dra & släpp leverantörsfakturor. AI extraherar alla uppgifter automatiskt.',
    badge: '2 kr/st',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: FileCheck,
    title: 'ROT/RUT Automation',
    description: 'AI genererar sammanfattningar för Skatteverket. Från 2 timmar till 2 minuter.',
    badge: 'AI',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: PieChart,
    title: 'Projektbudget',
    description: 'Realtidsöverblick av budget vs. faktisk tid. Automatiska varningar vid överskridning.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Receipt,
    title: 'Fakturering',
    description: 'Skapa fakturor direkt från projekt. PDF-generering och e-postutskick.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Medarbetarhantering',
    description: 'Roller, behörigheter och löneunderlag. Admin- och anställd-vyer.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: CalendarDays,
    title: 'Schemaläggning',
    description: 'Drag & drop-kalender. Konfliktdetektering och frånvarohantering.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Arbetsordrar',
    description: 'Komplett arbetsorderflöde med statusar, foton och prioritering.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: FileText,
    title: 'ÄTA-hantering',
    description: 'Tilläggsarbeten med godkännandeflöde. Bilagor och automatisk fakturering.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Diagram och rapporter för timmar, intäkter och projektöversikt.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Globe,
    title: 'Kundportal',
    description: 'Kunder kan se offerter och fakturor via säker länk. Ingen inloggning krävs.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Multi-tenant säkerhet',
    description: 'Komplett dataisolering. Row Level Security på alla tabeller.',
    gradient: 'from-slate-500 to-gray-600',
  },
  {
    icon: Settings,
    title: 'Fortnox & Visma',
    description: 'Sömlös integration med era befintliga bokföringssystem.',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Smartphone,
    title: 'PWA & Offline',
    description: 'Installera som app. Full funktionalitet utan internet.',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    icon: Bell,
    title: 'Notifikationer',
    description: 'Realtidsnotiser för viktiga händelser. Inget missas.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: CreditCard,
    title: 'Lönehantering',
    description: 'Automatisk OB-beräkning. Exportera till PDF eller CSV.',
    gradient: 'from-emerald-600 to-green-600',
  },
  {
    icon: Calendar,
    title: 'Resursplanering',
    description: 'Rätt person på rätt plats. Semester- och frånvarohantering.',
    gradient: 'from-amber-600 to-yellow-600',
  },
];

const INITIAL_VISIBLE_COUNT = 8;

export function EnhancedFeaturesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = showAll ? features : features.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenCount = features.length - INITIAL_VISIBLE_COUNT;

  return (
    <section id="funktioner" className="py-20 md:py-28 gradient-bg">
      <div className="section-container">
        <div ref={ref} className="text-center mb-16">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Sparkles className="h-3 w-3 mr-1" />
            Funktioner
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Allt Bygglet har – <span className="text-gradient">och mer därtill</span>
          </h2>
          <p className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            18+ funktioner designade för svenska byggföretag. Moderna, snabba och AI-drivna.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {hiddenCount > 0 && (
          <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="group gap-2 px-10 py-6 text-base border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Visa färre
                  <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  Visa alla {features.length} funktioner
                  <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isVisible }: { feature: Feature; index: number; isVisible: boolean }) {
  const Icon = feature.icon;

  return (
    <div
      className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index % 8) * 0.05}s` }}
    >
      {/* Badge */}
      {feature.badge && (
        <span className="absolute -top-2.5 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-accent to-orange-500 text-white shadow-md">
          {feature.badge}
        </span>
      )}

      {/* Icon */}
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient || 'from-primary to-accent'} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mb-2 font-bold text-lg text-foreground group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
