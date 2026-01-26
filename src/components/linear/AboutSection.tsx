import { motion } from 'framer-motion';
import { Wrench, Zap, Lock, Handshake, Quote, Mail } from 'lucide-react';

const values = [
  {
    icon: Wrench,
    title: 'Byggnäringen först',
    description: 'Jag bygger för byggare, inte för finansanalytiker. Vår DNA är byggbranschen.',
  },
  {
    icon: Zap,
    title: 'Enkel och snabb',
    description: 'Ingen komplexitet. Ingen onödig UI. Bara det verktyg som verkligen spelar roll.',
  },
  {
    icon: Lock,
    title: 'Säkert och privat',
    description: 'Dina data är dina. Jag säljer dem aldrig. End-to-end enkryptering.',
  },
  {
    icon: Handshake,
    title: 'Transparent & ärlig',
    description: 'Inga dolda kostnader. Ingen bullshit. Bara ärlighet och transparans.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-[44px] font-bold text-foreground leading-tight mb-4">
                Varför jag byggde Frost
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                En lösning för det jag älskar
              </p>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 mb-10"
            >
              <p className="text-muted-foreground leading-[1.8] tracking-wide">
                Frost Bygg föddes från en enkel observation: byggbranschen kämpar med samma 
                administrativa problem som alla andra, men ingen hade byggt en lösning 
                <span className="text-foreground font-medium"> för</span> bygget.
              </p>
              <p className="text-muted-foreground leading-[1.8] tracking-wide">
                Jag tröttnade på att se duktiga hantverkare slösa timmar på Excel och 
                pappersarbete. Så jag byggde Frost – ett verktyg som förstår bygget och 
                automatiserar det tråkiga jobbet.
              </p>
              <p className="text-muted-foreground leading-[1.8] tracking-wide">
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
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">Vem ligger bakom Frost?</h3>
              <p className="text-lg text-muted-foreground mb-8 font-medium">
                Solo-grundare med passion för byggbranschen
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(22 100% 55%), hsl(22 80% 60%))',
                      boxShadow: '0 4px 15px hsl(22 100% 55% / 0.3)',
                    }}
                  >
                    <span className="text-white font-bold text-3xl">VF</span>
                  </div>
                  <h4 className="text-foreground font-bold text-lg mb-1">Vilmer Frost</h4>
                  <p className="text-sm font-semibold mb-2 text-primary">
                    Grundare & CEO
                  </p>
                  <p className="text-sm text-muted-foreground max-w-[220px] leading-relaxed mb-4">
                    16-årig entreprenör från Stockholm. Bygger Frost för att göra byggbranschens administration enklare.
                  </p>
                  {/* Direct contact */}
                  <a 
                    href="mailto:vilmer.frost@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Kontakta mig direkt
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Vad jag bryr mig om</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start"
                  >
                    <div 
                      className="p-2 rounded-lg inline-block mb-3"
                      style={{ 
                        filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.4))',
                      }}
                    >
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-foreground font-bold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{value.description}</p>
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
            className="lg:sticky lg:top-32 lg:pl-16"
          >
            {/* Mission statement card */}
            <div 
              className="relative rounded-2xl border border-primary/20 p-8 lg:p-10 min-h-[400px] flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 95, 21, 0.1), rgba(255, 95, 21, 0.05))',
              }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-primary/20 border border-primary/30 shadow-[0_0_30px_hsl(22_100%_55%/0.2)]">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              <blockquote className="text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8 mt-4 flex-1">
                "Jag tror att den bästa tekniken är den du inte märker. 
                Frost ska bara <span className="text-primary font-semibold">fungera</span> – 
                så du kan fokusera på att bygga något fantastiskt."
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(22 100% 55%), hsl(22 80% 60%))',
                      filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.3))',
                    }}
                  >
                    <span className="text-white font-bold">VF</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Vilmer Frost</p>
                    <p className="text-sm text-muted-foreground">Grundare, Frost Bygg</p>
                  </div>
                </div>
                <a 
                  href="mailto:vilmer.frost@gmail.com"
                  className="hidden sm:flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>vilmer.frost@gmail.com</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">1</p>
                  <p className="text-xs text-muted-foreground mt-1">Grundare</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-foreground">2026</p>
                  <p className="text-xs text-muted-foreground mt-1">Grundat</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-foreground">🇸🇪</p>
                  <p className="text-xs text-muted-foreground mt-1">Stockholm</p>
                </div>
              </div>
            </div>

            {/* Small trust badges */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <span className="px-3 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground">
                🔒 GDPR-kompatibel
              </span>
              <span className="px-3 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground">
                🇸🇪 Svensk support
              </span>
              <span className="px-3 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground">
                ⚡ 99.9% uptime
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
