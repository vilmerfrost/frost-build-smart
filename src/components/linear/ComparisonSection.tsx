import { motion } from 'framer-motion';
import { FileSpreadsheet, Clock, Ban, Brain, Zap, CheckCircle, XCircle, AlertCircle, Rocket, Frown, Smile } from 'lucide-react';

const comparisons = [
  {
    old: { icon: FileSpreadsheet, text: 'Excel-helvetet', subtext: 'Manuellt kaos' },
    new: { icon: Brain, text: 'AI gör jobbet', subtext: 'Automatisk kontroll' },
  },
  {
    old: { icon: Clock, text: '2+ timmar per vecka', subtext: 'På administration' },
    new: { icon: Zap, text: '5 minuter per vecka', subtext: 'Med Frost' },
  },
  {
    old: { icon: Ban, text: 'Missar ROT-avdrag', subtext: 'Förlorade pengar' },
    new: { icon: CheckCircle, text: 'Hittar varje krona', subtext: 'Som du är berättigad till' },
  },
  {
    old: { icon: AlertCircle, text: 'Ingen översikt', subtext: 'Problem uppstår sent' },
    new: { icon: Rocket, text: 'Automatiska alerts', subtext: 'Innan det blir problem' },
  },
];

export function ComparisonSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, hsl(22 100% 55% / 0.05), transparent)',
        }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Före och efter <span className="text-primary">Frost</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Se skillnaden med dina egna ögon
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Old Way Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-red-500/20">
                <Frown className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Gamla sättet</h3>
                <p className="text-sm text-red-400/70">Tidskrävande och felbenäget</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={`old-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10"
                >
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <item.old.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{item.old.text}</p>
                    <p className="text-sm text-white/40">{item.old.subtext}</p>
                  </div>
                  <XCircle className="h-5 w-5 text-red-400/60" />
                </motion.div>
              ))}
            </div>

            {/* Visual chaos element */}
            <div className="absolute -bottom-4 -right-4 opacity-20">
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-20 bg-white/10 rounded-lg border border-white/20"
                    style={{
                      transform: `rotate(${(i - 1) * 15}deg) translateX(${i * 10}px)`,
                    }}
                    animate={{
                      rotate: [(i - 1) * 15, (i - 1) * 15 + 5, (i - 1) * 15],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* New Way Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-success/5 border border-success/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-success/20">
                <Smile className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Frost-sättet</h3>
                <p className="text-sm text-success/70">Snabbt och automatiskt</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={`new-${index}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-success/5 border border-success/10"
                >
                  <div className="p-2 rounded-lg bg-success/20">
                    <item.new.icon className="h-5 w-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{item.new.text}</p>
                    <p className="text-sm text-white/40">{item.new.subtext}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-success/60" />
                </motion.div>
              ))}
            </div>

            {/* Visual order element */}
            <div className="absolute -bottom-4 -right-4 opacity-30">
              <motion.div
                className="w-24 h-16 bg-success/10 rounded-lg border border-success/20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="space-y-1">
                  <div className="h-1.5 w-16 bg-success/40 rounded" />
                  <div className="h-1.5 w-12 bg-success/30 rounded" />
                  <div className="h-1.5 w-14 bg-success/20 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
