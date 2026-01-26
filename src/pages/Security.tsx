import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, FileCheck, Mail, CheckCircle, Globe, Database } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-end kryptering',
    description: 'All data krypteras både under överföring (TLS 1.3) och i vila (AES-256). Dina uppgifter är alltid skyddade.',
  },
  {
    icon: Server,
    title: 'EU-baserad hosting',
    description: 'All data lagras på servrar inom EU (Sverige och Tyskland) för att säkerställa GDPR-efterlevnad.',
  },
  {
    icon: Database,
    title: 'Automatiska backups',
    description: 'Dagliga säkerhetskopior med 30 dagars retention. Din data är alltid trygg och återställningsbar.',
  },
  {
    icon: FileCheck,
    title: 'Regelbundna säkerhetsaudits',
    description: 'Vi genomför kontinuerliga säkerhetstester och kodgranskning för att identifiera och åtgärda sårbarheter.',
  },
];

const gdprCompliance = [
  'Dataportabilitet - exportera din data när som helst',
  'Rätt till radering - ta bort ditt konto och all data permanent',
  'Databehandlingsavtal (DPA) tillgängligt för företagskunder',
  'Ingen försäljning av personuppgifter till tredje part',
  'Transparent datainsamling - vi samlar bara in det som behövs',
  'Cookie-samtycke enligt ePrivacy-förordningen',
];

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Säkerhet & Integritet
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Din data är <span className="text-primary">trygg hos oss</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Vi tar säkerhet på största allvar. Här beskriver vi hur vi skyddar din information och efterlever dataskyddslagstiftning.
              </p>
            </motion.div>
          </div>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GDPR Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-border bg-card p-8 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">GDPR-efterlevnad</h2>
                <p className="text-muted-foreground">Vi följer EU:s dataskyddsförordning (GDPR) fullt ut</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {gdprCompliance.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Var lagras din data?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🇸🇪</div>
                <h3 className="font-semibold text-foreground">Sverige</h3>
                <p className="text-sm text-muted-foreground">Primär databas och applikationsservrar</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🇩🇪</div>
                <h3 className="font-semibold text-foreground">Tyskland</h3>
                <p className="text-sm text-muted-foreground">Backup och redundans</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🇪🇺</div>
                <h3 className="font-semibold text-foreground">EU-only</h3>
                <p className="text-sm text-muted-foreground">Ingen data lämnar EU</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Har du frågor om säkerhet?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Vi svarar gärna på alla frågor om hur vi hanterar och skyddar din data. Kontakta oss direkt.
            </p>
            <a
              href="mailto:vilmer.frost@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5" />
              vilmer.frost@gmail.com
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Dataskyddsombud: Vilmer Frost
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
