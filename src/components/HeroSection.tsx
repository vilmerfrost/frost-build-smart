import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Play, Sparkles } from 'lucide-react';
import { PRODUCTION_URL } from '@/lib/constants';

export function HeroSection() {
  const features = ['Resursplanering', 'Tidrapporter', 'Offerter', 'Fakturor', 'ROT/RUT'];

  return (
    <section className="relative min-h-[90vh] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Nytt: AI-driven fakturaläsning
            </span>
            <span className="text-xs text-primary font-semibold">→</span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in-up stagger-1 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Det ska inte vara ett projekt att{' '}
            <span className="text-gradient">driva projekt.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up stagger-2 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Frost Bygg samlar tidrapporter, fakturor, ROT-ansökningar och projekthantering 
            i ett enda verktyg. Spara 10+ timmar varje vecka.
          </p>

          {/* Feature pills */}
          <div className="animate-fade-in-up stagger-3 mt-8 flex flex-wrap justify-center gap-2">
            {features.map((feature) => (
              <span 
                key={feature} 
                className="px-4 py-2 text-sm font-medium text-foreground bg-card border border-border rounded-full hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up stagger-4 mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" className="group shadow-lg hover:shadow-xl transition-shadow" asChild>
              <a href={`${PRODUCTION_URL}/signup`}>
                Kom igång gratis
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-secondary" size="xl" className="group" asChild>
              <a href={`${PRODUCTION_URL}/demo`}>
                <Play className="mr-2 h-4 w-4" />
                Se demo
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in-up stagger-5 mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Gratis i 30 dagar
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Ingen bindningstid
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Kom igång på 2 min
            </span>
          </div>

          {/* Social proof */}
          <div className="animate-fade-in-up stagger-6 mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Rating */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-left">
                <span className="text-sm font-semibold text-foreground">4.9/5 betyg</span>
                <p className="text-xs text-muted-foreground">Från 150+ recensioner</p>
              </div>
            </div>

            {/* Users */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border">
              <div className="flex -space-x-2">
                {['EA', 'LN', 'KS', 'MJ'].map((initials, i) => (
                  <div 
                    key={i}
                    className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold border-2 border-card"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <span className="text-sm font-semibold text-foreground">500+ användare</span>
                <p className="text-xs text-muted-foreground">Litar på Frost Bygg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
