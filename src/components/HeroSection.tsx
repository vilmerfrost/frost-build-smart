import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Check, Clock, Zap } from 'lucide-react';

export function HeroSection() {
  const [timeManual, setTimeManual] = useState(7200); // 2 hours in seconds
  const [timeAI, setTimeAI] = useState(120); // 2 minutes in seconds
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours} tim ${mins} min`;
    return `${mins} min`;
  };

  const checklistItems = [
    'Kundinformation',
    'Projektbeskrivning',
    'Arbetskostnader',
    'Materialkostnader',
    'ROT-avdrag beräkning',
    'Skatteverket-format',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-20 md:pt-24">
      {/* Subtle background */}
      <div className="ice-pattern absolute inset-0" />

      <div className="section-container relative">
        <div className="grid gap-12 py-12 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in-up">
              <span className="badge-frost mb-6 inline-flex items-center gap-2">
                <Zap className="h-3.5 w-3.5" />
                AI-driven projekthantering
              </span>
            </div>

            <h1 className="animate-fade-in-up stagger-1 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              ROT-ansökningar tar{' '}
              <span className="text-secondary">2 timmar.</span>
              <br />
              Med Frost Bygg:{' '}
              <span className="text-accent">2 minuter.</span>
            </h1>

            <p className="animate-fade-in-up stagger-2 mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Moderna projektverktyg för svenska byggföretag. Samma funktioner som Bygglet – snabbare, enklare och till en bråkdel av priset.
            </p>

            <div className="animate-fade-in-up stagger-3 mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" className="group">
                Starta gratis provperiod
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-secondary" size="xl">
                <Play className="mr-2 h-5 w-5" />
                Se demo
              </Button>
            </div>

            <div className="animate-fade-in-up stagger-4 mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                Inget betalkort behövs
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                Kom igång på 2 minuter
              </span>
            </div>
          </div>

          {/* Right Column - Demo Card */}
          <div className="animate-fade-in-up stagger-2 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Demo Card */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    ROT-ansökan
                  </h3>
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <div className="h-2.5 w-2.5 rounded-full bg-success" />
                  </div>
                </div>

                {/* Comparison */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Manual */}
                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">
                        Manuellt
                      </span>
                    </div>
                    <div className="mb-3 text-2xl font-bold text-muted-foreground">
                      {formatTime(timeManual)}
                    </div>
                    <div className="space-y-2">
                      {checklistItems.map((item, i) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 text-xs transition-all duration-500 ${
                            animationPhase > i % 4
                              ? 'text-muted-foreground'
                              : 'text-muted-foreground/40'
                          }`}
                        >
                          <div
                            className={`h-3 w-3 rounded border transition-all duration-300 ${
                              animationPhase > i % 4
                                ? 'border-muted-foreground bg-muted-foreground/20'
                                : 'border-border'
                            }`}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI */}
                  <div className="rounded-lg border-2 border-accent/40 bg-accent/5 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="text-xs font-medium text-accent">
                        Med Frost Bygg
                      </span>
                    </div>
                    <div className="mb-3 text-2xl font-bold text-accent">
                      {formatTime(timeAI)}
                    </div>
                    <div className="space-y-2">
                      {checklistItems.map((item, i) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-foreground"
                        >
                          <div
                            className={`flex h-3 w-3 items-center justify-center rounded border transition-all duration-300 ${
                              animationPhase >= i % 2
                                ? 'border-success bg-success'
                                : 'border-accent'
                            }`}
                          >
                            {animationPhase >= i % 2 && (
                              <Check className="h-2 w-2 text-success-foreground" />
                            )}
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 flex items-center justify-center gap-6 rounded-lg bg-primary p-4 text-primary-foreground">
                  <div className="text-center">
                    <div className="text-2xl font-bold">60x</div>
                    <div className="text-xs opacity-80">Snabbare</div>
                  </div>
                  <div className="h-8 w-px bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold">10h</div>
                    <div className="text-xs opacity-80">Sparade/månad</div>
                  </div>
                </div>
              </div>

              {/* Professional badge */}
              <div className="absolute -right-2 -top-2 rounded-md bg-success px-3 py-1.5 text-xs font-semibold text-success-foreground shadow-md">
                AI-automation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
