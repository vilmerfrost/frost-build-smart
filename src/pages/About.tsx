import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, MapPin, Activity, Sparkles, Eye, Hammer } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const timeline = [
  { year: '2025', label: 'Grundat', description: 'Frost Solutions startas av Vilmer Frost i Stockholm.' },
  { year: 'Q1 2026', label: 'Första prototypen', description: 'AI fakturascanning och tidrapportering i beta.' },
  { year: 'Q2 2026', label: 'Beta-lansering', description: '12 funktioner, Fortnox/Visma-integration, ÄTA-skydd.' },
  { year: 'Nu', label: 'Öppen beta', description: 'Gratisplan tillgänglig. Bygger vidare med tidiga kunder.' },
];

const values = [
  { icon: Sparkles, title: 'Enkelhet', description: 'Vi bygger verktyg som bara fungerar. Inget krångel, inga onödiga steg. Om det tar mer än 2 klick är det för mycket.' },
  { icon: Eye, title: 'Transparens', description: 'Öppen prissättning, inga dolda avgifter, inga långa avtal. Du ser exakt vad du betalar för.' },
  { icon: Hammer, title: 'Byggbranschens bästa', description: 'Allt vi bygger är för svenska byggföretag. Vi förstår ÄTA, ROT, AB04 och personalliggare — det gör inte generiska verktyg.' },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'GDPR-kompatibel' },
  { icon: MapPin, label: 'Svensk support' },
  { icon: Activity, label: '99.9% uptime' },
];

const About = () => {
  useSEO({
    title: 'Om oss',
    description: 'Frost Solutions grundades av Vilmer Frost i Stockholm. Vi bygger AI-drivna projektverktyg specifikt för svenska byggföretag.',
    path: '/om-oss',
  });

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 mb-6 bg-[#ffdbce] text-[#7f2b00] rounded-full text-sm font-semibold tracking-wide">
                OM OSS
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-6 tracking-tight">
                Byggt av en som <span className="text-[#f26522]">förstår branschen</span>
              </h1>
              <p className="text-xl text-[#594138] max-w-2xl mx-auto leading-relaxed">
                Mindre tid vid skärmen, mer tid att bygga.
              </p>
            </div>
          </motion.div>

          {/* Founder */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-16"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 shrink-0 rounded-2xl ember-gradient flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
                VF
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#1b1c1a]">Vilmer Frost</h2>
                <p className="text-[#f26522] font-bold text-sm">Grundare & CEO</p>
              </div>
            </div>
            <div className="space-y-4 text-[#594138] leading-relaxed">
              <p>
                17-årig entreprenör från Stockholm. Jag såg hur byggföretag slösade timmar på administration som AI kan
                lösa på sekunder. Frost är min lösning.
              </p>
              <p>
                Jag växte upp med nyfikenhet på hur saker faktiskt blir till — särskilt i byggbranschen. Där såg jag samma
                mönster om och om igen: duktiga människor som fastnar i administration, dubbelarbete och verktyg som inte
                är gjorda för platsen, tiden eller underlagen som gäller i Sverige.
              </p>
              <p>
                Därför bygger jag Frost med byggnäringen i fokus: offerter, dokument och vardagsflöden som ska kännas
                naturliga på svenska byggarbetsplatser — från små hantverksfirmor till större projekt.
              </p>
            </div>
            <a href="mailto:vilmer.frost@gmail.com" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#a63b00] hover:text-[#f26522] transition-colors">
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              vilmer.frost@gmail.com
            </a>
          </motion.div>

          {/* Mission */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 border border-white/40 text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-[#1b1c1a] mb-4">Vår mission</h2>
            <p className="text-xl text-[#594138] max-w-xl mx-auto leading-relaxed">
              Göra det enklare att driva byggföretag i Sverige. <strong className="text-[#1b1c1a]">Mindre tid vid skärmen, mer tid att bygga något som håller.</strong>
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] text-center mb-10">Resan hit</h2>
            <div className="relative">
              <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-[#f26522]/20" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.08 }} viewport={{ once: true }} className="relative pl-12">
                    <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full flex items-center justify-center bg-[#ffdbce] text-[#7f2b00] text-xs font-bold">
                      {item.year === 'Nu' ? '→' : item.year.slice(-2)}
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-[#594138] bg-[#f5f3f0] px-3 py-1 rounded-full">{item.year}</span>
                        <h3 className="font-bold text-[#1b1c1a]">{item.label}</h3>
                      </div>
                      <p className="text-sm text-[#594138]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-extrabold text-[#1b1c1a] text-center mb-10">Våra värderingar</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.08 }} viewport={{ once: true }}
                  className="bg-white rounded-2xl p-7 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 flex items-center justify-center mb-5">
                    <v.icon className="h-6 w-6 text-[#f26522]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1b1c1a] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#594138] leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#594138] text-sm font-bold shadow-sm">
                <Icon className="h-4 w-4 text-[#f26522]" strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
