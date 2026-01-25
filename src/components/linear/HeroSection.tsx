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
              Spara 10+ timmar per vecka på administration.
              <br className="hidden sm:block" />
              <span className="text-primary font-medium">Automatisk. Garanterad.</span>
            </motion.p>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href={`${PRODUCTION_URL}/signup`}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, hsl(22 100% 55%), hsl(22 100% 48%))',
                  boxShadow: '0 4px 20px hsl(22 100% 55% / 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px hsl(22 100% 55% / 0.6)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, hsl(22 100% 60%), hsl(22 100% 52%))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px hsl(22 100% 55% / 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, hsl(22 100% 55%), hsl(22 100% 48%))';
                }}
              >
                <span className="flex items-center gap-2">
                  Starta gratis
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
              <a 
                href={`${PRODUCTION_URL}/demo`}
                className="text-white/40 hover:text-white hover:underline underline-offset-4 transition-all duration-200 flex items-center gap-1 text-base"
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

          {/* Right: Phone Mockup with GLOW */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* CRITICAL: Large pulsing orange glow behind phone */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none"
              style={{
                background: 'radial-gradient(circle, hsl(22 100% 55% / 0.35) 0%, hsl(22 100% 55% / 0.15) 40%, transparent 70%)',
                filter: 'blur(80px)',
              }}
              animate={{
                opacity: [0.25, 0.4, 0.25],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Phone frame */}
            <motion.div
              className="relative mx-auto w-[260px] sm:w-[300px] z-10"
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
              <div className="relative bg-zinc-900 rounded-[3rem] p-3 border border-white/10 shadow-2xl shadow-primary/20">
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

              {/* CRITICAL: Enhanced floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -right-2 sm:-right-6 lg:-right-12 top-1/4 z-20"
              >
                <div 
                  className="px-4 py-2.5 rounded-full backdrop-blur-md cursor-pointer transition-all duration-200"
                  style={{
                    background: 'hsl(22 100% 55% / 0.15)',
                    border: '1px solid hsl(22 100% 55%)',
                    boxShadow: '0 0 25px hsl(22 100% 55% / 0.4), inset 0 0 20px hsl(22 100% 55% / 0.1)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔥</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-orange-300 whitespace-nowrap">Nytt: AI-Fakturaläsning</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
