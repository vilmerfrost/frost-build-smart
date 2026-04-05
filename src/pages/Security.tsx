import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, FileCheck, Mail, CheckCircle, Globe, Database } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const securityFeatures = [
  { icon: Lock, title: 'End-to-end kryptering', description: 'All data krypteras både under överföring (TLS 1.3) och i vila (AES-256). Dina uppgifter är alltid skyddade.' },
  { icon: Server, title: 'EU-baserad hosting', description: 'All data lagras på servrar inom EU (Sverige och Tyskland) för att säkerställa GDPR-efterlevnad.' },
  { icon: Database, title: 'Automatiska backups', description: 'Dagliga säkerhetskopior med 14 dagars retention. Din data är alltid trygg och återställningsbar.' },
  { icon: FileCheck, title: 'Regelbundna säkerhetsaudits', description: 'Vi genomför kontinuerliga säkerhetstester och kodgranskning för att identifiera och åtgärda sårbarheter.' },
];

const gdprCompliance = [
  'Dataportabilitet — exportera din data när som helst',
  'Rätt till radering — ta bort ditt konto och all data permanent',
  'Databehandlingsavtal (DPA) tillgängligt för företagskunder',
  'Ingen försäljning av personuppgifter till tredje part',
  'Transparent datainsamling — vi samlar bara in det som behövs',
  'Cookie-samtycke enligt ePrivacy-förordningen',
];

const Security = () => {
  useSEO({
    title: 'Säkerhet & Integritet',
    description: 'Frost Solutions tar säkerhet på allvar. End-to-end kryptering, EU-baserad hosting, GDPR-efterlevnad och dagliga backups.',
    path: '/security',
  });

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-6">
                <Shield className="h-3.5 w-3.5" />
                Säkerhet & Integritet
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-4 tracking-tight">
                Din data är <span className="text-[#f26522]">trygg hos oss</span>
              </h1>
              <p className="text-[#594138] max-w-2xl mx-auto text-lg">
                Vi tar säkerhet på största allvar. Här beskriver vi hur vi skyddar din information.
              </p>
            </motion.div>
          </div>

          {/* Security grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {securityFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="p-7 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f26522]/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1b1c1a] mb-2">{feature.title}</h3>
                    <p className="text-[#594138] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GDPR */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="rounded-2xl bg-white shadow-sm p-8 md:p-10 mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Globe className="h-5 w-5 text-blue-500" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#1b1c1a]">GDPR-efterlevnad</h2>
                <p className="text-[#594138] text-sm">Vi följer EU:s dataskyddsförordning fullt ut</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {gdprCompliance.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" strokeWidth={1.75} />
                  <span className="text-[#594138] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data locations */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="rounded-2xl bg-[#fdf6f2] border border-[#f26522]/10 p-8 md:p-10 mb-20">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] mb-8 text-center">Var lagras din data?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[{ flag: '🇸🇪', name: 'Sverige', desc: 'Primär databas och applikationsservrar' },
                { flag: '🇩🇪', name: 'Tyskland', desc: 'Backup och redundans' },
                { flag: '🇪🇺', name: 'EU-only', desc: 'Ingen data lämnar EU' }].map(loc => (
                <div key={loc.name} className="text-center p-6 rounded-2xl bg-white shadow-sm">
                  <div className="text-4xl mb-3">{loc.flag}</div>
                  <h3 className="font-bold text-[#1b1c1a] mb-1">{loc.name}</h3>
                  <p className="text-sm text-[#594138]">{loc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-center">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] mb-4">Har du frågor om säkerhet?</h2>
            <p className="text-[#594138] mb-8 max-w-xl mx-auto">
              Vi svarar gärna på alla frågor om hur vi hanterar och skyddar din data.
            </p>
            <a href="mailto:vilmer.frost@gmail.com" className="ember-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#f26522]/20 hover:scale-105 active:scale-95 transition-transform inline-flex items-center gap-2">
              <Mail className="h-5 w-5" strokeWidth={1.75} />
              vilmer.frost@gmail.com
            </a>
            <p className="text-sm text-[#594138] mt-5">Dataskyddsombud: Vilmer Frost</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
