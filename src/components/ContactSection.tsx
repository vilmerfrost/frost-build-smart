import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Send, Calendar, Check, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { PRODUCTION_URL } from '@/lib/constants';
import { requestDemo } from '@/lib/supabase-client';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await requestDemo({
      name: formData.name,
      email: formData.email,
      company: formData.company,
    });

    if (result.success) {
      setIsSubmitted(true);
      setFormData({ name: '', company: '', email: '' });
    } else {
      setError(result.error || 'Failed to submit request');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 gradient-bg">
      <div className="section-container">
        <div ref={ref} className="text-center mb-12">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Kom igång
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Redo att effektivisera ditt <span className="text-gradient">byggföretag?</span>
          </h2>
          <p className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            Kom igång på 2 minuter eller boka en personlig demo med Vilmer
          </p>
        </div>

        <div className={`grid gap-8 md:grid-cols-2 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          {/* Self-service option */}
          <div className="card-glow p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Starta direkt</h3>
              <p className="mt-2 text-muted-foreground">
                Inget betalkort behövs. Första månaden gratis.
              </p>

              <ul className="mt-6 space-y-3">
                {['30 dagars gratis provperiod', 'Ingen bindningstid', 'Full tillgång till alla funktioner'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" className="mt-8 w-full group/btn shadow-lg hover:shadow-xl transition-all" asChild>
                <a href={`${PRODUCTION_URL}/signup`}>
                  Starta gratis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Book demo option */}
          <div className="feature-card p-8 border-2 border-primary/20">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Calendar className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Boka demo</h3>
            <p className="mt-2 text-muted-foreground">
              15 minuter med Vilmer. Vi svarar inom 24h.
            </p>

            {isSubmitted ? (
              <div className="mt-6 rounded-2xl bg-success/10 p-6 text-center border border-success/20">
                <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-success" />
                </div>
                <p className="font-bold text-lg text-foreground">Tack för din förfrågan!</p>
                <p className="text-muted-foreground mt-1">Vi hör av oss inom 24 timmar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {error}
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Ditt namn"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Företagsnamn"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="din@email.se"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <Button variant="default" size="lg" type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Skickar...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Skicka förfrågan
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
