import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Zap, FileText, Tag, Puzzle, Wifi, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Zap,
    badge: 'Första i Sverige',
    title: 'ROT-ansökningar på 2 minuter',
    description: 'AI genererar kompletta sammanfattningar för Skatteverket automatiskt. Ingen manuell ifyllning, ingen risk för fel, ingen tidsåtgång.',
    details: [
      'Automatisk beräkning av arbets- och materialkostnader',
      'ROT/RUT-regler inbyggda',
      'Direktexport till Skatteverket',
      'Historik för alla ansökningar',
      'AI-kontroll av Skatteverkets krav',
    ],
    cta: 'Testa ROT-demo',
    ctaLink: '#rot-demo',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10 text-amber-500',
  },
  {
    icon: FileText,
    badge: '99% noggrannhet',
    title: 'Läs fakturor automatiskt',
    description: 'Dra & släpp faktura → AI extraherar leverantör, belopp, datum och radposter på sekunder. Ingen manuell inmatning.',
    details: [
      'OCR med Google Gemini 2.0',
      'Stöd för alla filformat (PDF, bild)',
      'Automatisk kategorisering',
      'Koppling till projekt',
      'Exportera till Fortnox/Visma',
    ],
    cta: 'Se hur det fungerar',
    ctaLink: '#demo',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Tag,
    badge: 'Spara 30,000 kr/år',
    title: '499 kr/månad. Allt inkluderat.',
    description: 'Transparent prissättning utan dolda avgifter. Obegränsat antal användare, inga setup-kostnader, ingen bindningstid.',
    details: [
      'Obegränsat antal användare',
      'Ingen setup-avgift',
      'Ingen träningsavgift',
      '30 dagars pengarna-tillbaka-garanti',
      'Alla framtida funktioner inkluderade',
    ],
    cta: 'Se priser',
    ctaLink: '#priser',
    gradient: 'from-emerald-500 to-green-600',
    iconBg: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: Puzzle,
    badge: '0 kr extra kostnad',
    title: 'Gemini + Groq AI-stack',
    description: 'Powered by Google Gemini 2.0 Flash och Groq Llama 3.3. Snabbaste AI-inference på marknaden med 15,900 gratis förfrågningar/dag.',
    details: [
      'Google Gemini för OCR & analys',
      'Groq för snabba sammanfattningar',
      'Ingen API-kostnad för dig',
      'Kontinuerliga AI-förbättringar',
      'GDPR-compliant AI-hantering',
    ],
    cta: 'Läs mer om AI',
    ctaLink: '#',
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-500/10 text-violet-500',
  },
  {
    icon: Wifi,
    badge: '100% uptime',
    title: 'Fungerar överallt',
    description: 'Full funktionalitet utan internet. Perfekt för byggplatsen. Synkas automatiskt när du får uppkoppling igen.',
    details: [
      'Offline tidrapportering',
      'Fotografera utan uppkoppling',
      'Automatisk synk vid internet',
      'PWA - installera som app',
      'Fungerar på alla enheter',
    ],
    cta: 'Prova offline-läge',
    ctaLink: '#',
    gradient: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    icon: Sparkles,
    badge: '20+ uppdateringar/år',
    title: 'Modern plattform byggd för 2025',
    description: 'Dark mode, PWA, snabba laddningstider. Uppdateras kontinuerligt med nya funktioner baserat på kundönskemål.',
    details: [
      'Modern, responsiv design',
      'Dark mode för alla skärmar',
      'Snabb och stabil',
      'Månadsuppdateringar',
      'Kunddriven utveckling',
    ],
    cta: 'Se changelog',
    ctaLink: '/changelog',
    gradient: 'from-pink-500 to-rose-600',
    iconBg: 'bg-pink-500/10 text-pink-500',
  },
];

export function EnhancedFeaturesSection() {
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <EnhancedFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EnhancedFeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`card-hover group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden ${
        isVisible ? `animate-fade-in-up stagger-${(index % 3) + 1}` : 'opacity-0'
      }`}
    >
      {/* Badge */}
      <div className="absolute -top-0 right-0">
        <span className="inline-flex items-center rounded-bl-xl rounded-tr-xl bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
          {feature.badge}
        </span>
      </div>

      <div className="p-6 md:p-8 flex-1">
        {/* Icon */}
        <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="h-7 w-7" />
        </div>

        {/* Content */}
        <h3 className="mb-3 text-xl font-bold text-foreground">
          {feature.title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {feature.description}
        </p>

        {/* Details list */}
        <ul className="space-y-2.5 mb-6">
          {feature.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 md:px-8 md:pb-8 mt-auto">
        <Button variant="ghost" className="w-full justify-between group/btn" asChild>
          <a href={feature.ctaLink}>
            {feature.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>

      {/* Hover gradient */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10`} />
    </div>
  );
}
