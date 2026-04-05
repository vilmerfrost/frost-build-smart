import { motion } from 'framer-motion';
import { Quote, Mail, ShieldCheck, MapPin, Activity } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, label: 'GDPR-kompatibel' },
  { icon: MapPin, label: 'Svensk support' },
  { icon: Activity, label: '99.9% uptime' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-[#ffdbce] text-[#7f2b00] rounded-full text-sm font-semibold tracking-wide">
            BAKOM FROST
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1b1c1a] leading-[1.1] max-w-3xl">
            Byggt av en som förstår branschen
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: founder info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Founder card */}
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 shrink-0 rounded-2xl ember-gradient flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
                    VF
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1b1c1a]">Vilmer Frost</h3>
                    <p className="text-[#f26522] font-bold text-sm">Grundare & CEO</p>
                  </div>
                </div>
                <p className="text-[#594138] leading-relaxed mb-6">
                  17-årig entreprenör från Stockholm. Jag såg hur byggföretag slösade timmar på administration som AI kan
                  lösa på sekunder. Frost är min lösning.
                </p>
                <a
                  href="mailto:vilmer.frost@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#a63b00] hover:text-[#f26522] transition-colors"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                  vilmer.frost@gmail.com
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-3">
                {trustItems.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#594138] text-xs font-bold tracking-tight shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-[#f26522]" strokeWidth={1.75} />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: story + quote */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-[#594138] leading-[1.8]">
                Jag växte upp med nyfikenhet på hur saker faktiskt blir till — särskilt i byggbranschen. Där såg jag samma
                mönster om och om igen: duktiga människor som fastnar i administration, dubbelarbete och verktyg som inte
                är gjorda för platsen, tiden eller underlagen som gäller i Sverige.
              </p>
              <p className="text-lg text-[#594138] leading-[1.8]">
                Därför bygger jag Frost med byggnäringen i fokus: offerter, dokument och vardagsflöden som ska kännas
                naturliga på svenska byggarbetsplatser — från små hantverksfirmor till större projekt.
              </p>
              <p className="text-lg text-[#594138] leading-[1.8]">
                Målet är enkelt: <span className="font-bold text-[#1b1c1a]">mindre tid vid skärmen, mer tid att bygga
                något som håller.</span>
              </p>
            </motion.div>

            {/* Frosted glass quote */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-white/40 floating-card"
            >
              <Quote className="h-8 w-8 text-[#f26522] mb-6" strokeWidth={1.75} />
              <blockquote className="text-xl md:text-2xl font-bold text-[#1b1c1a] leading-relaxed mb-6">
                &ldquo;Jag tror att den bästa tekniken är den du inte märker. Frost ska bara fungera — så du kan fokusera på att
                bygga något fantastiskt.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full ember-gradient flex items-center justify-center text-white text-xs font-bold">
                  VF
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1b1c1a]">Vilmer Frost</p>
                  <p className="text-xs text-[#594138]">Grundare, Frost Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
