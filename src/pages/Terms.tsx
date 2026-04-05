import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const Terms = () => {
  useSEO({
    title: 'Användarvillkor',
    description: 'Frost Solutions användarvillkor. Regler för användning av tjänsten, betalning, ansvar och uppsägning.',
    path: '/villkor',
  });

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold tracking-wide uppercase mb-6">
                <FileText className="h-3.5 w-3.5" />
                Juridiskt
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-4 tracking-tight">
                Användarvillkor
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
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">1. Om tjänsten</h2>
              <p>
                Frost Solutions ("Tjänsten") är en molnbaserad projekthanteringsplattform för byggföretag,
                tillhandahållen av Frost Solutions AB, nedan kallad "vi" eller "Frost Solutions".
              </p>
              <p className="mt-2">
                Genom att skapa ett konto eller använda Tjänsten godkänner du dessa villkor.
                Om du inte godkänner villkoren ska du inte använda Tjänsten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">2. Konto och ansvar</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Du ansvarar för att uppgifterna i ditt konto är korrekta och aktuella</li>
                <li>Du ansvarar för all aktivitet som sker under ditt konto</li>
                <li>Du ska skydda dina inloggningsuppgifter och omedelbart meddela oss vid obehörig åtkomst</li>
                <li>En användare får inte dela sitt konto med andra personer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">3. Planer och priser</h2>
              <p className="mb-3">Tjänsten erbjuds i följande planer:</p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#f5f3f0]">
                  <h3 className="font-bold text-[#1b1c1a]">Gratis</h3>
                  <p className="text-sm">1 projekt, obegränsat antal användare, 2 GB lagring, grundläggande funktioner. Ingen kostnad.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#fdf6f2] border border-[#f26522]/10">
                  <h3 className="font-bold text-[#1b1c1a]">Pro — 499 kr/projekt/månad</h3>
                  <p className="text-sm">Alla funktioner, obegränsad lagring, obegränsade användare per projekt.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#f5f3f0]">
                  <h3 className="font-bold text-[#1b1c1a]">Enterprise — offert</h3>
                  <p className="text-sm">Anpassad prissättning med SLA, SSO, API-åtkomst och dedikerad support.</p>
                </div>
              </div>
              <p className="mt-3 text-sm">
                Priser anges exklusive moms. Vi förbehåller oss rätten att ändra priser med 30 dagars förvarning.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">4. Betalning och fakturering</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pro-planen faktureras månadsvis i förskott via Stripe</li>
                <li>Betalning sker med kort eller faktura (Enterprise)</li>
                <li>Vid utebliven betalning kan vi stänga av åtkomsten till Tjänsten efter 14 dagars påminnelse</li>
                <li>Alla belopp anges i SEK exklusive moms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">5. Provperiod och ångerrätt</h2>
              <p>
                Pro-planen erbjuder en <strong>14 dagars gratis provperiod</strong> utan kreditkort.
                Under provperioden kan du avsluta när som helst utan kostnad.
              </p>
              <p className="mt-2">
                Enligt <strong>distansavtalslagen (2005:59)</strong> har konsumenter rätt att ångra sitt köp
                inom 14 dagar från avtalets ingående. Ångerrätten gäller inte om du uttryckligen har samtyckt
                till att tjänsten börjar utföras under ångerfristen och bekräftat att du förstår att ångerrätten
                går förlorad. Vid utövande av ångerrätt, kontakta oss på{' '}
                <a href="mailto:vilmer.frost@gmail.com" className="text-[#f26522] font-bold hover:underline">vilmer.frost@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">6. Tillåten användning</h2>
              <p className="mb-3">Du förbinder dig att:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Använda Tjänsten i enlighet med svensk lag</li>
                <li>Inte ladda upp material som gör intrång i andras rättigheter</li>
                <li>Inte försöka kringgå säkerhetsfunktioner eller belastningstesta Tjänsten utan tillåtelse</li>
                <li>Inte använda Tjänsten för olaglig verksamhet</li>
                <li>Inte vidaredistribuera eller sälja åtkomst till Tjänsten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">7. Din data och immateriella rättigheter</h2>
              <p>
                Du äger all data du laddar upp till Tjänsten. Vi gör inga anspråk på äganderätt till ditt innehåll.
                Vi använder din data enbart för att tillhandahålla Tjänsten.
              </p>
              <p className="mt-2">
                Frost Solutions äger alla rättigheter till Tjänstens mjukvara, design, varumärken och dokumentation.
              </p>
              <p className="mt-2">
                Se vår <Link to="/integritetspolicy" className="text-[#f26522] font-bold hover:underline">integritetspolicy</Link>{' '}
                för hur vi behandlar personuppgifter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">8. Tillgänglighet och ansvarsbegränsning</h2>
              <p>
                Vi strävar efter hög tillgänglighet men garanterar inte avbrottsfri drift. Vi ansvarar inte för
                skador orsakade av driftavbrott, dataförlust eller fel i tredjepartsintegrationer (Fortnox, Visma, BankID etc.).
              </p>
              <p className="mt-2">
                Vårt totala ansvar begränsas till det belopp du betalat för Tjänsten under de senaste 12 månaderna.
                Vi ansvarar aldrig för indirekta skador, utebliven vinst eller följdskador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">9. Uppsägning</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Du kan säga upp ditt konto när som helst via inställningarna eller genom att kontakta oss</li>
                <li>Vid uppsägning har du tillgång till Tjänsten till slutet av den betalda perioden</li>
                <li>Efter uppsägning raderas din data inom 90 dagar (undantaget bokföringsdata, 7 år)</li>
                <li>Du kan exportera din data innan kontot stängs</li>
              </ul>
              <p className="mt-3">
                Vi förbehåller oss rätten att stänga av konton som bryter mot dessa villkor, med omedelbar verkan
                vid allvarliga överträdelser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">10. Ändringar av villkoren</h2>
              <p>
                Vi kan uppdatera dessa villkor. Väsentliga ändringar meddelas via e-post minst 30 dagar i förväg.
                Fortsatt användning efter ändring innebär godkännande av de nya villkoren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">11. Tillämplig lag och tvister</h2>
              <p>
                Dessa villkor regleras av <strong>svensk lag</strong>. Tvister som inte kan lösas genom
                förhandling avgörs av <strong>svensk allmän domstol</strong>, med Stockholms tingsrätt
                som första instans.
              </p>
              <p className="mt-2">
                Konsumenter kan även vända sig till{' '}
                <a href="https://www.arn.se" target="_blank" rel="noopener noreferrer" className="text-[#f26522] font-bold hover:underline">
                  Allmänna reklamationsnämnden (ARN)
                </a>{' '}
                eller EU:s plattform för{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#f26522] font-bold hover:underline">
                  tvistlösning online (ODR)
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1b1c1a] mb-4">12. Kontakt</h2>
              <p>
                Frost Solutions AB<br />
                E-post:{' '}
                <a href="mailto:vilmer.frost@gmail.com" className="text-[#f26522] font-bold hover:underline">vilmer.frost@gmail.com</a><br />
                Webb: frostsolutions.se
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

export default Terms;
