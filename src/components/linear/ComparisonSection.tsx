import { motion } from 'framer-motion';
import { FileSpreadsheet, AlertCircle, Clock, Brain, Sparkles, Zap } from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-center" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Framtid vs förfluten
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Se skillnaden med dina egna ögon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Old way */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bento-card p-8 relative"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
              Gamla sättet
            </div>

            <h3 className="text-2xl font-bold text-white/60 mb-8">
              Manuellt kaos
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <FileSpreadsheet className="h-6 w-6 text-red-400/60" />
                </div>
                <div>
                  <p className="text-white/60 font-medium">Excel-helvetet</p>
                  <p className="text-sm text-white/40">Spridda filer, gamla versioner, ingen överblick</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Clock className="h-6 w-6 text-red-400/60" />
                </div>
                <div>
                  <p className="text-white/60 font-medium">2+ timmar/vecka</p>
                  <p className="text-sm text-white/40">På administration som ingen vill göra</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <AlertCircle className="h-6 w-6 text-red-400/60" />
                </div>
                <div>
                  <p className="text-white/60 font-medium">Missade ROT-avdrag</p>
                  <p className="text-sm text-white/40">Pengar som försvinner på grund av slarv</p>
                </div>
              </div>
            </div>

            {/* Visual: Stack of messy papers */}
            <div className="mt-8 relative h-40 flex items-end justify-center">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white/5 border border-white/10 rounded-lg w-32 h-40"
                  style={{
                    transform: `rotate(${(i - 1.5) * 8}deg) translateX(${(i - 1.5) * 15}px)`,
                    zIndex: i,
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [(i - 1.5) * 8, (i - 1.5) * 8 + 2, (i - 1.5) * 8],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <div className="p-3 space-y-2">
                    <div className="h-2 bg-white/10 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-3/4" />
                    <div className="h-2 bg-white/5 rounded w-1/2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* New way */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bento-card p-8 relative border-primary/20"
            style={{
              boxShadow: '0 0 60px -20px hsl(22 100% 55% / 0.3)',
            }}
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
              Frost-sättet
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">
              Automatisk kontroll
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">AI gör jobbet</p>
                  <p className="text-sm text-white/50">Automatisk tolkning och kategorisering</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">5 minuter/vecka</p>
                  <p className="text-sm text-white/50">Bara en snabb genomgång behövs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">Aldrig missa avdrag</p>
                  <p className="text-sm text-white/50">AI hittar varje krona du har rätt till</p>
                </div>
              </div>
            </div>

            {/* Visual: Clean dashboard */}
            <div className="mt-8 relative h-40">
              <motion.div
                className="absolute inset-0 bg-zinc-900 rounded-xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Dashboard header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                
                {/* Dashboard content */}
                <div className="p-4 grid grid-cols-3 gap-3">
                  <motion.div
                    className="bg-primary/10 rounded-lg p-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="h-6 w-12 bg-primary/30 rounded mb-1" />
                    <div className="h-2 w-8 bg-white/20 rounded" />
                  </motion.div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="h-6 w-10 bg-white/10 rounded mb-1" />
                    <div className="h-2 w-6 bg-white/10 rounded" />
                  </div>
                  <div className="bg-success/10 rounded-lg p-2">
                    <div className="h-6 w-8 bg-success/30 rounded mb-1" />
                    <div className="h-2 w-10 bg-white/10 rounded" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
