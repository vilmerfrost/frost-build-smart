import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Shield, Mail } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const Privacy = () => {
  useSEO({
    title: 'Integritetspolicy',
    description: 'Frost Solutions integritetspolicy. Läs om hur vi samlar in, behandlar och skyddar dina personuppgifter i enlighet med GDPR.',
    path: '/integritetspolicy',
  });

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold tracking-wide uppercase mb-6">
                <Shield className="h-3.5 w-3.5" />
                Juridiskt
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-4 tracking-tight">
                Integritetspolicy
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
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">1. Personuppgiftsansvarig</h2>
              <p>
                Frost Solutions AB är personuppgiftsansvarig för behandlingen av
                dina personuppgifter. Du når oss på{' '}
                <a href="mailto:vilmer.frost@gmail.com" className="text-[#f26522] font-bold hover:underline">vilmer.frost@gmail.com</a>.
              </p>
              <p className="mt-2">Dataskyddsansvarig: Vilmer Frost</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">2. Vilka uppgifter vi samlar in</h2>
              <p className="mb-3">Vi samlar in följande personuppgifter beroende på hur du använder tjänsten:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kontouppgifter</strong> — namn, e-postadress, telefonnummer, företagsnamn, organisationsnummer</li>
                <li><strong>Projektdata</strong> — fakturor, tidrapporter, ÄTA-ärenden, dokument och foton du laddar upp</li>
                <li><strong>Betalningsuppgifter</strong> — hanteras av Stripe; vi lagrar aldrig kortnummer</li>
                <li><strong>Teknisk data</strong> — IP-adress, webbläsartyp, operativsystem, sidvisningar</li>
                <li><strong>Kommunikation</strong> — e-post och supportärenden du skickar till oss</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">3. Rättslig grund</h2>
              <p className="mb-3">Vi behandlar personuppgifter baserat på följande grunder enligt GDPR art. 6:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Avtal</strong> — för att tillhandahålla tjänsten du beställt (art. 6.1b)</li>
                <li><strong>Rättslig förpliktelse</strong> — bokföring, skatteredovisning (art. 6.1c)</li>
                <li><strong>Berättigat intresse</strong> — förbättra tjänsten, förhindra missbruk (art. 6.1f)</li>
                <li><strong>Samtycke</strong> — nyhetsbrev och icke-nödvändiga cookies (art. 6.1a)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">4. Hur vi använder uppgifterna</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tillhandahålla, underhålla och förbättra Frost Solutions</li>
                <li>Hantera ditt konto, betalningar och fakturering</li>
                <li>Skicka viktiga servicemeddelanden</li>
                <li>Svara på supportärenden och frågor</li>
                <li>Analysera användningsmönster för att förbättra produkten</li>
                <li>Uppfylla lagkrav (bokföring, skattedeklaration)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">5. Tredjeparter och underbiträden</h2>
              <p className="mb-3">Vi delar personuppgifter med följande parter, alla inom EU/EES eller med adekvata skyddsåtgärder:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[#e1bfb3]/30 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#f5f3f0]">
                      <th className="text-left p-3 font-bold text-[#1b1c1a]">Tjänst</th>
                      <th className="text-left p-3 font-bold text-[#1b1c1a]">Ändamål</th>
                      <th className="text-left p-3 font-bold text-[#1b1c1a]">Plats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e1bfb3]/20">
                    <tr><td className="p-3">Supabase</td><td className="p-3">Databas och autentisering</td><td className="p-3">EU (Tyskland)</td></tr>
                    <tr className="bg-[#f5f3f0]/50"><td className="p-3">Stripe</td><td className="p-3">Betalningshantering</td><td className="p-3">EU</td></tr>
                    <tr><td className="p-3">Plausible Analytics</td><td className="p-3">Webbanalys (cookiefri)</td><td className="p-3">EU</td></tr>
                    <tr className="bg-[#f5f3f0]/50"><td className="p-3">Vercel</td><td className="p-3">Hosting</td><td className="p-3">EU</td></tr>
                    <tr><td className="p-3">Fortnox / Visma</td><td className="p-3">Bokföringsintegration</td><td className="p-3">Sverige</td></tr>
                    <tr className="bg-[#f5f3f0]/50"><td className="p-3">BankID / Freja eID</td><td className="p-3">E-legitimation och signering</td><td className="p-3">Sverige</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm">Vi säljer aldrig dina personuppgifter till tredje part.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">6. Lagring och lagringstid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kontodata</strong> — så länge ditt konto är aktivt, plus 30 dagar efter radering</li>
                <li><strong>Projektdata</strong> — så länge projektet är aktivt; raderas 90 dagar efter att kontot stängs</li>
                <li><strong>Bokföringsdata</strong> — 7 år enligt bokföringslagen</li>
                <li><strong>Supportärenden</strong> — 24 månader efter avslutat ärende</li>
                <li><strong>Analysdata</strong> — aggregerad, icke-identifierbar data sparas utan tidsgräns</li>
              </ul>
              <p className="mt-3">All data lagras inom EU — primärt i Sverige, med backup i Tyskland.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">7. Dina rättigheter</h2>
              <p className="mb-3">Enligt GDPR har du rätt att:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tillgång</strong> — begära ett utdrag av dina personuppgifter</li>
                <li><strong>Rättelse</strong> — korrigera felaktiga uppgifter</li>
                <li><strong>Radering</strong> — begära att vi raderar dina uppgifter ("rätten att bli glömd")</li>
                <li><strong>Begränsning</strong> — begränsa hur vi behandlar dina uppgifter</li>
                <li><strong>Dataportabilitet</strong> — få ut dina uppgifter i maskinläsbart format</li>
                <li><strong>Invändning</strong> — invända mot behandling baserad på berättigat intresse</li>
                <li><strong>Återkalla samtycke</strong> — när som helst, utan att det påverkar tidigare behandling</li>
              </ul>
              <p className="mt-3">
                Kontakta oss på{' '}
                <a href="mailto:vilmer.frost@gmail.com" className="text-[#f26522] font-bold hover:underline">vilmer.frost@gmail.com</a>{' '}
                för att utöva dina rättigheter. Vi svarar inom 30 dagar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">8. Säkerhet</h2>
              <p>
                Vi skyddar dina uppgifter med TLS 1.3-kryptering vid överföring och AES-256-kryptering i vila.
                Åtkomst till personuppgifter begränsas till behörig personal. Vi genomför regelbundna
                säkerhetsgranskningar och penetrationstester.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">9. Klagomål</h2>
              <p>
                Om du anser att vi behandlar dina personuppgifter felaktigt har du rätt att lämna klagomål
                till <strong>Integritetsskyddsmyndigheten (IMY)</strong>:
              </p>
              <p className="mt-2">
                <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-[#f26522] font-bold hover:underline">www.imy.se</a>
                {' '}· telefon: 08-657 61 00
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">10. Ändringar</h2>
              <p>
                Vi kan uppdatera denna policy. Väsentliga ändringar meddelas via e-post eller i tjänsten.
                Senaste versionen finns alltid på denna sida.
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

export default Privacy;
