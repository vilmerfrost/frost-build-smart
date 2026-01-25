import { motion } from 'framer-motion';
import { Scan, MapPin, AlertTriangle, Check, Download, Loader2, Plug, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const integrationLogos = [
  { name: 'BankID', color: '#235971' },
  { name: 'Swish', color: '#78BD20' },
  { name: 'Fortnox', color: '#00A88E' },
  { name: 'Visma', color: '#E31836' },
  { name: 'Bankgirot', color: '#005AA0' },
];

export function BentoFeatures() {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 gradient-radial-center" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Allt du behöver. <span className="text-white/40">Inget trams.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Kraftfulla verktyg byggda för svensk byggindustri
          </p>
        </motion.div>

        {/* True Bento Grid - 12 column layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* AI Invoice - 6 cols, 2 rows - LARGEST */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 row-span-2 bento-card min-h-[400px]"
          >
            <InvoiceScanCard />
          </motion.div>

          {/* GPS Check-in - 3 cols, 1 row - SMALL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 sm:col-span-6 md:col-span-3 bento-card min-h-[200px]"
          >
            <GPSCard />
          </motion.div>

          {/* ÄTA Handling - 3 cols, 1 row - SMALL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 sm:col-span-6 md:col-span-3 bento-card min-h-[200px]"
          >
            <ATACard />
          </motion.div>

          {/* Integrations - 6 cols, 1 row - WIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 bento-card min-h-[180px]"
          >
            <IntegrationsCard />
          </motion.div>

          {/* Export - 6 cols, 1 row - WIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 bento-card min-h-[180px]"
          >
            <ExportCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InvoiceScanCard() {
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/20" style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.4))' }}>
          <Scan className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-white">AI-Fakturatolkning</h3>
          <p className="text-sm text-white/50">Fota kvittot. AI läser, kategoriserar och sparar. Färdigt på 5 sekunder.</p>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        {/* Receipt mockup */}
        <div className="relative w-52 bg-white/[0.03] rounded-xl border border-white/10 p-5">
          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_15px_hsl(22_100%_55%)]"
            style={{ top: `${scanProgress}%` }}
          />
          
          {/* Receipt content */}
          <div className="space-y-3">
            <div className="h-4 bg-white/10 rounded w-3/4" />
            <div className="h-2 bg-white/5 rounded w-full" />
            <div className="h-2 bg-white/5 rounded w-5/6" />
            <div className="border-t border-dashed border-white/10 my-4" />
            <div className="flex justify-between">
              <div className="h-2 bg-white/5 rounded w-1/3" />
              <div className="h-2 bg-white/10 rounded w-1/4" />
            </div>
            <div className="flex justify-between">
              <div className="h-2 bg-white/5 rounded w-2/5" />
              <div className="h-2 bg-white/10 rounded w-1/4" />
            </div>
            <div className="border-t border-white/10 mt-4 pt-4">
              <div className="flex justify-between items-center">
                <div className="h-4 bg-white/10 rounded w-1/4" />
                <div className="h-4 bg-primary/40 rounded w-1/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Extracted data preview */}
        <div className="absolute right-2 sm:right-4 top-4 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: scanProgress > 30 ? 1 : 0, x: scanProgress > 30 ? 0 : 20 }}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs"
          >
            <span className="text-white/50">Leverantör:</span>
            <span className="text-white ml-2">Byggmax AB</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: scanProgress > 50 ? 1 : 0, x: scanProgress > 50 ? 0 : 20 }}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs"
          >
            <span className="text-white/50">Belopp:</span>
            <span className="text-primary ml-2 font-semibold">4 250 kr</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: scanProgress > 70 ? 1 : 0, x: scanProgress > 70 ? 0 : 20 }}
            className="px-3 py-2 rounded-lg bg-success/20 border border-success/30 text-xs"
          >
            <Check className="h-3 w-3 text-success inline mr-1" />
            <span className="text-success">ROT-avdrag tillämpat</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function GPSCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20" style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.4))' }}>
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-white">GPS-Incheckning</h3>
          <p className="text-xs text-white/50">Jobba var. Vi fixar tiden automatiskt.</p>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        {/* Map mockup */}
        <div className="relative w-full h-28 bg-zinc-900/50 rounded-lg overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-white/20"
                style={{ top: `${(i + 1) * 25}%` }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-white/20"
                style={{ left: `${(i + 1) * 25}%` }}
              />
            ))}
          </div>

          {/* Location pin */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <div className="relative w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(22_100%_55%/0.6)]" />
            </div>
          </motion.div>

          {/* Status */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2 py-1.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
            <span className="text-[10px] text-white/70">Villavägen 12</span>
            <span className="text-[10px] text-success font-medium">● Incheckad</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ATACard() {
  const [state, setState] = useState<'warning' | 'processing' | 'done'>('warning');

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev === 'warning') return 'processing';
        if (prev === 'processing') return 'done';
        return 'warning';
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20" style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.4))' }}>
          <AlertTriangle className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-white">Smart ÄTA-Hantering</h3>
          <p className="text-xs text-white/50">Löses automatiskt. Dokumenterat. Klart.</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center"
          key={state}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {state === 'warning' && (
            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
              <AlertTriangle className="h-8 w-8 text-amber-400" />
            </div>
          )}
          {state === 'processing' && (
            <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
              <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
            </div>
          )}
          {state === 'done' && (
            <div className="p-3 rounded-xl bg-success/20 border border-success/30">
              <Check className="h-8 w-8 text-success" />
            </div>
          )}
        </motion.div>

        <p className="text-xs text-white/40">
          {state === 'warning' && 'Ärende upptäckt'}
          {state === 'processing' && 'Bearbetar...'}
          {state === 'done' && 'Löst & dokumenterat'}
        </p>
      </div>
    </div>
  );
}

function IntegrationsCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20" style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.4))' }}>
          <Plug className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-white">Kopplas till dina system</h3>
          <p className="text-xs text-white/50">Direkt integration med lönesystem, bank, och bokföring</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-wrap gap-3 justify-center">
          {integrationLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium text-white/70">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExportCard() {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (exporting) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setExporting(false);
            return 0;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [exporting]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20" style={{ filter: 'drop-shadow(0 0 8px hsl(22 100% 55% / 0.4))' }}>
          <Download className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-white">Löneunderlag på en knapp</h3>
          <p className="text-xs text-white/50">Tidrapporter, OB-ersättning, ROT-avdrag. Klart på 10 sekunder.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="space-y-3 w-full max-w-xs">
          <button
            onClick={() => setExporting(true)}
            disabled={exporting}
            className="w-full btn-glow py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {exporting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Exporterar...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Exportera löneunderlag
              </>
            )}
          </button>

          {exporting && (
            <div className="space-y-1">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="text-[10px] text-center text-white/40">
                {progress < 100 ? `${progress}% klart...` : 'Exporterat!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
