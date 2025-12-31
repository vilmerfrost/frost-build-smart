import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Zap, FileText, Tag, Puzzle, Wifi, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    badge: 'Första i Sverige',
    title: 'ROT-ansökningar på 2 minuter',
    description: 'AI genererar kompletta sammanfattningar för Skatteverket automatiskt. Spara 10+ timmar per månad.',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10 text-amber-500',
  },
  {
    icon: FileText,
    badge: '99% noggrannhet',
    title: 'Läs fakturor automatiskt',
    description: 'Dra & släpp faktura → AI extraherar leverantör, belopp, datum, radposter på 10 sekunder.',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Tag,
    badge: 'Spara 30,000 kr/år',
    title: '499 kr/månad. Allt inkluderat.',
    description: 'Ingen setup-avgift. Ingen träningsavgift. Obegränsat antal användare. Vs Bygglet: 2,000-4,000 kr/månad.',
    gradient: 'from-emerald-500 to-green-600',
    iconBg: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: Puzzle,
    badge: '0 kr extra kostnad',
    title: 'Gemini + Groq AI-stack',
    description: 'Powered by Google Gemini 2.0 Flash och Groq Llama 3.3. 15,900 gratis förfrågningar/dag.',
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-500/10 text-violet-500',
  },
  {
    icon: Wifi,
    badge: '100% uptime',
    title: 'Fungerar överallt',
    description: 'Full funktionalitet utan internet. Synkas automatiskt när du får uppkoppling.',
    gradient: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    icon: Sparkles,
    badge: '20+ uppdateringar/år',
    title: 'Byggt för 2025, inte 2010',
    description: 'Dark mode, PWA, snabba laddningstider. Uppdateras varje månad, inte varje år.',
    gradient: 'from-pink-500 to-rose-600',
    iconBg: 'bg-pink-500/10 text-pink-500',
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="funktioner" className="relative py-20 md:py-32">
      <div className="section-container">
        <div ref={ref} className="text-center">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Funktioner
          </span>
          <h2 className={`text-3xl font-bold text-foreground md:text-4xl lg:text-5xl ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            AI-drivna funktioner som{' '}
            <span className="text-gradient">ingen konkurrent har</span>
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-lg text-muted-foreground ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            Byggda från grunden för svenska byggföretag. Moderna. Snabba. Kostnadseffektiva.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      className={`card-hover group relative rounded-2xl border border-border/50 bg-card p-6 md:p-8 ${
        isVisible ? `animate-fade-in-up stagger-${(index % 3) + 1}` : 'opacity-0'
      }`}
    >
      {/* Badge */}
      <div className="absolute -top-3 right-6">
        <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {feature.badge}
        </span>
      </div>

      {/* Icon */}
      <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="h-7 w-7" />
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-bold text-foreground">
        {feature.title}
      </h3>
      <p className="text-muted-foreground">
        {feature.description}
      </p>

      {/* Hover gradient */}
      <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10`} />
    </div>
  );
}
