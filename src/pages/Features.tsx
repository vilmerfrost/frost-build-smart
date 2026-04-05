import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ScanLine, Timer, Calculator, Wallet, LayoutDashboard, Plug,
  ShieldCheck, FolderOpen, HardHat, CalendarRange, BadgeDollarSign, Users,
  ArrowRight,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { PRODUCTION_URL } from '@/lib/constants';

const dailyTools = [
  {
    id: 'fakturascanning',
    icon: ScanLine,
    title: 'AI Fakturascanning',
    description: 'OCR-driven fakturaläsning som automatiskt extraherar leverantör, belopp, radposter och förfallodatum. Matchar mot projekt och föreslår kontering.',
    bullets: ['Läser svenska fakturaformat (Svefaktura, PEPPOL)', 'Auto-matchning mot projekt och leverantör', 'Föreslår kontering baserat på historik', 'Hanterar kreditfakturor och delbetalningar'],
  },
  {
    id: 'tidrapportering',
    icon: Timer,
    title: 'Tidrapportering',
    description: 'Logga tid per projekt och anställd med automatisk OB-beräkning. Fungerar offline på byggplatsen och synkar när du har uppkoppling.',
    bullets: ['Per projekt och per anställd', 'OB-tillägg beräknas automatiskt', 'Export till Visma och Fortnox med ett klick', 'Offline-stöd — synkar automatiskt'],
  },
  {
    id: 'rot-avdrag',
    icon: Calculator,
    title: 'ROT-avdrag',
    description: 'Automatisk beräkning av ROT-avdrag baserat på projektdata. Genererar Skatteverket-giltig XML och skickar in direkt.',
    bullets: ['Auto-beräkning från projektdata', 'Genererar Begäran v6-format (XML)', 'Statuspolling mot Skatteverket', 'Revisionslogg för alla inskickningar'],
  },
  {
    id: 'lonehantering',
    icon: Wallet,
    title: 'Lönehantering',
    description: 'Fullständig lönehantering med OB, semesterersättning och arbetsgivaravgifter. Exportera till ditt befintliga system.',
    bullets: ['Lön med OB-tillägg och semesterersättning', 'Automatisk beräkning av arbetsgivaravgifter', 'PAXML-export för Visma', 'Fortnox bokföringsexport'],
  },
  {
    id: 'projektoversikt',
    icon: LayoutDashboard,
    title: 'Projektöversikt',
    description: 'Se alla pågående projekt, budgetar och deadlines i realtid. Dashboards som ger överblick utan att du behöver gräva.',
    bullets: ['Budget-tracking i realtid', 'Deadlines och milstolpar', 'Notifikationer vid budgetavvikelser', 'Statusöversikt för hela portföljen'],
  },
  {
    id: 'integrationer',
    icon: Plug,
    title: 'Integrationer',
    description: 'Sömlös koppling till dina befintliga verktyg. Dubbelriktad synk med Fortnox, löneexport till Visma, digital signering med BankID.',
    bullets: ['Fortnox — dubbelriktad synk (fakturor, bokföring)', 'Visma — löneexport (PAXML)', 'BankID — digital signering via Idura', 'PEPPOL — e-fakturering', 'Skatteverket — ROT direkt-inskickning'],
  },
];

const differentiators = [
  {
    id: 'ata-skydd',
    icon: ShieldCheck,
    title: 'ÄTA-skydd',
    description: '5-stegsprocess från skapande till automatisk fakturering. Immutable hashkedja som revisionslogg. Juridiskt vattentätt.',
    bullets: ['Skapa → granska → kundgodkännande (BankID) → utför → auto-fakturera', 'Immutable hash-kedjad revisionslogg', 'Obligatorisk fotodokumentation', 'AB04/ABT06-kompatibel', 'Kreditprövning innan projektstart'],
    hero: true,
  },
  {
    id: 'dokumenthantering',
    icon: FolderOpen,
    title: 'Dokumenthantering',
    description: 'Digital projektpärm med BSAB/CoClass-mappstruktur, automatisk versionering och AI-taggning. Ersätter iBinder.',
    bullets: ['BSAB/CoClass-mappstruktur (7 kategorier)', 'Automatisk versionering', 'AI-taggning och fulltextsökning', 'Rollbaserad åtkomst och säkra delningslänkar', 'Checklistor för obligatoriska dokument'],
  },
  {
    id: 'kma-sakerhet',
    icon: HardHat,
    title: 'KMA & Säkerhet',
    description: 'Hantera certifikat, incidentrapporter, riskbedömningar och personalliggare digitalt. Ersätter SSG.',
    bullets: ['Certifikatbevakning med utgångspåminnelser', 'Incidentrapportering med foton', '5 mallar för riskbedömningar', 'Digital personalliggare (in/ut + CSV-export)', 'Arbetsplatsinduktion med kvittens'],
  },
  {
    id: 'schemalagning',
    icon: CalendarRange,
    title: 'Schemaläggning',
    description: 'Veckokalender med automatisk konfliktdetektering och kontroll mot arbetstidslagen.',
    bullets: ['Veckovis kalendervy', 'Automatisk konfliktdetektering', 'Arbetstidslagskontroll', 'Skiftbyten med chefsapproval', 'Semester- och sjukfrånvaro synligt'],
  },
  {
    id: 'materialpriser',
    icon: BadgeDollarSign,
    title: 'Materialpriser',
    description: 'Jämför priser i realtid från Byggmax, Beijer, XL-Bygg och Ahlsell. Ingen annan har detta.',
    bullets: ['Realtidspriser från 4 leverantörer', 'Nattlig uppdatering via scraper', 'Prisjämförelse per artikel', 'Prissänkningsnotiser', 'CSV-uppladdning för avtalspriser'],
  },
  {
    id: 'kundportal',
    icon: Users,
    title: 'Kundportal',
    description: 'Dina kunder loggar in, ser projektstatus, godkänner ÄTA med BankID och betalar fakturor direkt.',
    bullets: ['Kundinloggning med projektstatus', 'Meddelandetråd med entreprenör', 'ÄTA-godkännande med BankID', 'Fakturabetalning via Stripe', 'Dagbok och nöjdhetsenkät'],
  },
];

function FeatureSection({ feature, index }: { feature: typeof dailyTools[0] & { hero?: boolean }; index: number }) {
  const isHero = 'hero' in feature && feature.hero;

  return (
    <motion.section
      id={feature.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      viewport={{ once: true }}
      className={`rounded-2xl p-8 md:p-10 ${isHero ? 'ember-gradient text-white shadow-lg shadow-[#f26522]/20' : 'bg-white shadow-sm'}`}
    >
      <div className="flex items-start gap-5 mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isHero ? 'bg-white/20 text-white' : 'bg-[#f26522]/10 text-[#f26522]'}`}>
          <feature.icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-2 ${isHero ? 'text-white' : 'text-[#1b1c1a]'}`}>{feature.title}</h3>
          <p className={`leading-relaxed ${isHero ? 'text-white/80' : 'text-[#594138]'}`}>{feature.description}</p>
        </div>
      </div>
      <ul className={`ml-17 space-y-2 ${isHero ? 'text-white/70' : 'text-[#594138]'}`}>
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isHero ? 'bg-white/50' : 'bg-[#f26522]/40'}`} />
            {b}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

const Features = () => {
  useSEO({
    title: 'Funktioner',
    description: 'Alla funktioner i Frost Solutions — från AI fakturascanning och ÄTA-skydd till materialpriser och kundportal. 12 verktyg i ett.',
    path: '/funktioner',
  });

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 mb-6 bg-[#ffdbce] text-[#7f2b00] rounded-full text-sm font-semibold tracking-wide">
                ALLA FUNKTIONER
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-6 tracking-tight">
                12 verktyg. <span className="text-[#f26522]">Ett system.</span>
              </h1>
              <p className="text-[#594138] max-w-2xl mx-auto text-lg leading-relaxed">
                Allt du behöver för att driva byggprojekt — från fakturascanning till kundportal.
                Ersätter iBinder, Bluebeam, SSG, Planday, Bygglet och Excel.
              </p>
            </div>
          </motion.div>

          {/* Vardagsverktygen */}
          <div className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#594138]/50 mb-6">Vardagsverktygen</h2>
            <div className="space-y-5">
              {dailyTools.map((f, i) => <FeatureSection key={f.id} feature={f} index={i} />)}
            </div>
          </div>

          {/* Det som gör oss unika */}
          <div className="mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#594138]/50 mb-6">Det som gör oss unika</h2>
            <div className="space-y-5">
              {differentiators.map((f, i) => <FeatureSection key={f.id} feature={f} index={i} />)}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={`${PRODUCTION_URL}/signup`}
              className="ember-gradient text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#f26522]/20 hover:scale-105 active:scale-95 transition-transform inline-flex items-center gap-2"
            >
              Starta gratis
              <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
            </a>
            <p className="text-sm text-[#594138] mt-4">14 dagars gratis trial · Inget kreditkort</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
