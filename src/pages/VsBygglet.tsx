import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, Zap, Shield, Users, Clock, CreditCard, Headphones } from 'lucide-react';
import { PRODUCTION_URL } from '@/lib/constants';

const featureComparison = [
  { feature: 'AI-fakturatolkning', frost: true, bygglet: false, category: 'AI & Automation' },
  { feature: 'Automatisk ROT-generering', frost: true, bygglet: false, category: 'AI & Automation' },
  { feature: 'Tidrapportering', frost: true, bygglet: true, category: 'Grundläggande' },
  { feature: 'Projekthantering', frost: true, bygglet: true, category: 'Grundläggande' },
  { feature: 'ÄTA-hantering', frost: true, bygglet: true, category: 'Grundläggande' },
  { feature: 'Fortnox-integration', frost: true, bygglet: true, category: 'Integrationer' },
  { feature: 'Visma-integration', frost: true, bygglet: true, category: 'Integrationer' },
  { feature: 'Offline-läge (PWA)', frost: true, bygglet: false, category: 'Teknik' },
  { feature: 'Modern mobil-app', frost: true, bygglet: false, category: 'Teknik' },
  { feature: 'Dark mode', frost: true, bygglet: false, category: 'Teknik' },
  { feature: 'API-åtkomst', frost: true, bygglet: true, category: 'Teknik' },
  { feature: 'Obegränsade användare', frost: true, bygglet: false, category: 'Prissättning' },
  { feature: 'Ingen setup-kostnad', frost: true, bygglet: false, category: 'Prissättning' },
  { feature: 'Pengarna-tillbaka-garanti', frost: true, bygglet: false, category: 'Support' },
  { feature: 'Svensk support', frost: true, bygglet: true, category: 'Support' },
];

const pricingComparison = [
  { item: 'Baspris/månad', frost: '499 kr', bygglet: '1 000-2 000 kr' },
  { item: 'Per användare', frost: '0 kr (obegränsat)', bygglet: '200-400 kr/användare' },
  { item: 'Setup-avgift', frost: '0 kr', bygglet: '5 000-15 000 kr' },
  { item: 'Utbildning', frost: 'Ingår', bygglet: '2 000-5 000 kr' },
  { item: '5 användare/år', frost: '5 988 kr', bygglet: '~36 000 kr' },
];

const advantages = [
  {
    icon: Zap,
    title: 'AI-driven automatisering',
    description: 'Frost använder AI för fakturatolkning och ROT-generering. Bygglet kräver manuellt arbete.',
  },
  {
    icon: CreditCard,
    title: '80% billigare',
    description: 'Med fast pris på 499 kr/månad sparar du tusentals kronor jämfört med Bygglets per-användare-modell.',
  },
  {
    icon: Users,
    title: 'Obegränsade användare',
    description: 'Lägg till hela teamet utan extra kostnad. Bygglet tar betalt per användare.',
  },
  {
    icon: Clock,
    title: 'Modern teknik',
    description: 'Frost är byggt 2026 med senaste tekniken. Offline-läge, mörkt tema, mobilanpassat.',
  },
  {
    icon: Shield,
    title: 'Ingen risk',
    description: '30 dagars pengarna-tillbaka-garanti. Testa utan risk.',
  },
  {
    icon: Headphones,
    title: 'Personlig support',
    description: 'Som nystartat företag ger vi dig direkt kontakt med grundaren.',
  },
];

const VsBygglet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Jämförelse
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frost Bygg vs <span className="text-muted-foreground">Bygglet</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                En ärlig jämförelse av funktioner, priser och teknik. Se varför byggföretag byter till Frost.
              </p>
            </motion.div>
          </div>

          {/* Quick Comparison Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {/* Frost Card */}
            <div className="p-8 rounded-2xl border-2 border-primary bg-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Frost Bygg</h3>
                  <span className="text-sm text-primary">Modern & AI-driven</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-foreground">499 kr/månad, obegränsade användare</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-foreground">AI-fakturatolkning & ROT-automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-foreground">Ingen setup-kostnad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-foreground">30 dagars pengarna-tillbaka-garanti</span>
                </div>
              </div>
            </div>

            {/* Bygglet Card */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-muted">
                  <div className="h-6 w-6 rounded bg-muted-foreground/30" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Bygglet</h3>
                  <span className="text-sm text-muted-foreground">Traditionellt system</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-muted-foreground">1 000-2 000 kr/mån + per användare</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-muted-foreground">Manuell faktura- & ROT-hantering</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-muted-foreground">5 000-15 000 kr setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-muted-foreground">Ingen pengarna-tillbaka-garanti</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Funktionsjämförelse</h2>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 p-4 border-b border-border">
                <span className="font-semibold text-foreground">Funktion</span>
                <span className="font-semibold text-primary text-center">Frost Bygg</span>
                <span className="font-semibold text-muted-foreground text-center">Bygglet</span>
              </div>
              <div className="divide-y divide-border">
                {featureComparison.map((row, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 hover:bg-muted/30 transition-colors">
                    <span className="text-foreground">{row.feature}</span>
                    <div className="flex justify-center">
                      {row.frost ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {row.bygglet ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Prisjämförelse</h2>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 p-4 border-b border-border">
                <span className="font-semibold text-foreground">Kostnad</span>
                <span className="font-semibold text-primary text-center">Frost Bygg</span>
                <span className="font-semibold text-muted-foreground text-center">Bygglet</span>
              </div>
              <div className="divide-y divide-border">
                {pricingComparison.map((row, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 hover:bg-muted/30 transition-colors">
                    <span className="text-foreground">{row.item}</span>
                    <span className="text-center text-green-500 font-medium">{row.frost}</span>
                    <span className="text-center text-muted-foreground">{row.bygglet}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 p-4 bg-primary/10 border-t border-primary/20">
                <span className="font-bold text-foreground">Besparing per år (5 användare)</span>
                <span className="text-center font-bold text-primary">—</span>
                <span className="text-center font-bold text-green-500">~30 000 kr</span>
              </div>
            </div>
          </motion.div>

          {/* Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Varför välja Frost?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300">
                  <advantage.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Migration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Redo att byta från Bygglet?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Testa Frost Bygg gratis i 30 dagar. Ingen kreditkort krävs. 
              Vi hjälper dig migrera dina projekt och data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${PRODUCTION_URL}/signup`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                Starta gratis trial
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:hej@frostbygg.se?subject=Migration från Bygglet"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Få hjälp med migration
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VsBygglet;
