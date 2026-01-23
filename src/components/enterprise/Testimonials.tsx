import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, MapPin, Users, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Vi sparade 15 timmar första månaden bara på ROT-automation. Frost Bygg är exakt vad svenska byggföretag behöver.',
    name: 'Erik Andersson',
    title: 'VD',
    company: 'Anderssons Bygg AB',
    location: 'Stockholm',
    size: '5 anställda',
    avatar: 'EA',
  },
  {
    quote: 'Vi bytte från Bygglet och sparade över 25,000 kr första året. AI-funktionerna är fantastiska.',
    name: 'Maria Lindström',
    title: 'Ekonomichef',
    company: 'Nordisk Entreprenad',
    location: 'Göteborg',
    size: '12 anställda',
    avatar: 'ML',
  },
  {
    quote: 'Äntligen ett system som fungerar offline på byggplatsen. Mina snickare älskar det.',
    name: 'Jonas Bergman',
    title: 'Projektledare',
    company: 'Moderna Hus Group',
    location: 'Malmö',
    size: '8 anställda',
    avatar: 'JB',
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        <div ref={ref} className="text-center mb-14">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Kundröster
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Vad våra <span className="text-gradient">kunder</span> säger
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index, isVisible }: { testimonial: typeof testimonials[0]; index: number; isVisible: boolean }) {
  return (
    <div
      className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
        isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'
      }`}
    >
      <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
      
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent text-accent transition-all group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-foreground mb-8 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {testimonial.location}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {testimonial.size}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
