import { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if ((e as any).clientY <= 0) {
        setIsVisible(true);
        analytics.trackExitIntent();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl animate-scale-in">
        <button
          onClick={() => {
            setIsVisible(false);
            setIsDismissed(true);
          }}
          className="absolute right-4 top-4 p-1 rounded-lg hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
            <Zap className="h-6 w-6 text-accent" />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-3">
            Vänta! 50% rabatt väntar
          </h3>

          <p className="text-muted-foreground mb-6">
            Gå med i väntelistan idag och få 50% rabatt för alltid på Frost Bygg. Endast 100 företag i janvier.
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => {
                setIsVisible(false);
                const element = document.getElementById('waitlist');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="frost"
              className="w-full"
            >
              Ja! Jag vill spara 50%
            </Button>

            <Button
              onClick={() => {
                setIsVisible(false);
                setIsDismissed(true);
              }}
              variant="ghost"
              className="w-full"
            >
              Nej tack
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
