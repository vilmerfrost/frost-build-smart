import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight, Zap, Receipt, Sparkles } from 'lucide-react';
import { ExternalLink } from '@/components/ExternalLink';

const PRODUCTION_URL = 'https://frost-solutions.vercel.app';

const includedFeatures = [
  'Obegränsat antal användare',
  'ROT/RUT automation med AI',
  'Tidrapportering & lön',
  'Projekt & budget',
  'Fortnox & Visma integration',
  'Offline-läge',
  'Email-support inom 24h',
  'Alla framtida funktioner',
];

const payPerUseFeatures = [
  { name: 'AI Fakturaläsning', price: '2 kr', unit: '/faktura', description: 'Automatisk utläsning av leverantörsfakturor' },
  { name: 'AI ROT-sammanfattning', price: '1 kr', unit: '/ansökan', description: 'AI-genererad ROT-sammanfattning' },
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="priser" className="py-20 md:py-28">
      <div className="section-container">
        <div ref={ref} className="text-center mb-14">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Prissättning
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Enkel och <span className="text-gradient">transparent</span> prissättning
          </h2>
          <p className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            Inga dolda avgifter. Ingen setup-kostnad. Avbryt när som helst.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Main Pricing Card */}
          <div className={`flex-1 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            <div className="h-full card-glow p-8 md:p-10 relative overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground">
                  <Sparkles className="h-3 w-3" />
                  Populär
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-xl text-foreground">Allt-i-ett</span>
                  <p className="text-sm text-muted-foreground">Allt du behöver</p>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-foreground">499</span>
                  <span className="text-xl text-muted-foreground">kr/månad</span>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Första månaden <span className="text-success font-semibold">helt gratis</span>. Ingen bindningstid.
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 group">
                    <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 group-hover:bg-success/20 transition-colors">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full group shadow-lg hover:shadow-xl transition-all" asChild>
                <ExternalLink href={`${PRODUCTION_URL}/signup`}>
                  Starta gratis provperiod
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ExternalLink>
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Inget betalkort krävs för att starta
              </p>
            </div>
          </div>

          {/* Pay-per-use Add-on Card */}
          <div className={`lg:w-80 ${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
            <div className="h-full feature-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Receipt className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-xl text-foreground">AI-tillägg</span>
                  <p className="text-sm text-muted-foreground">Betala per användning</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dras automatiskt via Stripe eller Swish. Du betalar bara för det du faktiskt använder.
              </p>

              <div className="space-y-4">
                {payPerUseFeatures.map((feature) => (
                  <div key={feature.name} className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200 hover:-translate-y-0.5">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-semibold text-foreground">{feature.name}</span>
                      <span className="text-primary font-bold">{feature.price}<span className="text-xs text-muted-foreground font-normal">{feature.unit}</span></span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
                <p className="text-sm text-center text-foreground">
                  <span className="font-semibold">Exempel:</span> 50 fakturor/månad = <span className="text-success font-bold">endast 100 kr</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison note */}
        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-muted/50 border border-border">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Bygglet</span> kostar 2 000–4 000 kr/månad + setup-avgift
              </p>
              <p className="text-lg font-bold text-success mt-1">
                Spara upp till 30 000 kr/år med Frost Bygg
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
