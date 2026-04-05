import { motion } from 'framer-motion';
import {
  ScanLine, Timer, Calculator, Wallet, LayoutDashboard, Plug,
  ShieldCheck, FolderOpen, HardHat, CalendarRange, BadgeDollarSign, Users,
} from 'lucide-react';

const dailyTools = [
  { icon: ScanLine, title: 'AI Fakturascanning', description: 'Ladda upp en faktura — AI läser av, matchar mot projekt och föreslår kontering automatiskt.' },
  { icon: Timer, title: 'Tidrapportering', description: 'Logga tid per projekt och anställd. Exportera direkt till lönesystem med ett klick.' },
  { icon: Calculator, title: 'ROT-avdrag', description: 'Automatisk beräkning och rapportering av ROT-avdrag direkt till Skatteverket.' },
  { icon: Wallet, title: 'Lönehantering', description: 'Beräkna lön, OB-tillägg och arbetsgivaravgifter. Exportera till Visma eller Fortnox med ett klick.' },
  { icon: LayoutDashboard, title: 'Projektöversikt', description: 'Se alla pågående projekt, deadlines och budgetar i realtid med eleganta dashboards.' },
  { icon: Plug, title: 'Sömlösa Integrationer', description: 'Koppla ihop med Fortnox, Visma, BankID och PEPPOL. Vi bygger bron mellan dina favoritverktyg.' },
];

const differentiators = [
  { icon: ShieldCheck, title: 'ÄTA-skydd', description: 'Missa aldrig en ÄTA-faktura igen. Varje steg dokumenteras med tidsstämpel, foton och BankID-signering — juridiskt vattentätt.', hero: true },
  { icon: FolderOpen, title: 'Dokumenthantering', description: 'Digital projektpärm med BSAB-struktur, versionering och AI-taggning. Ersätter iBinder.' },
  { icon: HardHat, title: 'KMA & Säkerhet', description: 'Certifikat, incidentrapporter, riskbedömningar och personalliggare. Ersätter SSG.' },
  { icon: CalendarRange, title: 'Schemaläggning', description: 'Veckokalender med konfliktdetektering och automatisk kontroll mot arbetstidslagen.' },
  { icon: BadgeDollarSign, title: 'Materialpriser', description: 'Jämför priser från Byggmax, Beijer, XL-Bygg och Ahlsell i realtid. Ingen annan har detta.' },
  { icon: Users, title: 'Kundportal', description: 'Dina kunder loggar in, ser status, godkänner ÄTA med BankID och betalar fakturor direkt.' },
];

function FeatureCard({ feature, index }: { feature: typeof dailyTools[0] & { hero?: boolean }; index: number }) {
  const isHero = 'hero' in feature && feature.hero;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        isHero
          ? 'md:col-span-3 ember-gradient text-white shadow-lg shadow-[#f26522]/20'
          : 'bg-white shadow-sm hover:shadow-lg'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
        isHero ? 'bg-white/20 text-white' : 'bg-[#f26522]/10 text-[#f26522]'
      }`}>
        <feature.icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className={`text-lg font-bold mb-2 ${isHero ? 'text-white text-xl' : 'text-[#1b1c1a]'}`}>
        {feature.title}
      </h3>
      <p className={`text-sm leading-relaxed ${isHero ? 'text-white/80 text-base' : 'text-[#594138]'}`}>
        {feature.description}
      </p>
    </motion.div>
  );
}

export function BentoFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-[#ffdbce] text-[#7f2b00] rounded-full text-sm font-semibold tracking-wide">
            FUNKTIONER
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1b1c1a] leading-[1.1] mb-6 max-w-4xl">
            Allt du behöver för att driva byggprojekt
          </h2>
          <p className="text-xl md:text-2xl text-[#594138] max-w-2xl leading-relaxed">
            Från fakturascanning till tidrapportering — allt AI-drivet och automatiserat.
          </p>
        </motion.header>

        {/* Vardagsverktygen */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#594138]/50 mb-8"
          >
            Vardagsverktygen
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dailyTools.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>

        {/* Det som gör oss unika */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#594138]/50 mb-8"
          >
            Det som gör oss unika
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {differentiators.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
