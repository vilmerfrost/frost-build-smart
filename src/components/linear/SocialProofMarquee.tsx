import { motion } from 'framer-motion';

const companies = [
  'Bygg AB',
  'Entreprenadgruppen',
  'Svensk Renovering',
  'Nordisk Bygg',
  'Stockholm Snickeri',
  'Malmö Måleri',
  'Göteborg Golv',
  'Uppsala Entreprenad',
  'Kvalitetsbyggarna',
  'Proffsbyggarna',
  'Svenska Hantverkare',
  'Byggmästarna',
];

export function SocialProofMarquee() {
  return (
    <section className="py-16 border-y border-white/[0.06] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-sm text-white/40">
          Används av över <span className="text-white/70 font-medium">500</span> svenska byggbolag
        </p>
      </motion.div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee */}
        <div className="marquee-track">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex-shrink-0 px-8 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05] group"
            >
              <span className="font-medium whitespace-nowrap grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-primary text-white/60">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
