import { motion } from 'framer-motion';
import { Check, X, Rocket, Shield, ChevronDown, Calendar } from 'lucide-react';
import { useState } from 'react';
import { PRODUCTION_URL } from '@/lib/constants';

const tiers = [
  {
    name: 'Pro',
    price: '499',
    billing: 'Obegränsat antal användare',
    description: 'Allt du behöver för att driva ditt byggföretag effektivt',
    icon: Rocket,
    featured: true,
    badge: 'POPULÄR',
    cta: 'Starta gratis',
    ctaNote: '30 dagar gratis trial',
    ctaHref: `${PRODUCTION_URL}/signup`,
    features: [
      { name: 'Obegränsat antal användare', included: true },
      { name: 'Unlimited projekt', included: true },
      { name: 'Tidrapportering', included: true },
      { name: 'AI-fakturatolkning', included: true },
      { name: 'Advanced ÄTA-hantering', included: true },
      { name: 'Custom integrationer', included: true },
      { name: 'Team collaboration', included: true },
      { name: 'Priority support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Kontakta oss',
    billing: null,
    description: 'För större organisationer med speciella krav',
    icon: Shield,
    featured: false,
    isEnterprise: true,
    cta: 'Boka demo',
    ctaNote: 'Skräddarsydd lösning',
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
    question: 'Hur många användare kan jag ha?',
    answer: 'Obegränsat! Med Pro-planen för 499 kr/månad får du obegränsat antal användare utan extra kostnad.',
  },
  {
    question: 'Finns det någon setup-kostnad?',
    answer: 'Nej. Noll setup-kostnader. Du betalar bara för det du använder.',
  },
  {
    question: 'Vad ingår i den fria trial-perioden?',
    answer: 'Full tillgång till alla Pro-features i 30 dagar. Ingen kreditkort krävs.',
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            Enkla priser. Ingen överraskningar.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Välj den plan som passar din verksamhet. Transparent prissättning, inga dolda avgifter.
          </p>
        </motion.div>

        {/* Pricing Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 mb-20 lg:items-stretch max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 flex flex-col justify-between min-h-[580px] transition-all duration-300 ${
                tier.featured
                  ? 'bg-card border-2 border-primary lg:scale-105 shadow-[0_0_40px_hsl(22_100%_55%/0.3)] z-10 order-first lg:order-none'
                  : 'bg-card border border-border hover:border-primary/30 hover:shadow-[0_0_30px_hsl(22_100%_55%/0.15)] hover:-translate-y-1'
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
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                
                <div className="mb-1">
                  {tier.isEnterprise ? (
                    <span className="text-4xl font-bold text-primary">
                      {tier.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-lg text-muted-foreground ml-1">kr/månad</span>
                    </>
                  )}
                </div>

                {tier.billing && (
                  <p className="text-xs text-muted-foreground font-medium mb-6 leading-relaxed">{tier.billing}</p>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-foreground/80' : 'text-muted-foreground'}`}>
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
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
                  {tier.isEnterprise && <Calendar className="h-4 w-4" />}
                  {tier.cta}
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3 font-medium">{tier.ctaNote}</p>
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
          <h3 className="text-4xl font-bold text-foreground text-center mb-12">
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
      className="rounded-xl bg-card border border-border overflow-hidden transition-colors hover:border-primary/30"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer group"
      >
        <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors">
          {question}
        </h4>
        <ChevronDown 
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
