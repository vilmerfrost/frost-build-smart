import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { PRODUCTION_URL } from '@/lib/constants';

const features = [
  { name: 'Användare', free: 'Obegränsat', pro: 'Obegränsat', enterprise: 'Obegränsat' },
  { name: 'Projekt', free: '1', pro: 'Obegränsat', enterprise: 'Obegränsat' },
  { name: 'Lagring', free: '2 GB', pro: 'Obegränsad', enterprise: 'Obegränsad' },
  { name: 'AI Fakturascanning', free: '10/mån', pro: true, enterprise: true },
  { name: 'Tidrapportering', free: true, pro: true, enterprise: true },
  { name: 'ROT-avdrag', free: false, pro: true, enterprise: true },
  { name: 'Lönehantering', free: false, pro: true, enterprise: true },
  { name: 'Projektöversikt', free: true, pro: true, enterprise: true },
  { name: 'ÄTA-skydd (BankID)', free: 'Grundläggande', pro: true, enterprise: true },
  { name: 'Dokumenthantering', free: false, pro: true, enterprise: true },
  { name: 'KMA & Säkerhet', free: false, pro: true, enterprise: true },
  { name: 'Schemaläggning', free: false, pro: true, enterprise: true },
  { name: 'Materialpriser', free: false, pro: true, enterprise: true },
  { name: 'Kundportal', free: false, pro: true, enterprise: true },
  { name: 'Integrationer (Fortnox, Visma, BankID, PEPPOL)', free: false, pro: true, enterprise: true },
  { name: 'Prioriterad support', free: false, pro: true, enterprise: true },
  { name: 'API-åtkomst', free: false, pro: false, enterprise: true },
  { name: 'SSO & avancerad säkerhet', free: false, pro: false, enterprise: true },
  { name: 'Dedikerad kundansvarig', free: false, pro: false, enterprise: true },
  { name: 'Anpassade integrationer', free: false, pro: false, enterprise: true },
  { name: 'SLA-garanti', free: false, pro: false, enterprise: true },
];

const faqs = [
  { question: 'Vad ingår i gratisplanen?', answer: 'Ett projekt, obegränsat antal användare, 2 GB lagring, grundläggande ÄTA-hantering, tidrapportering och 10 AI-fakturascanningar per månad. Inget kreditkort krävs.' },
  { question: 'Vad kostar Pro och vad ingår?', answer: '499 kr per projekt per månad (4 990 kr/år med årsbetalning). Du får alla 12 funktioner — inklusive ÄTA-skydd med BankID-signering, dokumenthantering, KMA, schemaläggning, materialpriser i realtid och kundportal.' },
  { question: 'Kan jag testa Pro gratis?', answer: 'Ja, 14 dagars gratis trial på Pro utan kreditkort. Ingen bindningstid eller dolda avgifter.' },
  { question: 'Ersätter ni verkligen iBinder, Bygglet och de andra?', answer: 'Ja. Dokumenthantering (iBinder), ritningshantering (Bluebeam), KMA (SSG), schemaläggning (Planday), projekthantering (Bygglet) och kalkylark (Excel) — allt finns inbyggt i ett verktyg.' },
  { question: 'Fungerar det med mitt bokföringssystem?', answer: 'Vi integrerar med Fortnox, Visma, BankID, Skatteverket och PEPPOL. Export och import sker automatiskt.' },
  { question: 'Hur fungerar ÄTA-skyddet juridiskt?', answer: 'Varje ÄTA-steg dokumenteras med tidsstämpel, foton och BankID-signering. Det ger dig ett juridiskt vattentätt underlag om det blir tvist.' },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-[#f26522]" strokeWidth={2} />;
  if (value === false) return <X className="h-5 w-5 text-[#e1bfb3]/60" strokeWidth={1.5} />;
  return <span className="text-sm font-medium text-[#594138]">{value}</span>;
}

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e1bfb3]/30 pb-4">
      <button type="button" onClick={() => setOpen((v) => !v)} className="w-full flex justify-between items-center py-4 text-left focus:outline-none group" aria-expanded={open}>
        <span className="text-lg font-semibold text-[#1b1c1a] group-hover:text-[#a63b00] transition-colors">{question}</span>
        <ChevronDown strokeWidth={1.75} className={`h-5 w-5 shrink-0 text-[#594138] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <p className="pb-4 text-[#594138] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  useSEO({
    title: 'Priser',
    description: 'Frost Solutions priser. Gratis plan, Pro för 499 kr/projekt/mån, och Enterprise. Jämför alla funktioner.',
    path: '/priser',
  });

  const proPrice = yearly ? '4 990 kr' : '499 kr';
  const proPeriod = yearly ? '/projekt/år' : '/projekt/mån';
  const proSavings = yearly ? '(spara 2 månader)' : '';

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-6 tracking-tight">
                Enkel och transparent <span className="text-[#f26522]">prissättning</span>
              </h1>
              <p className="text-[#594138] max-w-2xl mx-auto text-lg mb-8">
                Välj den plan som passar ditt byggföretag. Ingen bindningstid.
              </p>

              <div className="inline-flex items-center gap-3 bg-white rounded-full p-1.5 shadow-sm">
                <button
                  onClick={() => setYearly(false)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${!yearly ? 'ember-gradient text-white shadow-md' : 'text-[#594138]'}`}
                >
                  Månadsvis
                </button>
                <button
                  onClick={() => setYearly(true)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${yearly ? 'ember-gradient text-white shadow-md' : 'text-[#594138]'}`}
                >
                  Årsvis <span className="text-xs opacity-80">(-2 mån)</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-20">
            {/* Free */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e1bfb3]/20"
            >
              <h3 className="text-xl font-bold text-[#1b1c1a] mb-2">Gratis</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-[#1b1c1a]">0 kr</span>
                <span className="text-[#594138] font-medium">/mån</span>
              </div>
              <p className="text-sm text-[#594138] mb-8">Perfekt för att komma igång</p>
              <a href={`${PRODUCTION_URL}/signup`} className="block w-full bg-[#eae8e5] text-[#1b1c1a] py-3.5 px-8 rounded-full font-bold text-center hover:bg-[#e4e2df] transition-colors">
                Skapa konto
              </a>
            </motion.div>

            {/* Pro */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }} viewport={{ once: true }}
              className="relative bg-[#fdf6f2] rounded-2xl p-8 shadow-sm border border-[#f26522]/10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#f26522] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Populärast</span>
              </div>
              <h3 className="text-xl font-bold text-[#1b1c1a] mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-[#1b1c1a]">{proPrice}</span>
                <span className="text-[#594138] font-medium">{proPeriod}</span>
              </div>
              <p className="text-sm text-[#594138] mb-8">
                Allt du behöver för att växa {proSavings && <span className="text-[#f26522] font-bold">{proSavings}</span>}
              </p>
              <a href={`${PRODUCTION_URL}/signup`} className="block w-full ember-gradient text-white py-3.5 px-8 rounded-full font-bold text-center transition-transform active:scale-[0.98] shadow-md">
                Starta 14 dagars gratis trial
              </a>
            </motion.div>

            {/* Enterprise */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e1bfb3]/20"
            >
              <h3 className="text-xl font-bold text-[#1b1c1a] mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-extrabold text-[#1b1c1a]">Kontakta oss</span>
              </div>
              <p className="text-sm text-[#594138] mb-8">För stora byggbolag med krav</p>
              <a href={`${PRODUCTION_URL}/demo`} className="block w-full bg-[#eae8e5] text-[#1b1c1a] py-3.5 px-8 rounded-full font-bold text-center hover:bg-[#e4e2df] transition-colors">
                Boka demo
              </a>
            </motion.div>
          </div>

          {/* Comparison table */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] text-center mb-10">Jämför alla funktioner</h2>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f5f3f0] border-b border-[#e1bfb3]/20">
                      <th className="text-left p-4 font-bold text-[#1b1c1a] w-1/2">Funktion</th>
                      <th className="text-center p-4 font-bold text-[#1b1c1a]">Gratis</th>
                      <th className="text-center p-4 font-bold text-[#f26522]">Pro</th>
                      <th className="text-center p-4 font-bold text-[#1b1c1a]">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((f, i) => (
                      <tr key={f.name} className={`border-b border-[#e1bfb3]/10 ${i % 2 === 1 ? 'bg-[#f5f3f0]/30' : ''}`}>
                        <td className="p-4 text-[#1b1c1a] font-medium">{f.name}</td>
                        <td className="p-4 text-center"><div className="flex justify-center"><CellValue value={f.free} /></div></td>
                        <td className="p-4 text-center"><div className="flex justify-center"><CellValue value={f.pro} /></div></td>
                        <td className="p-4 text-center"><div className="flex justify-center"><CellValue value={f.enterprise} /></div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] text-center mb-10">Vanliga frågor</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => <FaqRow key={i} question={faq.question} answer={faq.answer} />)}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
