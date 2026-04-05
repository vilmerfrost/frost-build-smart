import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, HardHat, Ruler, Zap, Construction, Shovel, Wrench, Hammer, AlertTriangle, Truck, Building2 } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const BackButton = () => (
  <a href="/" className="ember-gradient text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-[#f26522]/20 hover:scale-105 active:scale-95 transition-transform inline-flex items-center gap-2">
    <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
    Tillbaka till startsidan
  </a>
);

// 1. Ritningen saknas — Blueprint grid with dashed outline
const Blueprint = () => (
  <div className="relative">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#1b1c1a 1px, transparent 1px), linear-gradient(90deg, #1b1c1a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    <div className="relative text-center">
      <motion.div initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} className="mx-auto mb-8 w-48 h-48 border-4 border-dashed border-[#f26522]/30 rounded-2xl flex items-center justify-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-6xl font-extrabold text-[#f26522]/20">
          404
        </motion.span>
      </motion.div>
      <h1 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Ritningen saknas</h1>
      <p className="text-[#594138] mb-8 max-w-md mx-auto">Den här sidan finns inte på ritningen.</p>
      <BackButton />
    </div>
  </div>
);

// 2. Fel våning — Elevator display
const Elevator = () => (
  <div className="text-center">
    <div className="mx-auto mb-8 w-56 bg-[#1b1c1a] rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#f26522]">▲</motion.div>
        <span className="text-xs text-[#594138]/50 font-mono uppercase tracking-widest">Våning</span>
        <div className="text-[#594138]/30">▼</div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0.7, 1] }} transition={{ duration: 1.5 }} className="font-mono text-6xl font-extrabold text-[#f26522] tracking-wider text-center py-4" style={{ textShadow: '0 0 20px rgba(242,101,34,0.4)' }}>
        404
      </motion.div>
      <div className="flex justify-center gap-1 mt-4">
        {[1, 2, 3, '●', 5].map((f, i) => (
          <span key={i} className={`w-6 h-6 rounded text-xs flex items-center justify-center ${f === '●' ? 'bg-[#f26522] text-white' : 'bg-[#594138]/20 text-[#594138]/40'} font-bold`}>{f}</span>
        ))}
      </div>
    </div>
    <h1 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Fel våning</h1>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Våning 404 finns inte. Åk tillbaka till bottenvåningen.</p>
    <BackButton />
  </div>
);

// 3. Mätfel — Tape measure
const TapeMeasure = () => (
  <div className="text-center">
    <div className="mx-auto mb-8 relative">
      <div className="flex items-center justify-center gap-0">
        <div className="w-14 h-14 bg-[#f26522] rounded-lg flex items-center justify-center shadow-lg">
          <Ruler className="h-7 w-7 text-white" strokeWidth={1.75} />
        </div>
        <motion.div initial={{ width: 0 }} animate={{ width: 240 }} transition={{ duration: 1, ease: "easeOut" }} className="h-8 bg-gradient-to-r from-[#f7c948] to-[#f7d56e] rounded-r-sm overflow-hidden flex items-center relative shadow-md">
          <div className="absolute inset-0 flex items-end">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className={`flex-1 ${i % 5 === 0 ? 'h-3' : 'h-1.5'} bg-[#1b1c1a]/30 mx-px`} />
            ))}
          </div>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute right-3 text-[#1b1c1a] font-extrabold text-sm">
            404 cm
          </motion.span>
        </motion.div>
      </div>
    </div>
    <h1 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Mätfel</h1>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Vi mätte fel. Den här sidan finns inte.</p>
    <BackButton />
  </div>
);

// 4. Under rivning — Construction tape
const Demolition = () => (
  <div className="text-center relative">
    <div className="absolute -left-20 right-0 top-8 -rotate-6 h-10 bg-repeating-stripes overflow-hidden opacity-80" style={{ background: 'repeating-linear-gradient(45deg, #f7c948, #f7c948 20px, #1b1c1a 20px, #1b1c1a 40px)' }} />
    <div className="relative pt-24">
      <motion.div animate={{ rotate: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="inline-block mb-6">
        <Construction className="h-20 w-20 text-[#f26522]/30" strokeWidth={1} />
      </motion.div>
      <h1 className="text-7xl font-extrabold text-[#f26522]/20 mb-2">404</h1>
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Under rivning</h2>
      <p className="text-[#594138] mb-8 max-w-md mx-auto">Den här sidan har rivits. Inget att se här.</p>
      <BackButton />
    </div>
  </div>
);

// 5. Borttappad i bygget — Hard hat + cone
const LostOnSite = () => (
  <div className="text-center">
    <div className="flex items-end justify-center gap-6 mb-8">
      <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
        <HardHat className="h-20 w-20 text-[#f26522]/60" strokeWidth={1} />
      </motion.div>
      <div className="w-0.5 h-12 bg-[#eae8e5]" />
      <motion.div animate={{ rotate: [3, -3, 3] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
        <AlertTriangle className="h-16 w-16 text-[#f7c948]/70" strokeWidth={1} />
      </motion.div>
    </div>
    <h1 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Borttappad i bygget</h1>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Du har hamnat utanför byggområdet. Ta på dig hjälmen och gå tillbaka.</p>
    <BackButton />
  </div>
);

// 6. Bygget rasade — Falling blocks
const Collapsed = () => (
  <div className="text-center">
    <div className="flex justify-center gap-2 mb-8">
      {['4', '0', '4'].map((char, i) => (
        <motion.div
          key={i}
          initial={{ y: -200, rotate: Math.random() * 30 - 15 }}
          animate={{ y: 0, rotate: [Math.random() * 10 - 5, 0] }}
          transition={{ delay: i * 0.15, type: "spring", damping: 10, stiffness: 100 }}
          className="w-20 h-20 bg-[#eae8e5] rounded-lg flex items-center justify-center shadow-md"
        >
          <span className="text-4xl font-extrabold text-[#1b1c1a]">{char}</span>
        </motion.div>
      ))}
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-center gap-1 mb-8">
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div key={i} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.5 + i * 0.05, type: "spring", damping: 8 }} className="w-3 h-3 bg-[#e1bfb3]/40 rounded-sm" />
      ))}
    </motion.div>
    <h1 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Bygget rasade</h1>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Den här sidan har kollapsat. Vi bygger upp den snart.</p>
    <BackButton />
  </div>
);

// 7. Stängd arbetsplats — Fence barrier
const ClosedSite = () => (
  <div className="text-center">
    <div className="mx-auto mb-8 max-w-xs">
      <div className="flex items-end justify-center gap-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-1.5 h-16 bg-[#f26522]/60 rounded-t" />
            {i < 4 && <div className="w-16 h-1.5 bg-[#f26522]/40 -mt-10 ml-8" />}
          </div>
        ))}
      </div>
      <div className="mt-4 px-6 py-3 bg-[#f7c948] rounded-lg inline-block">
        <span className="font-extrabold text-[#1b1c1a] text-sm tracking-wider uppercase">Tillträde förbjudet</span>
      </div>
    </div>
    <h1 className="text-7xl font-extrabold text-[#f26522]/20 mb-2">404</h1>
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Stängd arbetsplats</h2>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Obehöriga äger ej tillträde. Den här sidan är avstängd.</p>
    <BackButton />
  </div>
);

// 8. Saknad leverans — Empty truck
const MissingDelivery = () => (
  <div className="text-center">
    <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="inline-block mb-8">
      <div className="flex items-end">
        <div className="w-28 h-20 border-2 border-dashed border-[#e1bfb3] rounded-lg flex items-center justify-center mr-1">
          <span className="text-[#e1bfb3] text-xs font-bold">TOM</span>
        </div>
        <div className="w-14 h-14 bg-[#eae8e5] rounded-lg flex items-center justify-center">
          <Truck className="h-7 w-7 text-[#594138]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex justify-between mt-1 px-2">
        <div className="w-4 h-4 rounded-full bg-[#1b1c1a]/20" />
        <div className="w-4 h-4 rounded-full bg-[#1b1c1a]/20" />
        <div className="w-4 h-4 rounded-full bg-[#1b1c1a]/20" />
      </div>
    </motion.div>
    <h1 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Leverans saknas</h1>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Sidan levererades aldrig. Någon måste ha beställt fel.</p>
    <BackButton />
  </div>
);

// 9. Felkopplad — Sparking wires
const BadWiring = () => (
  <div className="text-center">
    <div className="relative inline-block mb-8">
      <Zap className="h-24 w-24 text-[#f26522]/20" strokeWidth={1} />
      <motion.div
        animate={{ opacity: [0, 1, 0, 1, 0, 0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-2 right-2"
      >
        <Zap className="h-8 w-8 text-[#f7c948]" strokeWidth={2} />
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0, 1, 0, 1, 0, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-4 left-0"
      >
        <Zap className="h-5 w-5 text-[#f26522]" strokeWidth={2} />
      </motion.div>
    </div>
    <h1 className="text-7xl font-extrabold text-[#f26522]/20 mb-2">404</h1>
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Felkopplad</h2>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Någon har kopplat fel. Den här sidan kortslöt.</p>
    <BackButton />
  </div>
);

// 10. Grävt för djupt — Excavation
const DugTooDeep = () => (
  <div className="text-center">
    <div className="relative mx-auto mb-8">
      <motion.div animate={{ rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="inline-block">
        <Shovel className="h-20 w-20 text-[#594138]/40" strokeWidth={1} />
      </motion.div>
      <div className="mt-2 mx-auto max-w-[200px]">
        <div className="h-4 bg-[#e1bfb3]/40 rounded-t-lg" />
        <div className="h-8 bg-[#d4a088]/20 flex items-center justify-center">
          <span className="text-xs font-extrabold text-[#594138]/40">404m djupt</span>
        </div>
        <div className="h-4 bg-[#c9917a]/20 rounded-b-lg" />
      </div>
    </div>
    <h1 className="text-2xl md:text-3xl font-extrabold text-[#1b1c1a] mb-3">Grävt för djupt</h1>
    <p className="text-[#594138] mb-8 max-w-md mx-auto">Du grävde 404 meter ner och hittade... ingenting. Dags att ta sig upp igen.</p>
    <BackButton />
  </div>
);

const variants = [Blueprint, Elevator, TapeMeasure, Demolition, LostOnSite, Collapsed, ClosedSite, MissingDelivery, BadWiring, DugTooDeep];

const NotFound = () => {
  const location = useLocation();
  const [Variant] = useState(() => variants[Math.floor(Math.random() * variants.length)]);

  useSEO({
    title: '404 — Sidan hittades inte',
    description: 'Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till startsidan.',
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#fbf9f6] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-8 py-20 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Variant />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
