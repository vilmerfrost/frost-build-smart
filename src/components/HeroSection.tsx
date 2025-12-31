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
      {/* Background pattern */}
      <div className="ice-pattern absolute inset-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-frost-cyan/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-frost-blue/5 blur-3xl" />

      <div className="section-container relative">
        <div className="grid gap-12 py-12 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in-up">
              <span className="badge-frost mb-6 inline-flex items-center gap-2">
                <Zap className="h-3.5 w-3.5" />
                Första i Sverige med AI ROT-automation
              </span>
            </div>

            <h1 className="animate-fade-in-up stagger-1 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              ROT-ansökningar tar{' '}
              <span className="text-secondary">2 timmar.</span>
              <br />
              Med Frost Bygg tar det{' '}
              <span className="text-gradient">2 minuter.</span>
            </h1>

            <p className="animate-fade-in-up stagger-2 mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              AI-driven projektverktyg för svenska byggföretag. Samma funktioner som Bygglet.{' '}
              <strong className="text-foreground">10x snabbare. 499 kr/månad.</strong>
            </p>

            <div className="animate-fade-in-up stagger-3 mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" className="group">
                Starta gratis - Första månaden 0 kr
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-secondary" size="xl">
                <Play className="mr-2 h-5 w-5" />
                Se hur det fungerar
              </Button>
            </div>

            <div className="animate-fade-in-up stagger-4 mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                Inget betalkort behövs
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                2 minuters setup
              </span>
            </div>
          </div>

          {/* Right Column - Animated Demo */}
          <div className="animate-fade-in-up stagger-2 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Demo Card */}
              <div className="animate-float rounded-2xl border border-border/50 bg-card p-6 shadow-xl md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    ROT-ansökan Demo
                  </h3>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-success/60" />
                  </div>
                </div>

                {/* Comparison */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Manual */}
                  <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">
                        Manuellt
                      </span>
                    </div>
                    <div className="mb-3 text-2xl font-bold text-secondary">
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
                                ? 'border-secondary bg-secondary/20'
                                : 'border-border'
                            }`}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI */}
                  <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="text-xs font-medium text-accent">
                        Med AI
                      </span>
                    </div>
                    <div className="mb-3 text-2xl font-bold text-gradient">
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

                {/* Timer Animation */}
                <div className="mt-6 flex items-center justify-center gap-4 rounded-lg bg-gradient-frost p-4 text-primary-foreground">
                  <div className="text-center">
                    <div className="text-3xl font-bold">60x</div>
                    <div className="text-xs opacity-80">Snabbare</div>
                  </div>
                  <div className="h-10 w-px bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold">10h</div>
                    <div className="text-xs opacity-80">Sparade/månad</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 -top-4 animate-pulse-slow rounded-full bg-success px-4 py-2 text-sm font-semibold text-success-foreground shadow-lg">
                ⚡ Första i Sverige
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 40.8C672 50.3 768 65.7 864 65.8C960 66 1056 51 1152 43.5C1248 36 1344 36 1392 36L1440 36V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
