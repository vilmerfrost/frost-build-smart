import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight } from 'lucide-react';

const features = [
  'Obegränsat antal användare',
  'ROT/RUT automation med AI',
  'Faktura-läsning med AI',
  'Tidrapportering & lön',
  'Projekt & budget',
  'Fortnox & Visma integration',
  'Offline-läge',
  'Email-support inom 24h',
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="priser" className="py-16 md:py-24">
      <div className="section-container">
        <div ref={ref} className="mb-12">
          <h2 className={`text-2xl md:text-3xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Välj ett paket som gör livet enklare
          </h2>
          <p className={`mt-3 text-muted-foreground ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Transparent prissättning utan dolda avgifter
          </p>
        </div>

        {/* Pricing Card */}
        <div className={`max-w-md ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          <div className="rounded-2xl border-2 border-accent/30 bg-card p-8">
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-foreground">499</span>
                <span className="text-lg text-muted-foreground">kr/månad</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Första månaden gratis. Ingen bindningstid.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="hero" size="lg" className="w-full group">
              Beställ Frost Bygg
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Inget betalkort behövs för att starta
            </p>
          </div>
        </div>

        {/* Comparison note */}
        <div className={`mt-8 max-w-md ${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Bygglet</span> kostar 2 000–4 000 kr/månad + extra avgifter.{' '}
            <span className="font-semibold text-success">Spara 30 000 kr/år</span> med Frost Bygg.
          </p>
        </div>
      </div>
    </section>
  );
}
