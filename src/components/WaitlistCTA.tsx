import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Flame, X, Check, Loader2, AlertCircle } from 'lucide-react';
import { requestDemo } from '@/lib/supabase-client';

export function WaitlistCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [spotsLeft, setSpotsLeft] = useState(() => {
    const saved = localStorage.getItem('frostbygg-spots');
    if (saved) return parseInt(saved);
    const random = Math.floor(Math.random() * 20) + 30;
    localStorage.setItem('frostbygg-spots', random.toString());
    return random;
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const formData = new FormData(formRef.current!);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string || undefined,
      preferred_date: undefined,
    };

    const result = await requestDemo(data);

    if (result.success) {
      setIsSubmitted(true);
      setSpotsLeft((prev) => {
        const newValue = prev - 1;
        localStorage.setItem('frostbygg-spots', newValue.toString());
        return newValue;
      });
    } else {
      setError(result.error || 'Failed to submit request');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm mb-4">
          <Flame className="h-4 w-4" />
          Begränsat Beta-Tillträde
        </div>
        <p className="text-muted-foreground mb-4">
          Endast 100 företag i januari 2025. <strong className="text-foreground">{spotsLeft} platser kvar.</strong>
        </p>
        <Button
          onClick={() => setIsOpen(true)}
          variant="frost"
          size="lg"
          className="group animate-pulse-slow"
        >
          🔥 Gå med i väntelistan - Få 50% rabatt för alltid
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl animate-scale-in">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 p-1 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm mb-4">
                    <Flame className="h-4 w-4" />
                    {spotsLeft} platser kvar
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Gå med i väntelistan
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Få exklusiv beta-tillgång och 50% rabatt för alltid.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Företagsnamn *
                    </label>
                    <input
                      name="company"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Ditt Byggföretag AB"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Ditt namn *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Förnamn Efternamn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="du@foretag.se"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Telefon (valfritt)
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="070-123 45 67"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="frost"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Skickar...
                      </>
                    ) : (
                      'Skicka ansökan'
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  ✅ Du är på listan!
                </h3>
                <p className="text-lg text-accent font-medium mb-4">
                  Plats #{100 - spotsLeft + 1}
                </p>
                <p className="text-muted-foreground mb-6">
                  Vi kontaktar dig inom 48 timmar med nästa steg.
                </p>
                <Button onClick={() => setIsOpen(false)} variant="frost-outline">
                  Stäng
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
