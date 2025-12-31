import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const features = [
  'Obegränsat antal användare',
  'ROT/RUT automation med AI',
  'Faktura-läsning med AI',
  'Tidrapportering & lön',
  'Projekt & budget',
  'Fortnox & Visma integration',
  'Offline-läge',
  'Email-support inom 24h',
  'Alla framtida funktioner',
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="priser" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="ice-pattern absolute inset-0" />

      <div className="section-container relative">
        <div ref={ref} className="text-center">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Priser
          </span>
          <h2 className={`text-3xl font-bold text-foreground md:text-4xl lg:text-5xl ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Ärliga priser utan{' '}
            <span className="text-gradient">dolda avgifter</span>
          </h2>
        </div>

        {/* Pricing Card */}
        <div className={`mx-auto mt-12 max-w-lg ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          <div className="relative rounded-3xl border-2 border-accent/30 bg-card p-8 shadow-2xl md:p-10">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="animate-pulse-glow inline-flex items-center gap-2 rounded-full bg-gradient-frost px-6 py-2 text-sm font-bold text-primary-foreground">
                <Sparkles className="h-4 w-4" />
                Första månaden GRATIS
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-extrabold text-foreground md:text-7xl">499</span>
                <span className="text-2xl font-semibold text-muted-foreground">kr/månad</span>
              </div>
              <p className="mt-2 text-muted-foreground">
                Allt inkluderat. Ingen bindningstid.
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-border" />

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="hero" size="xl" className="mt-8 w-full group">
              Starta gratis idag - Första månaden 0 kr
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Inget betalkort behövs. Avsluta när du vill.
            </p>
          </div>
        </div>

        {/* Comparison Callout */}
        <div className={`mx-auto mt-12 max-w-3xl rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm md:p-8 ${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          <p className="text-muted-foreground">
            <span className="font-semibold text-secondary">Bygglet</span> kostar 2,000-4,000 kr/månad + setup-avgifter + per-användare-avgifter ={' '}
            <span className="font-bold text-destructive">30,000-50,000 kr/år</span>
          </p>
          <p className="mt-3 text-lg">
            <span className="font-bold text-gradient">Frost Bygg: 5,988 kr/år</span>{' '}
            <span className="text-muted-foreground">för obegränsat användande</span>
          </p>
        </div>
      </div>
    </section>
  );
}
