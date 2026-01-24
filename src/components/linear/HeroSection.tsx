import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const PRODUCTION_URL = 'https://frostsolutions.se';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-radial-top" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated glow orb */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(22 100% 55% / 0.15) 0%, transparent 70%)',
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-white/70">Nytt: AI-driven fakturaläsning</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gradient-hero">Driv byggprojektet</span>
            <br />
            <span className="text-glow-orange">på autopilot.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Automatisk tidrapportering, fakturatolkning och ÄTA-hantering.
            <br className="hidden sm:block" />
            Byggd för hantverkare, inte kontorsråttor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`${PRODUCTION_URL}/signup`}
              className="btn-glow flex items-center gap-2 text-lg"
            >
              Starta gratis
              <ArrowRight className="h-5 w-5" />
            </a>
            <button className="btn-glass flex items-center gap-2 text-lg">
              <Play className="h-5 w-5" />
              Boka demo
            </button>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-20"
          >
            {/* Warm orange glow behind phone */}
            <div 
              className="absolute inset-0 -inset-x-20 -inset-y-10 blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(25 100% 60%) 0%, hsl(22 100% 55% / 0.5) 40%, transparent 70%)',
              }}
            />
            
            {/* Phone frame */}
            <motion.div
              className="relative mx-auto w-[280px] sm:w-[320px]"
              style={{
                perspective: '1000px',
              }}
              animate={{
                rotateY: [-5, 5, -5],
                rotateX: [2, -2, 2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="relative bg-zinc-900 rounded-[3rem] p-3 border border-white/10 shadow-2xl">
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
