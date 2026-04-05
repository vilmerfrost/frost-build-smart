import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { Check, Hammer, Calendar, Rocket } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const changelogItems = [
  { status: 'shipped', date: 'Apr 2026', title: 'ÄTA-skydd med Legal Fortress', description: 'Immutable audit trail, BankID-signering och auto-fakturering. AB04/ABT06-kompatibelt.' },
  { status: 'shipped', date: 'Apr 2026', title: 'Dokumenthantering', description: 'BSAB/CoClass-struktur, AI-taggning, versionering och rollbaserad åtkomst.' },
  { status: 'shipped', date: 'Apr 2026', title: 'Kundportal', description: 'Kundinloggning med projektstatus, meddelandetråd, ÄTA-godkännande och fakturabetalning via Stripe.' },
  { status: 'shipped', date: 'Apr 2026', title: 'KMA & Säkerhet', description: 'Certifikatbevakning, incidentrapporter, riskbedömningar och digital personalliggare med CSV-export.' },
  { status: 'shipped', date: 'Apr 2026', title: 'Schemaläggning', description: 'Veckokalender med konfliktdetektering och automatisk kontroll mot arbetstidslagen.' },
  { status: 'shipped', date: 'Mar 2026', title: 'Underentreprenörshantering', description: 'F-skatt-verifiering, portal för UE och betalningsuppföljning.' },
  { status: 'shipped', date: 'Mar 2026', title: 'Materialpriser i realtid', description: 'Prisjämförelse från Byggmax, Beijer, XL-Bygg och Ahlsell med nattlig uppdatering.' },
  { status: 'shipped', date: 'Mar 2026', title: 'Rapporter & BI', description: 'Lönsamhet, beläggning, kassaflöde och AI-prediktioner per projekt.' },
  { status: 'shipped', date: 'Mar 2026', title: 'BankID digital signering', description: 'Digital signering via Idura — för ÄTA-godkännanden, avtal och dokumentkvittens.' },
  { status: 'shipped', date: 'Feb 2026', title: 'PEPPOL e-fakturering', description: 'Skicka och ta emot e-fakturor enligt PEPPOL-standard direkt från Frost.' },
  { status: 'shipped', date: 'Feb 2026', title: 'Skatteverket ROT direkt-submission', description: 'Automatisk generering av Begäran v6 XML och direkt inskickning till Skatteverket.' },
  { status: 'shipped', date: 'Dec 2025', title: 'Fortnox & Visma dubbelriktad synk', description: 'Automatisk synkronisering av fakturor, bokföring och lönefiler.' },
  { status: 'shipped', date: 'Dec 2025', title: 'AI fakturascanning', description: 'OCR via OpenRouter — extraherar leverantör, belopp, radposter och föreslår kontering.' },
  { status: 'shipped', date: 'Dec 2025', title: 'Offline-First PWA', description: 'Full funktionalitet utan internet. Synkas automatiskt när du får uppkoppling.' },
  { status: 'shipped', date: 'Dec 2025', title: 'Dark Mode', description: 'Mörkt tema för bekvämt arbete dygnet runt.' },

  { status: 'in-progress', date: 'Q2 2026', title: 'React Native mobilapp', description: 'Native app med Expo för iOS och Android — optimerad för byggplatsen.' },
  { status: 'in-progress', date: 'Q2 2026', title: 'Frontend UI för nya funktioner', description: 'Gränssnittet för dokumenthantering, KMA, schemaläggning och kundportal byggs ut.' },

  { status: 'roadmap', date: 'Q3 2026', title: 'Röst-till-ÄTA', description: 'Whisper speech-to-text — rapportera ÄTA med rösten direkt på byggplatsen.' },
  { status: 'roadmap', date: 'Q3 2026', title: 'QR/NFC-baserad incheckning', description: 'Scan-to-check-in på arbetsplatsen via QR-kod eller NFC-tagg.' },
  { status: 'roadmap', date: 'Q4 2026', title: 'Swish-betalningar', description: 'Betala fakturor direkt med Swish. Snabbt, enkelt och säkert.' },
  { status: 'roadmap', date: 'Q4 2026', title: 'Flerspråkiga säkerhetsdokument', description: 'Säkerhetsinstruktioner och KMA-dokument på engelska, polska och arabiska.' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'shipped': return <Check className="h-4 w-4" />;
    case 'in-progress': return <Hammer className="h-4 w-4" />;
    case 'roadmap': return <Calendar className="h-4 w-4" />;
    default: return <Check className="h-4 w-4" />;
  }
};

const getStatusBg = (status: string) => {
  switch (status) {
    case 'shipped': return 'bg-emerald-500/10 text-emerald-600';
    case 'in-progress': return 'bg-[#ffdbce] text-[#7f2b00]';
    case 'roadmap': return 'bg-[#eae8e5] text-[#594138]';
    default: return 'bg-[#eae8e5] text-[#594138]';
  }
};

const getLineColor = (status: string) => {
  switch (status) {
    case 'shipped': return 'bg-emerald-500/20';
    case 'in-progress': return 'bg-[#f26522]/20';
    case 'roadmap': return 'bg-[#e1bfb3]/30';
    default: return 'bg-[#e1bfb3]/30';
  }
};

const Changelog = () => {
  useSEO({
    title: 'Changelog & Roadmap',
    description: 'Se alla nya funktioner och kommande uppdateringar i Frost Solutions. ÄTA-skydd, dokumenthantering, kundportal, materialpriser och mer.',
    path: '/changelog',
  });

  const shipped = changelogItems.filter((item) => item.status === 'shipped');
  const inProgress = changelogItems.filter((item) => item.status === 'in-progress');
  const roadmap = changelogItems.filter((item) => item.status === 'roadmap');

  const renderGroup = (title: string, icon: React.ReactNode, items: typeof changelogItems, iconBg: string, lineColor: string) => (
    <div className="mb-16">
      <h2 className="text-2xl font-extrabold text-[#1b1c1a] mb-8 flex items-center gap-3">
        <span className={`flex items-center justify-center w-9 h-9 rounded-full ${iconBg}`}>{icon}</span>
        {title}
      </h2>
      <div className="relative">
        <div className={`absolute left-[1.125rem] top-0 bottom-0 w-px ${lineColor}`} />
        <div className="space-y-5">
          {items.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className={`absolute left-0 top-1.5 w-9 h-9 rounded-full flex items-center justify-center ${getStatusBg(item.status)}`}>
                {getStatusIcon(item.status)}
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#1b1c1a]">{item.title}</h3>
                  <span className="text-xs font-bold text-[#594138] bg-[#f5f3f0] px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-[#594138] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold tracking-wide uppercase mb-6">
              <Rocket className="h-3.5 w-3.5" />
              Changelog & Roadmap
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-4 tracking-tight">
              Vad vi <span className="text-[#f26522]">bygger</span>
            </h1>
            <p className="text-[#594138] max-w-2xl mx-auto text-lg">
              Vi uppdaterar Frost varje vecka med nya funktioner.
            </p>
          </div>

          {renderGroup('Lanserat', <Check className="h-4 w-4" />, shipped, 'bg-emerald-500/10 text-emerald-600', getLineColor('shipped'))}
          {renderGroup('Under utveckling', <Hammer className="h-4 w-4" />, inProgress, 'bg-[#ffdbce] text-[#7f2b00]', getLineColor('in-progress'))}
          {renderGroup('Roadmap', <Calendar className="h-4 w-4" />, roadmap, 'bg-[#eae8e5] text-[#594138]', getLineColor('roadmap'))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
