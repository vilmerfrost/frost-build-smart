import { motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PRODUCTION_URL } from '@/lib/constants';

const freeFeatures = [
  '1 projekt',
  'Obegränsat antal användare',
  '2 GB lagring',
  'Grundläggande ÄTA-hantering',
  'AI fakturascanning (10/mån)',
  'Tidrapportering',
];

const proFeatures = [
  'Obegränsat antal projekt',
  'Obegränsat antal användare',
  'Obegränsad lagring',
  'AI fakturascanning',
  'Tidrapportering & lönehantering',
  'ROT-automatik',
  'ÄTA-skydd med BankID-signering',
  'Dokumenthantering med AI-taggning',
  'KMA & säkerhet',
  'Schemaläggning',
  'Materialpriser i realtid',
  'Kundportal',
  'Alla integrationer',
  'Prioriterad support',
];

const enterpriseFeatures = [
  'Allt i Pro plus:',
  'API-åtkomst',
  'Dedikerad kundansvarig',
  'SSO & avancerad säkerhet',
  'Anpassade integrationer',
  'SLA-garanti',
  'On-premise möjlighet',
];

const faqs = [
  {
    question: 'Vad ingår i gratisplanen?',
    answer: 'Ett projekt, obegränsat antal användare, 2 GB lagring, grundläggande ÄTA-hantering, tidrapportering och 10 AI-fakturascanningar per månad. Inget kreditkort krävs.',
  },
  {
    question: 'Vad kostar Pro och vad ingår?',
    answer: '499 kr per projekt per månad. Du får alla 12 funktioner — inklusive ÄTA-skydd med BankID-signering, dokumenthantering, KMA, schemaläggning, materialpriser i realtid och kundportal. Obegränsad lagring och obegränsade användare.',
  },
  {
    question: 'Kan jag testa Pro gratis?',
    answer: 'Ja, 14 dagars gratis trial på Pro utan kreditkort. Ingen bindningstid eller dolda avgifter.',
  },
  {
    question: 'Ersätter ni verkligen iBinder, Bygglet och de andra?',
    answer: 'Ja. Dokumenthantering (iBinder), ritningshantering (Bluebeam), KMA (SSG), schemaläggning (Planday), projekthantering (Bygglet) och kalkylark (Excel) — allt finns inbyggt i ett verktyg.',
  },
  {
    question: 'Fungerar det med mitt bokföringssystem?',
    answer: 'Vi integrerar med Fortnox, Visma, BankID, Skatteverket och PEPPOL. Export och import sker automatiskt.',
  },
  {
    question: 'Hur fungerar ÄTA-skyddet juridiskt?',
    answer: 'Varje ÄTA-steg dokumenteras med tidsstämpel, foton och BankID-signering. Det ger dig ett juridiskt vattentätt underlag om det blir tvist.',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1b1c1a] tracking-tight mb-6 leading-tight">
            Enkel och transparent prissättning
          </h2>
          <p className="text-lg md:text-xl text-[#594138] font-light max-w-2xl mx-auto">
            Välj den plan som passar ditt byggföretag.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-6xl mx-auto mb-20">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#e1bfb3]/20 transition-all duration-300 hover:translate-y-[-4px]"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1b1c1a] mb-2">Gratis</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#1b1c1a]">0 kr</span>
                <span className="text-[#594138] font-medium">/mån</span>
              </div>
              <p className="text-sm text-[#594138] mt-2">Perfekt för att komma igång</p>
            </div>

            <ul className="space-y-3 mb-10">
              {freeFeatures.map((name) => (
                <li key={name} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-[#8d7166]" strokeWidth={1.75} />
                  <span className="text-sm text-[#594138]">{name}</span>
                </li>
              ))}
            </ul>

            <a
              href={`${PRODUCTION_URL}/signup`}
              className="block w-full bg-[#eae8e5] text-[#1b1c1a] py-3.5 px-8 rounded-full font-bold text-center hover:bg-[#e4e2df] transition-colors active:scale-[0.98]"
            >
              Skapa konto
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            viewport={{ once: true }}
            className="relative bg-[#fdf6f2] rounded-2xl p-8 md:p-10 shadow-sm border border-[#f26522]/10 transition-all duration-300 hover:translate-y-[-4px]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-[#f26522] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                Populärast
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1b1c1a] mb-2">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#1b1c1a]">499 kr</span>
                <span className="text-[#594138] font-medium">/projekt/mån</span>
              </div>
              <p className="text-sm text-[#594138] mt-2">Allt du behöver för att växa</p>
            </div>

            <ul className="space-y-3 mb-10">
              {proFeatures.map((name) => (
                <li key={name} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-[#f26522]" strokeWidth={2} />
                  <span className="text-sm text-[#594138]">{name}</span>
                </li>
              ))}
            </ul>

            <a
              href={`${PRODUCTION_URL}/signup`}
              className="block w-full ember-gradient text-white py-3.5 px-8 rounded-full font-bold text-center transition-transform active:scale-[0.98] shadow-md"
            >
              Starta 14 dagars gratis trial
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#e1bfb3]/20 transition-all duration-300 hover:translate-y-[-4px]"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1b1c1a] mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#1b1c1a] tracking-tight">Kontakta oss</span>
              </div>
              <p className="text-sm text-[#594138] mt-2">För stora byggbolag med krav</p>
            </div>

            <ul className="space-y-3 mb-10">
              {enterpriseFeatures.map((name, i) => (
                <li key={name} className="flex items-start gap-3">
                  {i === 0 ? (
                    <Check className="h-5 w-5 shrink-0 text-[#a63b00]" strokeWidth={2.5} />
                  ) : (
                    <Check className="h-5 w-5 shrink-0 text-[#8d7166]" strokeWidth={1.75} />
                  )}
                  <span className={`text-sm ${i === 0 ? 'text-[#1b1c1a] font-semibold' : 'text-[#594138]'}`}>{name}</span>
                </li>
              ))}
            </ul>

            <a
              href={`${PRODUCTION_URL}/demo`}
              className="block w-full bg-[#eae8e5] text-[#1b1c1a] py-3.5 px-8 rounded-full font-bold text-center hover:bg-[#e4e2df] transition-colors active:scale-[0.98]"
            >
              Boka demo
            </a>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-extrabold text-[#1b1c1a] text-center mb-12">
            Vanliga frågor
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqRow key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e1bfb3]/30 pb-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-[#1b1c1a] group-hover:text-[#a63b00] transition-colors">
          {question}
        </span>
        <ChevronDown
          strokeWidth={1.75}
          className={`h-5 w-5 shrink-0 text-[#594138] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-4 text-[#594138] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
