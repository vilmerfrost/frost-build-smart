import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Code, Plug, Shield, Book, Terminal, FileJson, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

const integrations = [
  {
    name: 'Fortnox',
    description: 'Synkronisera fakturor, kunder och bokföring automatiskt.',
    status: 'Tillgänglig',
    statusColor: 'text-green-500',
    docs: '#',
  },
  {
    name: 'Visma eEkonomi',
    description: 'Exportera löneunderlag och bokföringsdata direkt.',
    status: 'Tillgänglig',
    statusColor: 'text-green-500',
    docs: '#',
  },
  {
    name: 'BankID',
    description: 'Säker autentisering för svenska användare.',
    status: 'Kommer snart',
    statusColor: 'text-yellow-500',
    docs: '#',
  },
  {
    name: 'Swish',
    description: 'Betalningar direkt i appen.',
    status: 'Kommer snart',
    statusColor: 'text-yellow-500',
    docs: '#',
  },
];

const apiEndpoints = [
  { method: 'GET', path: '/api/v1/projects', description: 'Lista alla projekt' },
  { method: 'POST', path: '/api/v1/projects', description: 'Skapa nytt projekt' },
  { method: 'GET', path: '/api/v1/time-reports', description: 'Hämta tidrapporter' },
  { method: 'POST', path: '/api/v1/invoices/scan', description: 'Skanna faktura med AI' },
  { method: 'GET', path: '/api/v1/rot-summaries', description: 'Hämta ROT-sammanfattningar' },
];

const Developers = () => {
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Code className="h-4 w-4" />
                För utvecklare
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Bygg med <span className="text-primary">Frost API</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Integrera Frost Bygg med dina befintliga system. RESTful API med omfattande dokumentation.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-4 mb-16"
          >
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 cursor-pointer group">
              <Book className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">API-dokumentation</h3>
              <p className="text-muted-foreground text-sm mb-4">Komplett referens för alla endpoints och autentisering.</p>
              <span className="text-primary text-sm flex items-center gap-1">
                Läs mer <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 cursor-pointer group">
              <Plug className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Integrationsguider</h3>
              <p className="text-muted-foreground text-sm mb-4">Steg-för-steg guider för Fortnox, Visma och mer.</p>
              <span className="text-primary text-sm flex items-center gap-1">
                Läs mer <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 cursor-pointer group">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Säkerhet</h3>
              <p className="text-muted-foreground text-sm mb-4">OAuth 2.0, API-nycklar och best practices.</p>
              <span className="text-primary text-sm flex items-center gap-1">
                Läs mer <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.div>

          {/* API Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Terminal className="h-6 w-6 text-primary" />
              API-översikt
            </h2>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="p-4 bg-zinc-900 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-mono">Base URL:</span>
                  <code className="px-2 py-1 rounded bg-zinc-800 text-primary">https://api.frostbygg.se/v1</code>
                </div>
              </div>
              <div className="divide-y divide-border">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm text-foreground font-mono flex-1">{endpoint.path}</code>
                    <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-zinc-900/50 text-center">
                <span className="text-sm text-muted-foreground">
                  API-åtkomst ingår i Enterprise-planen. 
                  <a href="#pricing" className="text-primary hover:underline ml-1">Se priser →</a>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Authentication Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <FileJson className="h-6 w-6 text-primary" />
              Snabbstart
            </h2>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="p-4 bg-zinc-900 border-b border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Autentisering med API-nyckel</span>
                <span className="text-xs text-primary">cURL</span>
              </div>
              <div className="p-6">
                <pre className="text-sm text-foreground font-mono overflow-x-auto">
{`curl -X GET "https://api.frostbygg.se/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Plug className="h-6 w-6 text-primary" />
              Integrationer
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg font-bold text-foreground">
                        {integration.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{integration.name}</h3>
                        <span className={`text-xs ${integration.statusColor}`}>{integration.status}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                  <a href={integration.docs} className="text-primary text-sm flex items-center gap-1 hover:underline">
                    Dokumentation <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-border bg-card p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Tekniska specifikationer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">API</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    RESTful JSON API
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    OAuth 2.0 autentisering
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Webhooks för real-time events
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Rate limiting: 1000 req/min
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Infrastruktur</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    99.9% SLA uptime
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    EU-baserade servrar (Sverige/Tyskland)
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    TLS 1.3 kryptering
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Dagliga säkerhetskopior
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Redo att integrera?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Kontakta oss för API-åtkomst och teknisk support.
            </p>
            <a
              href="mailto:vilmer.frost@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              <Code className="h-5 w-5" />
              vilmer.frost@gmail.com
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Developers;
