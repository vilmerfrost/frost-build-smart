import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Cookie, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const CookiePolicyPage = () => {
  useSEO({
    title: 'Cookiepolicy',
    description: 'Frost Solutions cookiepolicy. Läs om vilka cookies vi använder, varför, och hur du hanterar dina inställningar.',
    path: '/cookies',
  });

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold tracking-wide uppercase mb-6">
                <Cookie className="h-3.5 w-3.5" />
                Juridiskt
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-4 tracking-tight">
                Cookiepolicy
              </h1>
              <p className="text-[#594138]">Senast uppdaterad: 5 april 2026</p>
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-10 text-[#594138] leading-relaxed"
          >
            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">Vad är cookies?</h2>
              <p>
                Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. De används
                för att webbplatsen ska fungera korrekt, komma ihåg dina inställningar och förstå hur
                besökare använder sidan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">Vår approach: minimal spårning</h2>
              <p>
                Frost Solutions använder <strong>Plausible Analytics</strong> — ett EU-baserat, cookiefritt
                analysverktyg. Det innebär att vi <strong>inte sätter några analyscookies</strong> på din enhet.
                Plausible samlar inte in personuppgifter och är fullt GDPR-kompatibelt utan samtycke.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">Cookies vi använder</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[#e1bfb3]/30 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#f5f3f0]">
                      <th className="text-left p-3 font-bold text-[#1b1c1a]">Namn</th>
                      <th className="text-left p-3 font-bold text-[#1b1c1a]">Typ</th>
                      <th className="text-left p-3 font-bold text-[#1b1c1a]">Ändamål</th>
                      <th className="text-left p-3 font-bold text-[#1b1c1a]">Livslängd</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e1bfb3]/20">
                    <tr>
                      <td className="p-3 font-mono text-xs">frost-cookie-consent</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">Nödvändig</span></td>
                      <td className="p-3">Sparar ditt cookiesamtycke</td>
                      <td className="p-3">Permanent (localStorage)</td>
                    </tr>
                    <tr className="bg-[#f5f3f0]/50">
                      <td className="p-3 font-mono text-xs">sb-*-auth-token</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">Nödvändig</span></td>
                      <td className="p-3">Autentisering via Supabase (sätts vid inloggning)</td>
                      <td className="p-3">Session</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">__stripe_mid</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">Funktionell</span></td>
                      <td className="p-3">Stripe bedrägeridetektering (sätts vid betalning)</td>
                      <td className="p-3">1 år</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm">
                Vi använder <strong>inga</strong> marknadsföringscookies eller tredjepartsspårning.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">Cookiekategorier</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#f5f3f0]">
                  <h3 className="font-bold text-[#1b1c1a] mb-1">Nödvändiga cookies</h3>
                  <p className="text-sm">Krävs för att webbplatsen och tjänsten ska fungera. Kan inte stängas av. Inget samtycke krävs.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#f5f3f0]">
                  <h3 className="font-bold text-[#1b1c1a] mb-1">Funktionella cookies</h3>
                  <p className="text-sm">Förbättrar funktionalitet som betalningssäkerhet. Sätts bara när du aktivt genomför en betalning.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#f5f3f0]">
                  <h3 className="font-bold text-[#1b1c1a] mb-1">Analyscookies</h3>
                  <p className="text-sm">Vi använder Plausible Analytics som är helt cookiefritt — inga analyscookies sätts.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">Hantera dina inställningar</h2>
              <p className="mb-3">Du kan hantera cookies på följande sätt:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Via vår <strong>cookiebanner</strong> som visas vid ditt första besök</li>
                <li>Via din <strong>webbläsares inställningar</strong> — du kan blockera eller ta bort cookies</li>
                <li>Genom att rensa <strong>localStorage</strong> i webbläsarens utvecklarverktyg</li>
              </ul>
              <p className="mt-3 text-sm">
                Observera att blockering av nödvändiga cookies kan påverka tjänstens funktionalitet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">Rättslig grund</h2>
              <p>
                Nödvändiga cookies sätts enligt LEK 6 kap. 18 § (undantag för tekniskt nödvändiga cookies).
                Övriga cookies kräver ditt samtycke enligt GDPR art. 6.1a och LEK.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">Mer information</h2>
              <p>
                Läs vår fullständiga{' '}
                <Link to="/integritetspolicy" className="text-[#f26522] font-bold hover:underline">integritetspolicy</Link>{' '}
                för detaljer om hur vi hanterar personuppgifter. Vid frågor, kontakta oss på{' '}
                <a href="mailto:vilmer.frost@gmail.com" className="text-[#f26522] font-bold hover:underline">vilmer.frost@gmail.com</a>.
              </p>
            </section>
          </motion.article>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a href="mailto:vilmer.frost@gmail.com" className="ember-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#f26522]/20 hover:scale-105 active:scale-95 transition-transform inline-flex items-center gap-2">
              <Mail className="h-5 w-5" strokeWidth={1.75} />
              Frågor? Kontakta oss
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
