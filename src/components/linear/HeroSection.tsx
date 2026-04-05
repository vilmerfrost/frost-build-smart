import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Sparkles, FileText, Bell } from 'lucide-react';
import { PRODUCTION_URL } from '@/lib/constants';

const floatY = (delay: number) => ({
  y: [0, -8, 0],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
});

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[60%] rounded-full bg-[#fea27c]/20 blur-[120px]" />
        <div className="absolute top-[5%] right-[5%] w-[35%] h-[50%] rounded-full bg-[#f26522]/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold tracking-wide uppercase mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#f26522] animate-pulse" />
          Nytt: AI-driven fakturaläsning
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1b1c1a] mb-6 max-w-4xl leading-[1.1]"
        >
          Driv byggprojektet på <span className="text-[#f26522]">autopilot.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-lg md:text-xl text-[#594138] font-medium max-w-2xl mb-10 leading-relaxed"
        >
          Spara 10+ timmar per vecka på administration. AI som sköter fakturor, tidrapporter och ROT-avdrag åt dig.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-6"
        >
          <a
            href={`${PRODUCTION_URL}/signup`}
            className="ember-gradient text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#f26522]/20 hover:scale-105 active:scale-95 transition-transform"
          >
            Starta gratis
          </a>
          <a
            href={`${PRODUCTION_URL}/demo`}
            className="bg-[#eae8e5] text-[#a63b00] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#e4e2df] transition-colors"
          >
            Boka demo
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="text-sm text-[#594138]/60 font-medium mb-20"
        >
          Inget kreditkort krävs · Klar på 2 minuter
        </motion.p>

        {/* Product preview with animated floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full max-w-6xl mx-auto"
        >
          <div className="rounded-3xl bg-[#f5f3f0]/40 p-3 md:p-5">
            <div className="rounded-2xl overflow-hidden bg-white shadow-2xl relative">
              <div className="flex min-h-[320px] md:min-h-[500px]">
                {/* Sidebar skeleton */}
                <div className="w-56 bg-[#f5f3f0] hidden md:flex flex-col p-5 gap-4">
                  <div className="h-5 w-2/3 bg-[#e4e2df] rounded-full" />
                  <div className="space-y-2 mt-4">
                    <div className="h-9 w-full bg-[#eae8e5] rounded-xl" />
                    <div className="h-9 w-full bg-transparent rounded-xl" />
                    <div className="h-9 w-full bg-transparent rounded-xl" />
                    <div className="h-9 w-full bg-transparent rounded-xl" />
                  </div>
                  <div className="mt-auto">
                    <div className="h-9 w-full bg-[#eae8e5]/50 rounded-xl" />
                  </div>
                </div>

                {/* Content skeleton */}
                <div className="flex-1 bg-white p-6 md:p-10 overflow-hidden relative">
                  <div className="flex justify-between items-center mb-10">
                    <div className="h-7 w-40 bg-[#f5f3f0] rounded-lg" />
                    <div className="flex gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#f5f3f0]" />
                      <div className="h-9 w-28 rounded-full bg-[#f5f3f0]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8 space-y-5">
                      <div className="h-28 w-full bg-[#f5f3f0]/60 rounded-xl" />
                      <div className="h-52 w-full bg-[#f5f3f0]/40 rounded-xl" />
                    </div>
                    <div className="col-span-4 space-y-5">
                      <div className="h-40 w-full bg-[#f5f3f0]/50 rounded-xl" />
                      <div className="h-40 w-full bg-[#f5f3f0]/40 rounded-xl" />
                    </div>
                  </div>

                  {/* ===== FLOATING CARDS ===== */}

                  {/* Card 1: Time tracking */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
                    className="absolute top-[10%] left-[3%] w-60 hidden lg:block z-10"
                  >
                    <motion.div animate={floatY(0)} className="glass-card p-5 rounded-2xl floating-card border border-white/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-[#594138] uppercase tracking-widest">Tidrapport</span>
                        <Clock className="h-4 w-4 text-[#f26522]" strokeWidth={1.75} />
                      </div>
                      <div className="text-3xl font-extrabold text-[#1b1c1a] tracking-tight">7h 45m</div>
                      <div className="mt-1 text-xs text-[#594138] font-medium">Idag · Projekt Östermalm</div>
                      <div className="mt-3 w-full h-1.5 bg-[#eae8e5] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full ember-gradient"
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] font-semibold text-[#594138]/50">
                        <span>Mål: 10h</span>
                        <span className="text-[#f26522]">78%</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Card 2: AI Analysis */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
                    className="absolute top-[30%] right-[5%] w-72 hidden lg:block z-20"
                  >
                    <motion.div animate={floatY(1)} className="glass-card p-5 rounded-2xl floating-card border border-white/50">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="w-10 h-10 rounded-full ember-gradient flex items-center justify-center text-white"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <Sparkles className="h-5 w-5" strokeWidth={1.75} />
                        </motion.div>
                        <div>
                          <div className="text-sm font-bold text-[#1b1c1a]">AI-Analys körs</div>
                          <div className="text-[10px] text-[#594138]/60 uppercase font-bold tracking-wider">12 fakturor</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2.5 bg-white/40 rounded-xl">
                          <FileText className="h-4 w-4 text-[#f26522]" strokeWidth={1.75} />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-[#1b1c1a] truncate">Byggmax AB</div>
                            <div className="text-[10px] text-[#594138]/60">Faktura #2847</div>
                          </div>
                          <motion.span
                            className="text-[10px] font-bold text-white bg-green-500 px-2 py-0.5 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.5, type: 'spring' }}
                          >
                            Matchad
                          </motion.span>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 bg-white/40 rounded-xl">
                          <FileText className="h-4 w-4 text-[#f26522]" strokeWidth={1.75} />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-[#1b1c1a] truncate">XL-Bygg</div>
                            <div className="text-[10px] text-[#594138]/60">Faktura #1209</div>
                          </div>
                          <span className="text-[10px] font-bold text-[#f26522]">Skannar...</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/40 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[#f26522] rounded-full"
                            animate={{ width: ['0%', '60%', '100%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold">
                          <span className="text-[#a63b00]">Matchning: 98%</span>
                          <span className="text-[#594138]/40">6 kvar</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Card 3: ÄTA items */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
                    className="absolute bottom-[8%] left-[20%] w-64 hidden lg:block z-10"
                  >
                    <motion.div animate={floatY(2)} className="glass-card p-5 rounded-2xl floating-card border border-white/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-[#594138] uppercase tracking-widest">Väntande ÄTA</span>
                        <span className="text-[10px] font-bold text-white ember-gradient px-2 py-0.5 rounded-full">3 st</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: 'Tillägg isolering', amount: '4 500 kr' },
                          { name: 'Extra eluttag', amount: '1 200 kr' },
                          { name: 'Utökad dränering', amount: '8 900 kr' },
                        ].map((item, i) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8 + i * 0.15, duration: 0.3 }}
                            className="flex items-center justify-between p-2 rounded-lg bg-white/30"
                          >
                            <div className="text-xs font-semibold text-[#1b1c1a]">{item.name}</div>
                            <div className="text-xs font-bold text-[#a63b00]">{item.amount}</div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-[#594138]/40">Totalt</span>
                        <span className="text-sm font-extrabold text-[#1b1c1a]">14 600 kr</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Card 4: Notification toast */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.2, type: 'spring', stiffness: 200 }}
                    className="absolute top-[5%] right-[15%] w-56 hidden lg:block z-30"
                  >
                    <motion.div animate={floatY(0.5)} className="glass-card p-3.5 rounded-xl floating-card border border-white/50">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                          <Bell className="h-3.5 w-3.5 text-green-600" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-[#1b1c1a]">ROT-avdrag hittat</div>
                          <div className="text-[9px] text-[#594138]/60">+12 400 kr sparat automatiskt</div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-2xl" />
            </div>
          </div>

          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#f26522]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#fea27c]/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 w-full border-t border-[#e1bfb3]/10 pt-12"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
              <span className="text-sm font-bold tracking-tight text-[#1b1c1a]">14 dagars fri trial</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
              <span className="text-sm font-bold tracking-tight text-[#1b1c1a]">GDPR-säker</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
