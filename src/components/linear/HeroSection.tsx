import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const PRODUCTION_URL = 'https://frostsolutions.se';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-radial-top" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated glow orb */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(22 100% 55% / 0.12) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6"
            >
              <span className="text-gradient-hero">Driv byggprojektet</span>
              <br />
              <span className="text-glow-orange">på autopilot.</span>
            </motion.h1>

            {/* Subheadline - Benefit focused */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              AI gör den administrativa delen.
              <br className="hidden sm:block" />
              Du fokuserar på att bygga.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href={`${PRODUCTION_URL}/signup`}
                className="btn-glow flex items-center gap-2 text-lg"
              >
                Starta gratis
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href={`${PRODUCTION_URL}/demo`}
                className="text-white/40 hover:text-white transition-colors flex items-center gap-1"
              >
                Boka en demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Sub-CTA Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs text-white/30 mt-4"
            >
              Ingen kreditkort krävs • Klar på 2 minuter
            </motion.p>
          </div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Large warm orange glow behind phone */}
            <div 
              className="absolute -inset-8 sm:-inset-16 blur-3xl opacity-25"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(25 100% 55%) 0%, hsl(22 100% 50% / 0.6) 30%, transparent 70%)',
                boxShadow: '0 0 120px 60px hsl(22 100% 55% / 0.15)',
              }}
            />
            
            {/* Phone frame */}
            <motion.div
              className="relative mx-auto w-[260px] sm:w-[300px]"
              style={{
                perspective: '1000px',
              }}
              animate={{
                rotateY: [-3, 3, -3],
                rotateX: [1, -1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="relative bg-zinc-900 rounded-[3rem] p-3 border border-white/10 shadow-2xl shadow-primary/10">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                
                {/* Screen */}
                <div className="relative bg-zinc-950 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  {/* App interface mockup */}
                  <div className="absolute inset-0 p-4 pt-10">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-4 text-xs text-white/60">
                      <span>09:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                        <div className="w-6 h-3 bg-primary rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App header */}
                    <div className="text-center mb-6">
                      <div className="text-lg font-bold text-white">Frost Bygg</div>
                      <div className="text-xs text-white/50">Projekt: Villa Sundbyberg</div>
                    </div>
                    
                    {/* Cards */}
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-xs text-white/80">Tidrapport idag</span>
                        </div>
                        <div className="text-2xl font-bold text-white">7h 45m</div>
                      </div>
                      
                      <div className="bg-primary/20 rounded-xl p-3 border border-primary/30">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-xs text-primary">AI-scan aktiv</span>
                        </div>
                        <div className="text-sm text-white/80">Tolkar faktura...</div>
                      </div>
                      
                      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <div className="text-xs text-white/50 mb-1">ÄTA-ärenden</div>
                        <div className="text-xl font-bold text-white">3 väntande</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge next to phone */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-4 sm:-right-8 top-1/3 px-3 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-primary/40 shadow-[0_0_20px_hsl(22_100%_55%/0.3)]"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs text-white/90 whitespace-nowrap">🔥 Ny: AI-fakturaläsning</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
