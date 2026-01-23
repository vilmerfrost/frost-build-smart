import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, MapPin, Calendar, Rocket, Heart, Zap } from 'lucide-react';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="om-oss" className="py-20 md:py-28">
      <div className="section-container">
        <div ref={ref} className="mx-auto max-w-4xl">
          <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="badge-frost mb-4 inline-block">
              Vår historia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Byggt av en <span className="text-gradient">16-åring</span> som visste att byggbranschen förtjänar bättre
            </h2>
          </div>

          {/* Values grid */}
          <div className={`grid md:grid-cols-3 gap-6 mb-12 ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            {[
              { icon: Rocket, title: 'Modern teknik', desc: 'Senaste AI och molnteknologi' },
              { icon: Heart, title: 'Byggd för er', desc: 'Skapad tillsammans med byggare' },
              { icon: Zap, title: 'Alltid snabb', desc: 'Prestanda är en prioritet' },
            ].map((item) => (
              <div key={item.title} className="feature-card text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className={`card-glow p-8 md:p-12 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                <Calendar className="h-4 w-4" />
                2026
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                <MapPin className="h-4 w-4" />
                Stockholm, Sverige
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/20" />
              <div className="space-y-5 pl-8 text-lg text-foreground leading-relaxed">
                <p>
                  Jag såg hur små byggföretag betalade{' '}
                  <span className="font-semibold text-destructive">3,000 kr/månad för Bygglet</span> – en plattform som kändes gammal, krånglig och dyr.
                </p>
                <p className="text-muted-foreground">
                  Ingen AI. Ingen offline-funktion. Ingen transparent prissättning. Ingen innovation.
                </p>
                <p>
                  Så jag bestämde mig för att bygga något bättre. Frost Bygg är modern, AI-driven, och kostar bara{' '}
                  <span className="font-bold text-success">499 kr/månad</span> – med allt inkluderat.
                </p>
                <p className="text-primary font-medium">
                  Min första kund sparade 15 timmar bara på ROT-automation under första månaden. Det var då jag visste att vi var på rätt väg.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-5 border-t border-border pt-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-xl font-bold text-white shadow-lg">
                VF
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">Vilmer Frost</div>
                <div className="text-muted-foreground">Grundare & VD, 16 år</div>
                <div className="text-sm text-primary font-medium mt-1">@vilmerfrost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
