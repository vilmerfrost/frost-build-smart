import { motion } from 'framer-motion';
import { UserPlus, Users, Plug, Rocket, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Skapa konto',
    time: '30 sekunder',
    description: 'Registrera dig med e-post eller BankID. Ingen kreditkort krävs.',
  },
  {
    icon: Users,
    title: 'Bjud in teamet',
    time: '1 minut',
    description: 'Lägg till dina kollegor med e-post. Obegränsat antal användare.',
  },
  {
    icon: Plug,
    title: 'Koppla system',
    time: '3 minuter',
    description: 'Anslut Fortnox eller Visma för automatisk synkronisering.',
  },
  {
    icon: Rocket,
    title: 'Börja använda',
    time: 'Direkt',
    description: 'Skapa ditt första projekt och börja spara tid omedelbart.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Clock className="h-4 w-4" />
            Kom igång snabbt
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Klar på <span className="text-primary">5 minuter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ingen komplicerad setup. Ingen utbildning krävs. Börja spara tid direkt.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center relative z-10">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Time badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium mb-3">
                    <CheckCircle className="h-3 w-3" />
                    {step.time}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Total setup-tid:</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Under 5 minuter</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
