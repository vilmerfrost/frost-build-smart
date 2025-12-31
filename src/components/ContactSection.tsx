import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Send, Calendar, Check } from 'lucide-react';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <section id="kontakt" className="relative py-20 md:py-32">
      <div className="section-container">
        <div ref={ref} className="text-center">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Kontakt
          </span>
          <h2 className={`text-3xl font-bold text-foreground md:text-4xl lg:text-5xl ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Redo att{' '}
            <span className="text-gradient">testa?</span>
          </h2>
        </div>

        <div className={`mt-12 grid gap-8 lg:grid-cols-2 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          {/* Self-service option */}
          <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <ArrowRight className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Starta direkt</h3>
            <p className="mt-3 text-muted-foreground">
              Inget betalkort behövs. 2 minuters setup. Första månaden helt gratis.
            </p>

            <ul className="mt-6 space-y-3">
              {['Gratis första månaden', 'Ingen bindningstid', 'Full tillgång till alla funktioner'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="hero" size="xl" className="mt-8 w-full group">
              Starta gratis - Första månaden 0 kr
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Book demo option */}
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-frost-blue/5 p-8 md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Calendar className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Boka 15-min demo</h3>
            <p className="mt-3 text-muted-foreground">
              Prata med Vilmer och se hur Frost Bygg kan hjälpa ditt företag.
            </p>

            {isSubmitted ? (
              <div className="mt-8 rounded-xl bg-success/10 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success">
                  <Check className="h-6 w-6 text-success-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Tack för din förfrågan!</h4>
                <p className="mt-2 text-sm text-muted-foreground">Vi svarar inom 24 timmar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Namn"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                  <input
                    type="text"
                    placeholder="Företag"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
                <textarea
                  placeholder="Vad vill du veta mer om?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                />
                <Button variant="frost" size="lg" type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Skicka förfrågan
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Vi svarar inom 24 timmar
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
