import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Scan, 
  FileText, 
  CheckCircle,
  Play,
  SkipForward
} from 'lucide-react';

interface TourStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  highlight?: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 1,
    title: 'Välkommen till Frost Bygg',
    description: 'Låt oss visa dig hur du kan spara 10+ timmar per vecka med vår AI-drivna plattform. Det tar bara 2 minuter!',
    icon: <Sparkles className="h-6 w-6" />,
    highlight: 'Automatiserad administration för byggbranschen',
  },
  {
    id: 2,
    title: 'Scanna dina dokument',
    description: 'Ta en bild eller ladda upp ritningar, leveranssedlar eller fakturor. Vår AI extraherar all relevant data automatiskt.',
    icon: <Scan className="h-6 w-6" />,
    highlight: '3 sekunder för att skanna ett dokument',
  },
  {
    id: 3,
    title: 'AI-extrahering',
    description: 'Frost AI läser och förstår dina dokument. Materiallista, mått, leverantörer - allt extraheras automatiskt.',
    icon: <FileText className="h-6 w-6" />,
    highlight: '99.5% precision på dataextraktion',
  },
  {
    id: 4,
    title: 'Klart att använda!',
    description: 'All data synkroniseras direkt med dina projekt. Skapa offerter, följ leveranser och fakturera - allt på ett ställe.',
    icon: <CheckCircle className="h-6 w-6" />,
    highlight: '30 dagars gratis trial - ingen bindningstid',
  },
];

const TOUR_STORAGE_KEY = 'frost-tour-completed';

interface ProductTourProps {
  autoStart?: boolean;
}

export function ProductTour({ autoStart = false }: ProductTourProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem(TOUR_STORAGE_KEY);
    if (completed) {
      setHasCompleted(true);
    } else if (autoStart) {
      // Auto start tour for first-time visitors
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [autoStart]);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    setIsOpen(false);
    setHasCompleted(true);
    localStorage.setItem(TOUR_STORAGE_KEY, 'true');
  };

  const handleSkip = () => {
    handleComplete();
  };

  const startTour = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const step = TOUR_STEPS[currentStep];
  const progress = ((currentStep + 1) / TOUR_STEPS.length) * 100;

  return (
    <>
      {/* Tour trigger button - only show if not completed or can restart */}
      {!isOpen && (
        <motion.button
          onClick={startTour}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-24 right-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full shadow-lg hover:shadow-xl hover:border-primary/30 transition-all group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {hasCompleted ? 'Se demo igen' : 'Interaktiv demo'}
          </span>
        </motion.button>
      )}

      {/* Tour modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleSkip}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Tour content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
            >
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Progress bar */}
                <div className="h-1 bg-secondary">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      {step.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Steg {currentStep + 1} av {TOUR_STEPS.length}
                    </span>
                  </div>
                  <button
                    onClick={handleSkip}
                    className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                    aria-label="Stäng demo"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="p-6"
                  >
                    {/* Icon display */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="relative"
                      >
                        {/* Animated rings */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary/20"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary/30"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5,
                            ease: 'easeInOut',
                          }}
                        />
                        <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {step.icon}
                        </div>
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Highlight badge */}
                    {step.highlight && (
                      <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          <Sparkles className="h-4 w-4" />
                          {step.highlight}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between p-4 border-t border-border">
                  <button
                    onClick={handleSkip}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <SkipForward className="h-4 w-4" />
                    Hoppa över
                  </button>

                  <div className="flex items-center gap-2">
                    {currentStep > 0 && (
                      <button
                        onClick={handlePrevious}
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Tillbaka
                      </button>
                    )}
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                    >
                      {currentStep === TOUR_STEPS.length - 1 ? 'Kom igång' : 'Nästa'}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Step indicators */}
                <div className="flex justify-center gap-2 pb-4">
                  {TOUR_STEPS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentStep
                          ? 'w-6 bg-primary'
                          : index < currentStep
                          ? 'bg-primary/50'
                          : 'bg-secondary'
                      }`}
                      aria-label={`Gå till steg ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
