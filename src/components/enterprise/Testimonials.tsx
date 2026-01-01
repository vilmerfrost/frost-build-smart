import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, MapPin, Users } from 'lucide-react';

const testimonials = [
  {
    quote: 'Vi sparade 15 timmar första månaden bara på ROT-automation. Frost Bygg är exakt vad svenska byggföretag behöver - modern, prisvärd och otroligt enkel att använda.',
    name: 'Erik Andersson',
    title: 'VD',
    company: 'Anderssons Bygg AB',
    location: 'Stockholm',
    size: '5 anställda',
    avatar: 'EA',
  },
  {
    quote: 'Vi bytte från Bygglet och sparade över 25,000 kr första året. AI-funktionerna är fantastiska - faktura-läsningen ensam sparar oss timmar varje vecka.',
    name: 'Maria Lindström',
    title: 'Ekonomichef',
    company: 'Nordisk Entreprenad',
    location: 'Göteborg',
    size: '12 anställda',
    avatar: 'ML',
  },
  {
    quote: 'Äntligen ett system som fungerar offline på byggplatsen. Mina snickare älskar det. Inga fler problem med dålig uppkoppling.',
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
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div ref={ref} className="text-center mb-10">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Kundrecensioner
          </span>
          <h2 className={`text-2xl font-bold text-foreground md:text-3xl ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Vad våra kunder säger
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`p-6 rounded-lg border border-border bg-card ${
        isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'
      }`}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground text-sm mb-5 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
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
