import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sparar 10+ timmar per vecka på tidrapportering och ÄTA.",
    author: "Johan Bergström",
    role: "VD",
    company: "Bergströms Byggnads AB",
    initials: "JB",
  },
  {
    quote: "Aldrig missa ett ROT-avdrag igen. AI hittar allt vi glömt.",
    author: "Maria Lindqvist",
    role: "Ekonomichef",
    company: "Sundberg Entreprenad",
    initials: "ML",
  },
  {
    quote: "Vi kunde skala från 5 till 15 anställda utan att lägga tid på admin.",
    author: "Erik Svensson",
    role: "Grundare",
    company: "Svensson Konstruktion",
    initials: "ES",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 border-y border-white/[0.06]">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/40 mb-12"
        >
          Över <span className="text-white/70 font-medium">500</span> svenska byggföretag automatiserar sin vardag med Frost
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              {/* Quote text */}
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  <p className="text-xs text-white/40">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
