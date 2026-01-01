import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Hur lång är uppsägningstiden?',
    answer: 'Ingen bindningstid. Avsluta när du vill, ingen uppsägning krävs. Du betalar bara för den tid du använder tjänsten.',
  },
  {
    question: 'Kan vi migrera från Bygglet till Frost Bygg?',
    answer: 'Ja! Vi hjälper dig importera projekt, kunder och tiddata från Bygglet. Kontakta oss för personlig migrationshjälp - det är helt gratis.',
  },
  {
    question: 'Fungerar det offline på byggplatsen?',
    answer: 'Ja, full funktionalitet utan internet. Rapportera tid, fotografera och hantera projekt även utan uppkoppling. Data synkas automatiskt när du får internet igen.',
  },
  {
    question: 'Hur många användare ingår?',
    answer: 'Obegränsat antal användare för 499 kr/månad. Ingen extra kostnad per person - bjud in hela teamet utan att tänka på kostnaden.',
  },
  {
    question: 'Vilka integrationer finns?',
    answer: 'Fortnox, Visma eEkonomi och Skatteverket för ROT/RUT. BankID för säker inloggning och Swish för betalningar kommer Q1 2025.',
  },
  {
    question: 'Är ROT-automation verkligen automatisk?',
    answer: 'Ja, AI analyserar ditt projekt och genererar kompletta sammanfattningar enligt Skatteverkets krav. Du granskar resultatet och skickar in med ett klick.',
  },
  {
    question: 'Hur säker är min data?',
    answer: 'Vi använder bank-level encryption (256-bit SSL/TLS), är GDPR-compliant, lagrar all data i Sverige och tar dagliga backups. Din data är säker hos oss.',
  },
  {
    question: 'Kan jag testa innan jag betalar?',
    answer: 'Ja, första månaden är helt gratis. Inget betalkort behövs för att starta - skapa konto och testa alla funktioner direkt.',
  },
  {
    question: 'Vad händer om jag avslutar?',
    answer: 'Du kan exportera all din data när som helst. Efter avslut raderar vi dina uppgifter inom 30 dagar enligt GDPR.',
  },
  {
    question: 'Hur snabbt får jag support?',
    answer: 'Email-svar inom 24 timmar, live chat under kontorstid (9-17 vardagar). För akuta ärenden finns direktkontakt med vårt team.',
  },
];

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="section-container max-w-4xl">
        <div ref={ref} className="text-center mb-12">
          <span className={`badge-frost mb-4 inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            FAQ
          </span>
          <h2 className={`text-3xl font-bold text-foreground md:text-4xl ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Vanliga frågor
          </h2>
          <p className={`mt-4 text-muted-foreground ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            Har du fler frågor? Kontakta oss gärna.
          </p>
        </div>

        <Accordion 
          type="single" 
          collapsible 
          className={`space-y-3 ${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
