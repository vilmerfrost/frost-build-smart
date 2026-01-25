import { motion } from 'framer-motion';
import { Check, X, Rocket, Shield, Building2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const PRODUCTION_URL = 'https://frostsolutions.se';

const tiers = [
  {
    name: 'Starter',
    price: '199',
    billing: '* Per användare, minst 2 användare',
    description: 'För små byggföretag (1-5 anställda)',
    icon: Building2,
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
    billing: '* Per användare, minst 2 användare',
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
    isEnterprise: true,
    cta: 'Boka demo',
    ctaNote: 'Meddela oss dina krav',
    ctaHref: `${PRODUCTION_URL}/demo`,
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

const faqs = [
  {
    question: 'Kan jag byta plan senare?',
    answer: 'Ja, du kan byta plan när som helst. Vi tar inte betalt för förändring.',
  },
  {
    question: 'Finns det någon setup-kostnad?',
    answer: 'Nej. Noll setup-kostnader. Du betalar bara för det du använder.',
  },
  {
    question: 'Vad ingår i den fria trial-perioden?',
    answer: 'Full tillgång till alla Pro-features i 14 dagar. Ingen kreditkort krävs.',
  },
  {
    question: 'Kan ni anpassa priser för enterprise?',
    answer: 'Ja, absolut. Kontakta oss för custom prissättning baserat på dina specifika behov.',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-[700px] mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Enkla priser. Ingen överraskningar.
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            Välj den plan som passar din verksamhet. Transparent prissättning, inga dolda avgifter.
          </p>
        </motion.div>

        {/* Pricing Grid - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 flex flex-col justify-between min-h-[600px] transition-all duration-300 cursor-pointer ${
                tier.featured
                  ? 'bg-zinc-800 border-2 border-primary scale-105 shadow-[0_0_40px_hsl(22_100%_55%/0.3)] z-10'
                  : 'bg-zinc-900 border border-white/10 hover:border-white/15 hover:shadow-[0_0_30px_hsl(22_100%_55%/0.15)] hover:-translate-y-2'
              }`}
            >
              {/* Featured badge */}
              {tier.badge && (
                <div 
                  className="absolute -top-3.5 right-8 px-3 py-1.5 text-[11px] font-bold rounded-full text-white z-10"
                  style={{
                    background: 'linear-gradient(135deg, hsl(22 100% 55%) 0%, hsl(22 80% 60%) 100%)',
                    boxShadow: '0 4px 15px hsl(22 100% 55% / 0.4)',
                    letterSpacing: '0.5px',
                  }}
                >
                  {tier.badge}
                </div>
              )}

              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                
                <div className="mb-1">
                  {tier.isEnterprise ? (
                    <span 
                      className="text-4xl font-bold"
                      style={{ color: 'hsl(22 80% 60%)' }}
                    >
                      {tier.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-lg text-white/40 ml-1">kr/månad</span>
                    </>
                  )}
                </div>

                {tier.billing && (
                  <p className="text-xs text-white/50 font-medium mb-6 leading-relaxed">{tier.billing}</p>
                )}

                <p className="text-sm text-white/40 leading-relaxed mb-8">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-white/30 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white/70' : 'text-white/40'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div>
                <a
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.isEnterprise
                      ? 'border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(22_100%_55%/0.4)] hover:scale-[1.02]'
                      : 'text-white hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                  style={!tier.isEnterprise ? {
                    background: 'hsl(22 100% 55%)',
                    boxShadow: '0 4px 12px hsl(22 100% 55% / 0.3)',
                  } : undefined}
                  onMouseEnter={(e) => {
                    if (!tier.isEnterprise) {
                      e.currentTarget.style.background = 'hsl(22 100% 60%)';
                      e.currentTarget.style.boxShadow = '0 0 25px hsl(22 100% 55% / 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!tier.isEnterprise) {
                      e.currentTarget.style.background = 'hsl(22 100% 55%)';
                      e.currentTarget.style.boxShadow = '0 4px 12px hsl(22 100% 55% / 0.3)';
                    }
                  }}
                >
                  {tier.cta}
                </a>
                <p className="text-xs text-white/40 text-center mt-3 font-medium">{tier.ctaNote}</p>
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
          className="max-w-[800px] mx-auto py-20"
        >
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Vanliga frågor
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="rounded-xl bg-zinc-900 border border-white/10 overflow-hidden transition-colors hover:border-white/20"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer group"
      >
        <h4 className="text-white font-semibold group-hover:text-primary transition-colors">
          {question}
        </h4>
        <ChevronDown 
          className={`h-5 w-5 text-white/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-4 text-sm text-white/50 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
