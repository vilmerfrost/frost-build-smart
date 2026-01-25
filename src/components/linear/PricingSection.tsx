import { motion } from 'framer-motion';
import { Check, X, Rocket, Shield, ArrowRight } from 'lucide-react';

const PRODUCTION_URL = 'https://frostsolutions.se';

const tiers = [
  {
    name: 'Pro',
    price: '499',
    billing: 'Allt inkluderat. Obegränsat antal användare.',
    description: 'Allt du behöver för att automatisera din byggadministration',
    icon: Rocket,
    featured: true,
    badge: 'REKOMMENDERAD',
    cta: 'Starta gratis',
    ctaNote: '30 dagar gratis trial • Ingen kreditkort krävs',
    ctaHref: `${PRODUCTION_URL}/signup`,
    features: [
      { name: 'Obegränsat antal användare', included: true },
      { name: 'Obegränsat antal projekt', included: true },
      { name: 'AI-fakturatolkning', included: true },
      { name: 'Tidrapportering & GPS', included: true },
      { name: 'Advanced ÄTA-hantering', included: true },
      { name: 'Fortnox & Visma-integration', included: true },
      { name: 'Löneexport på ett klick', included: true },
      { name: 'Priority support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Kontakta oss',
    billing: null,
    description: 'För större organisationer med specialbehov',
    icon: Shield,
    featured: false,
    cta: 'Boka demo',
    ctaNote: 'Skräddarsydd lösning för ditt företag',
    ctaHref: `${PRODUCTION_URL}/demo`,
    isEnterprise: true,
    features: [
      { name: 'Allt från Pro', included: true },
      { name: 'API-åtkomst', included: true },
      { name: 'White-label möjlighet', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'Custom SLA', included: true },
      { name: 'On-premise option', included: true },
      { name: 'Advanced security', included: true },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 gradient-radial-center opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Enkla, transparenta priser
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            En plan. Allt inkluderat. Inga dolda avgifter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                tier.featured
                  ? 'bg-zinc-900/80 border-2 border-primary shadow-[0_0_40px_hsl(22_100%_55%/0.2)]'
                  : 'bg-zinc-900/50 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Featured badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-bold rounded-full bg-primary text-white shadow-[0_0_20px_hsl(22_100%_55%/0.5)]">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className={`p-2 rounded-lg ${tier.featured ? 'bg-primary/30' : 'bg-white/10'}`}
                    style={tier.featured ? { filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.4))' } : {}}
                  >
                    <tier.icon className={`h-5 w-5 ${tier.featured ? 'text-primary' : 'text-white/70'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                </div>

                <div className="mb-2">
                  {tier.isEnterprise ? (
                    <span className="text-3xl lg:text-4xl font-bold text-white">{tier.price}</span>
                  ) : (
                    <>
                      <span className="text-3xl lg:text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-white/50 ml-1">kr/månad</span>
                    </>
                  )}
                </div>

                {tier.billing && (
                  <p className="text-sm text-primary font-medium">{tier.billing}</p>
                )}

                <p className="text-sm text-white/50 mt-3">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-white/30 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-white/80' : 'text-white/40'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div>
                <a
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.featured
                      ? 'btn-glow'
                      : 'border-2 border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="text-xs text-white/40 text-center mt-3">{tier.ctaNote}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Vanliga frågor om priser
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FAQItem
              question="Kan jag byta plan senare?"
              answer="Ja, du kan uppgradera till Enterprise när som helst. Kontakta oss för skräddarsydda lösningar."
            />
            <FAQItem
              question="Finns det setup-kostnad?"
              answer="Nej, det finns ingen setup-kostnad. Betala bara 499 kr/månad efter din gratis trial."
            />
            <FAQItem
              question="Vad ingår i trial-perioden?"
              answer="Du får full tillgång till alla Pro-funktioner i 30 dagar helt gratis. Ingen kreditkort krävs."
            />
            <FAQItem
              question="Hur många användare kan jag ha?"
              answer="Obegränsat! 499 kr/månad täcker hela ditt team, oavsett storlek."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors">
      <h4 className="text-white font-semibold mb-2">{question}</h4>
      <p className="text-sm text-white/50">{answer}</p>
    </div>
  );
}
