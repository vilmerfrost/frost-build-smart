import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PRODUCTION_URL } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Warm background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fbf9f6] to-[#fdf6f2]" />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[60%] rounded-full bg-[#fea27c]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[50%] rounded-full bg-[#f26522]/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1b1c1a] leading-tight mb-6">
            Bygg mer. Administrera mindre.
          </h2>

          <p className="text-lg md:text-xl text-[#594138] mb-12 max-w-2xl mx-auto leading-relaxed">
            Gå med de byggföretag som redan sparar 10+ timmar per vecka med Frost. Starta gratis idag.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${PRODUCTION_URL}/signup`}
              className="ember-gradient text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#f26522]/20 hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
            >
              Starta gratis
              <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
            </a>
            <a
              href={`${PRODUCTION_URL}/demo`}
              className="bg-[#eae8e5] text-[#a63b00] px-12 py-4 rounded-full text-lg font-bold hover:bg-[#e4e2df] transition-colors"
            >
              Boka demo
            </a>
          </div>

          <p className="mt-8 text-sm text-[#594138]/50 font-medium">
            Inget kreditkort krävs · 14 dagars gratis trial · Avbryt när som helst
          </p>
        </motion.div>
      </div>
    </section>
  );
}
