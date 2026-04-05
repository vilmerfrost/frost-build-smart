import { motion } from 'framer-motion';
import { UserPlus, Users, Plug, Rocket } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Skapa konto',
    time: '30 sek',
    description: 'Registrera dig med e-post eller BankID. Ingen kreditkort krävs.',
  },
  {
    step: 2,
    icon: Users,
    title: 'Bjud in teamet',
    time: '1 min',
    description: 'Lägg till kollegor med e-post. Obegränsat antal användare.',
  },
  {
    step: 3,
    icon: Plug,
    title: 'Koppla system',
    time: '3 min',
    description: 'Anslut Fortnox eller Visma för automatisk synkronisering.',
  },
  {
    step: 4,
    icon: Rocket,
    title: 'Börja använda',
    time: 'Direkt',
    description: 'Skapa ditt första projekt och börja spara tid direkt.',
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-[#ffdbce] text-[#7f2b00] rounded-full text-sm font-semibold tracking-wide">
            SÅ FUNKAR DET
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1b1c1a] mb-4">
            Igång på under 5 minuter
          </h2>
          <p className="text-lg text-[#594138] max-w-lg mx-auto">
            En rak väg från konto till vardag — utan krångel.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-[3.5rem] hidden lg:block h-px bg-[#e1bfb3]/30"
            aria-hidden
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.step}
                  className="relative list-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ember-gradient text-sm font-bold text-white shadow-md">
                        {item.step}
                      </div>
                      <Icon className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-[#1b1c1a]">
                      {item.title}
                    </h3>

                    <span className="mb-3 inline-flex w-fit rounded-full bg-[#ffdbce] px-3 py-1 text-xs font-bold text-[#7f2b00]">
                      {item.time}
                    </span>

                    <p className="text-sm leading-relaxed text-[#594138]">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
