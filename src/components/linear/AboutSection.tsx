import { motion } from 'framer-motion';
import { Wrench, Zap, Lock, Handshake, Quote } from 'lucide-react';

const values = [
  {
    icon: Wrench,
    title: 'Byggnäringen först',
    description: 'Jag bygger för byggare, inte för finansanalytiker',
  },
  {
    icon: Zap,
    title: 'Enkel och snabb',
    description: 'Ingen komplexitet. Inga onödiga features. Bara vad du behöver.',
  },
  {
    icon: Lock,
    title: 'Säkert och privat',
    description: 'Dina data är dina. Jag säljer dem aldrig.',
  },
  {
    icon: Handshake,
    title: 'Transparent & ärlig',
    description: 'Inga dolda kostnader. Ingen bullshit. Bara ärlighet.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 gradient-radial-top opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Varför jag byggde Frost
              </h2>
              <p className="text-xl text-white/40">
                En lösning för det jag älskar
              </p>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 mb-16"
            >
              <p className="text-white/60 leading-relaxed">
                Frost Bygg föddes från en enkel observation: byggbranschen kämpar med samma 
                administrativa problem som alla andra, men ingen hade byggt en lösning 
                <span className="text-white font-medium"> för</span> bygget.
              </p>
              <p className="text-white/60 leading-relaxed">
                Jag tröttnade på att se duktiga hantverkare slösa timmar på Excel och 
                pappersarbete. Så jag byggde Frost – ett verktyg som förstår bygget och 
                automatiserar det tråkiga jobbet.
              </p>
              <p className="text-white/60 leading-relaxed">
                Nu vill jag hjälpa <span className="text-primary font-semibold">svenska byggföretag</span> att 
                fokusera på det som spelar roll: att bygga.
              </p>
            </motion.div>

            {/* Founder Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Vem ligger bakom Frost?</h3>
              <p className="text-lg text-white/40 mb-8">
                Solo-grundare med passion för byggbranschen
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
                    style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.3))' }}
                  >
                    <span className="text-primary font-bold text-xl">VF</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Vilmer Frost</h4>
                    <p className="text-sm text-primary mb-2">Grundare & Utvecklare</p>
                    <p className="text-sm text-white/40">
                      16-årig entreprenör från Stockholm. Bygger Frost för att göra byggbranschens administration enklare.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Vad jag bryr mig om</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div 
                      className="p-2 rounded-lg bg-primary/20 inline-block mb-3"
                      style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.3))' }}
                    >
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-white font-bold mb-1">{value.title}</h4>
                    <p className="text-sm text-white/40">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            {/* Mission statement card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 p-8 lg:p-10">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-primary/20 border border-primary/30 shadow-[0_0_30px_hsl(22_100%_55%/0.2)]">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              <blockquote className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8 mt-4">
                "Jag tror att den bästa tekniken är den du inte märker. 
                Frost ska bara <span className="text-primary font-semibold">fungera</span> – 
                så du kan fokusera på att bygga något fantastiskt."
              </blockquote>

              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                  style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.3))' }}
                >
                  <span className="text-primary font-bold">VF</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Vilmer Frost</p>
                  <p className="text-sm text-white/40">Grundare, Frost Bygg</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">1</p>
                  <p className="text-xs text-white/40 mt-1">Grundare</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-white">2026</p>
                  <p className="text-xs text-white/40 mt-1">Grundat</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-white">🇸🇪</p>
                  <p className="text-xs text-white/40 mt-1">Stockholm</p>
                </div>
              </div>
            </div>

            {/* Small trust badges */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <span className="px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 text-xs text-white/50">
                🔒 GDPR-kompatibel
              </span>
              <span className="px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 text-xs text-white/50">
                🇸🇪 Svensk support
              </span>
              <span className="px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 text-xs text-white/50">
                ⚡ 99.9% uptime
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
