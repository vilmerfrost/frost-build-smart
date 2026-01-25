import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PRODUCTION_URL } from '@/lib/constants';

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
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-gradient-hero">Bygg mer.</span>
            <br />
            <span className="text-gradient-hero">Administrera mindre.</span>
            <br />
            <span className="text-glow-orange">Börja idag.</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/40 max-w-xl mx-auto mb-12">
            Öka lönsamheten utan att anställa fler. Frost fixar administrationen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${PRODUCTION_URL}/signup`}
              className="btn-glow flex items-center gap-2 text-lg px-8 py-4"
            >
              Starta gratis idag
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-white/30 mt-4">
            Ingen kreditkort krävs • Klar på 2 minuter
          </p>
        </motion.div>
      </div>
    </section>
  );
}
