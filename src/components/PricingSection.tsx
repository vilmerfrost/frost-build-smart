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
    <section id="priser" className="relative py-16 md:py-24 bg-muted/30">
      <div className="section-container relative">
        <div ref={ref} className="text-center">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Priser
          </span>
          <h2 className={`text-2xl font-bold text-foreground md:text-3xl ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Transparent prissättning
          </h2>
        </div>

        {/* Pricing Card */}
        <div className={`mx-auto mt-10 max-w-md ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          <div className="relative rounded-lg border-2 border-primary/20 bg-card p-6 shadow-lg md:p-8">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-success px-4 py-1.5 text-xs font-semibold text-success-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Första månaden gratis
              </span>
            </div>

            {/* Price */}
            <div className="mt-3 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-foreground">499</span>
                <span className="text-lg font-medium text-muted-foreground">kr/månad</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Allt inkluderat. Ingen bindningstid.
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-border" />

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="hero" size="lg" className="mt-6 w-full group">
              Starta gratis provperiod
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Inget betalkort behövs. Avsluta när du vill.
            </p>
          </div>
        </div>

        {/* Comparison Callout */}
        <div className={`mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-5 text-center ${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Bygglet</span> kostar 2 000–4 000 kr/månad + setup-avgifter + per-användare-avgifter ={' '}
            <span className="font-semibold text-destructive">30 000–50 000 kr/år</span>
          </p>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-success">Frost Bygg: 5 988 kr/år</span>{' '}
            <span className="text-muted-foreground">för obegränsat användande</span>
          </p>
        </div>
      </div>
    </section>
  );
}
