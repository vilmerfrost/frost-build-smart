import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, Zap, Shield, Users, Clock, CreditCard, Headphones } from 'lucide-react';
import { PRODUCTION_URL } from '@/lib/constants';
import { useSEO } from '@/hooks/useSEO';

const featureComparison = [
  { feature: 'AI-fakturatolkning', frost: true, bygglet: false },
  { feature: 'Automatisk ROT-generering', frost: true, bygglet: false },
  { feature: 'Tidrapportering', frost: true, bygglet: true },
  { feature: 'Projekthantering', frost: true, bygglet: true },
  { feature: 'ÄTA-hantering', frost: true, bygglet: true },
  { feature: 'Fortnox-integration', frost: true, bygglet: true },
  { feature: 'Visma-integration', frost: true, bygglet: true },
  { feature: 'Offline-läge (PWA)', frost: true, bygglet: false },
  { feature: 'Modern mobil-app', frost: true, bygglet: false },
  { feature: 'Dark mode', frost: true, bygglet: false },
  { feature: 'API-åtkomst', frost: true, bygglet: true },
  { feature: 'Obegränsade användare', frost: true, bygglet: false },
  { feature: 'Ingen setup-kostnad', frost: true, bygglet: false },
  { feature: '14 dagars gratis trial', frost: true, bygglet: false },
  { feature: 'Svensk support', frost: true, bygglet: true },
];

const pricingComparison = [
  { item: 'Baspris/månad', frost: '499 kr', bygglet: '1 000-2 000 kr' },
  { item: 'Per användare', frost: '0 kr (obegränsat)', bygglet: '200-400 kr/användare' },
  { item: 'Setup-avgift', frost: '0 kr', bygglet: '5 000-15 000 kr' },
  { item: 'Utbildning', frost: 'Ingår', bygglet: '2 000-5 000 kr' },
  { item: '5 användare/år', frost: '5 988 kr', bygglet: '~36 000 kr' },
];

const advantages = [
  { icon: Zap, title: 'AI-driven automatisering', description: 'Frost använder AI för fakturatolkning och ROT-generering. Bygglet kräver manuellt arbete.' },
  { icon: CreditCard, title: '80% billigare', description: 'Med fast pris på 499 kr/månad sparar du tusentals kronor jämfört med Bygglets per-användare-modell.' },
  { icon: Users, title: 'Obegränsade användare', description: 'Lägg till hela teamet utan extra kostnad. Bygglet tar betalt per användare.' },
  { icon: Clock, title: 'Modern teknik', description: 'Frost är byggt 2026 med senaste tekniken. Offline-läge, mörkt tema, mobilanpassat.' },
  { icon: Shield, title: 'Ingen risk', description: '14 dagars gratis trial. Ingen bindningstid.' },
  { icon: Headphones, title: 'Personlig support', description: 'Som nystartat företag ger vi dig direkt kontakt med grundaren.' },
];

const VsBygglet = () => {
  useSEO({
    title: 'Frost vs Bygglet — Jämförelse 2026',
    description: 'Jämför Frost Solutions med Bygglet. AI-fakturatolkning, obegränsade användare, 80% lägre pris. Se funktioner och priser sida vid sida.',
    path: '/vs-bygglet',
  });

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold tracking-wide uppercase mb-6">
                Jämförelse
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-4 tracking-tight">
                Frost vs <span className="text-[#594138]/40">Bygglet</span>
              </h1>
              <p className="text-[#594138] max-w-2xl mx-auto text-lg">
                En ärlig jämförelse av funktioner, priser och teknik.
              </p>
            </motion.div>
          </div>

          {/* Quick cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="p-8 rounded-2xl bg-[#fdf6f2] border border-[#f26522]/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#f26522]/10">
                  <Zap className="h-6 w-6 text-[#f26522]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#1b1c1a]">Frost</h3>
                  <span className="text-sm font-bold text-[#f26522]">Modern & AI-driven</span>
                </div>
              </div>
              <div className="space-y-3">
                {['499 kr/mån, obegränsade användare', 'AI-fakturatolkning & ROT-automation', 'Ingen setup-kostnad', '14 dagars gratis trial'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" strokeWidth={1.75} />
                    <span className="text-[#1b1c1a] text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#eae8e5]">
                  <div className="h-6 w-6 rounded bg-[#594138]/20" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#1b1c1a]">Bygglet</h3>
                  <span className="text-sm text-[#594138]">Traditionellt system</span>
                </div>
              </div>
              <div className="space-y-3">
                {['1 000-2 000 kr/mån + per användare', 'Manuell faktura- & ROT-hantering', '5 000-15 000 kr setup', 'Ingen gratis trial'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-400 shrink-0" strokeWidth={1.75} />
                    <span className="text-[#594138] text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature table */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] mb-8 text-center">Funktionsjämförelse</h2>
            <div className="rounded-2xl bg-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-[#f5f3f0] p-4">
                <span className="font-bold text-[#1b1c1a]">Funktion</span>
                <span className="font-bold text-[#f26522] text-center">Frost</span>
                <span className="font-bold text-[#594138] text-center">Bygglet</span>
              </div>
              {featureComparison.map((row, index) => (
                <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? '' : 'bg-[#f5f3f0]/30'}`}>
                  <span className="text-[#1b1c1a] text-sm">{row.feature}</span>
                  <div className="flex justify-center">
                    {row.frost ? <CheckCircle className="h-5 w-5 text-emerald-500" strokeWidth={1.75} /> : <XCircle className="h-5 w-5 text-red-400" strokeWidth={1.75} />}
                  </div>
                  <div className="flex justify-center">
                    {row.bygglet ? <CheckCircle className="h-5 w-5 text-emerald-500" strokeWidth={1.75} /> : <XCircle className="h-5 w-5 text-red-400" strokeWidth={1.75} />}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing table */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] mb-8 text-center">Prisjämförelse</h2>
            <div className="rounded-2xl bg-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-[#f5f3f0] p-4">
                <span className="font-bold text-[#1b1c1a]">Kostnad</span>
                <span className="font-bold text-[#f26522] text-center">Frost</span>
                <span className="font-bold text-[#594138] text-center">Bygglet</span>
              </div>
              {pricingComparison.map((row, index) => (
                <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? '' : 'bg-[#f5f3f0]/30'}`}>
                  <span className="text-[#1b1c1a] text-sm">{row.item}</span>
                  <span className="text-center text-emerald-600 font-bold text-sm">{row.frost}</span>
                  <span className="text-center text-[#594138] text-sm">{row.bygglet}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 p-4 bg-[#fdf6f2]">
                <span className="font-bold text-[#1b1c1a] text-sm">Besparing per år (5 anv.)</span>
                <span className="text-center font-bold text-[#594138] text-sm">—</span>
                <span className="text-center font-extrabold text-emerald-600 text-sm">~30 000 kr</span>
              </div>
            </div>
          </motion.div>

          {/* Advantages */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] mb-8 text-center">Varför välja Frost?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="p-7 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-[#f26522]/10 flex items-center justify-center mb-5">
                    <adv.icon className="h-6 w-6 text-[#f26522]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-[#1b1c1a] mb-2">{adv.title}</h3>
                  <p className="text-sm text-[#594138] leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="rounded-2xl bg-gradient-to-br from-[#fdf6f2] to-[#fbf9f6] p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-4">
              Redo att byta från Bygglet?
            </h2>
            <p className="text-[#594138] mb-10 max-w-xl mx-auto">
              Testa Frost gratis i 14 dagar. Vi hjälper dig migrera dina projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${PRODUCTION_URL}/signup`} className="ember-gradient text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#f26522]/20 hover:scale-105 active:scale-95 transition-transform inline-flex items-center justify-center gap-2">
                Starta gratis trial
                <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a href="mailto:vilmer.frost@gmail.com?subject=Migration från Bygglet" className="bg-[#eae8e5] text-[#1b1c1a] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e4e2df] transition-colors inline-flex items-center justify-center">
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
