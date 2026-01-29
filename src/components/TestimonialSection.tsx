import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Erik Sundström',
    company: 'Sundström Bygg AB',
    role: 'VD',
    content: 'Frost Bygg har sparat oss 5+ timmar per vecka på administration. ROT-automatiseringen är helt revolutionerande!',
    rating: 5,
    initials: 'ES',
    bgColor: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Karin Blomqvist',
    company: 'Modern Konstruktion',
    role: 'Projektledare',
    content: 'Bästa investeringen vi gjort. Tidrapportering tar nu 30 sekunder istället för 30 minuter.',
    rating: 5,
    initials: 'KB',
    bgColor: 'bg-green-500'
  },
  {
    id: '3',
    name: 'Johan Larsson',
    company: 'Larsson & Co Byggnads',
    role: 'Ägare',
    content: 'Slut på manuella ROT-ansökningar. Frost Bygg hittar pengar vi inte visste om. Vi sparar 10k+ per månad.',
    rating: 5,
    initials: 'JL',
    bgColor: 'bg-purple-500'
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Det säger våra kunder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Över 40 byggföretag sparar tid och pengar med Frost Bygg varje dag
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 line-clamp-4">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-semibold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ⭐️ Genomsnittlig betyg från 42 kunder
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
