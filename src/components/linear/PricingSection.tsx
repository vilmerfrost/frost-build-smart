import { motion } from 'framer-motion';
import { Check, X, Rocket, Building, Shield, ArrowRight } from 'lucide-react';

const PRODUCTION_URL = 'https://frostsolutions.se';

const tiers = [
  {
    name: 'Starter',
    price: '199',
    billing: 'Per användare, minst 2 användare',
    description: 'För små byggföretag (1-5 anställda)',
    icon: Building,
    featured: false,
    cta: 'Starta gratis',
    ctaNote: 'Ingen kreditkort krävs',
    ctaHref: `${PRODUCTION_URL}/signup`,
    features: [
      { name: 'Tidrapportering', included: true },
      { name: 'AI-fakturatolkning', included: true },
      { name: 'Enkla rapporter', included: true },
      { name: 'Upp till 1 projekt', included: true },
      { name: 'Advanced ÄTA-hantering', included: false },
      { name: 'API-åtkomst', included: false },
      { name: 'Priority support', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '499',
    billing: 'Per användare, minst 2 användare',
    description: 'Vår mest populära plan för växande företag (5-25 anställda)',
    icon: Rocket,
    featured: true,
    badge: 'POPULÄR',
    cta: 'Starta gratis',
    ctaNote: '14 dagar gratis trial',
    ctaHref: `${PRODUCTION_URL}/signup`,
    features: [
      { name: 'Allt från Starter', included: true },
      { name: 'Unlimited projekt', included: true },
      { name: 'Advanced ÄTA-hantering', included: true },
      { name: 'Custom integrationer', included: true },
      { name: 'Team collaboration', included: true },
      { name: 'Priority support', included: true },
      { name: 'API-åtkomst', included: false },
      { name: 'White-label option', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Kontakta oss',
    billing: null,
    description: 'För större organisationer (25+ anställda)',
    icon: Shield,
    featured: false,
    cta: 'Boka demo',
    ctaNote: 'Meddela oss dina krav',
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
            Välj den plan som passar din verksamhet. Ingen hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                tier.featured
                  ? 'bg-zinc-900/80 border-2 border-primary scale-[1.02] shadow-[0_0_40px_hsl(22_100%_55%/0.2)]'
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
                  <p className="text-xs text-white/40">* {tier.billing}</p>
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
                      : tier.isEnterprise
                      ? 'border-2 border-primary text-primary hover:bg-primary/10'
                      : 'bg-white/10 text-white hover:bg-white/20'
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
              answer="Ja, du kan uppgradera eller nedgradera din plan när som helst. Ändringar träder i kraft direkt."
            />
            <FAQItem
              question="Finns det setup-kostnad?"
              answer="Nej, det finns ingen setup-kostnad. Betala bara för din valda plan."
            />
            <FAQItem
              question="Vad ingår i trial-perioden?"
              answer="Du får full tillgång till alla Pro-funktioner i 14 dagar helt gratis."
            />
            <FAQItem
              question="Kan ni anpassa priser för enterprise?"
              answer="Absolut! Kontakta oss för skräddarsydda lösningar och volymrabatter."
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
