import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, MapPin, Calendar } from 'lucide-react';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="om-oss" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="ice-pattern absolute inset-0" />

      <div className="section-container relative">
        <div ref={ref} className="mx-auto max-w-4xl">
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="badge-frost mb-4 inline-block">Om oss</span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Byggt av en 18-åring som visste att{' '}
              <span className="text-gradient">byggbranschen förtjänar bättre</span>
            </h2>
          </div>

          {/* Story */}
          <div className={`mt-12 rounded-3xl border border-border/50 bg-card p-8 md:p-12 ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                2024
              </div>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Ljusdal, Sverige
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -left-2 -top-2 h-8 w-8 text-accent/20" />
              <div className="space-y-6 pl-8 text-lg leading-relaxed text-foreground">
                <p>
                  Jag såg hur små byggföretag betalade{' '}
                  <span className="font-semibold text-secondary">3,000 kr/månad för Bygglet</span> – en plattform från 2010 med teknik som kändes gammal.
                </p>
                <p className="text-muted-foreground">
                  Ingen AI. Ingen offline-funktion. Ingen transparent prissättning.
                </p>
                <p>
                  Så jag byggde Frost Bygg på{' '}
                  <span className="font-semibold text-accent">2 veckor</span>. Modern. AI-driven.{' '}
                  <span className="font-semibold text-success">499 kr/månad</span>.
                </p>
                <p>
                  Första kunden sparade{' '}
                  <span className="font-semibold text-gradient">15 timmar första månaden</span> bara på ROT-automation.
                </p>
                <p>
                  Nu bygger vi det verktyg svenska byggföretag{' '}
                  <em>faktiskt</em> vill använda.
                </p>
                <p className="font-semibold text-foreground">
                  Ingen BS. Bara produkter som löser riktiga problem.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-frost text-2xl font-bold text-primary-foreground">
                VF
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Vilmer Frost</div>
                <div className="text-muted-foreground">Grundare, Frost Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
