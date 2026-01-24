import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PRODUCTION_URL = 'https://frostsolutions.se';

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, hsl(22 100% 55% / 0.15), transparent)',
        }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8">
            <span className="text-gradient-hero">Bygg bättre</span>
            <br />
            <span className="text-glow-orange">idag.</span>
          </h2>

          <p className="text-xl text-white/50 max-w-xl mx-auto mb-12">
            Gå med tusentals svenska byggföretag som redan automatiserar sin vardag.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${PRODUCTION_URL}/signup`}
              className="btn-glow flex items-center gap-2 text-lg px-8 py-4"
            >
              Starta gratis idag
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-white/40">
              Ingen kreditkort krävs • Klar på 2 minuter
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
