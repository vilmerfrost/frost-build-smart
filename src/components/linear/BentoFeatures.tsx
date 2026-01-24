import { motion } from 'framer-motion';
import { Scan, MapPin, AlertTriangle, Check, Download, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function BentoFeatures() {
  return (
    <section className="py-24 relative">
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
            Allt du behöver. <span className="text-white/50">Inget trams.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Kraftfulla verktyg byggda för svensk byggindustri
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* AI Invoice - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bento-card min-h-[300px]"
          >
            <InvoiceScanCard />
          </motion.div>

          {/* GPS Check-in - Small */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bento-card min-h-[300px]"
          >
            <GPSCard />
          </motion.div>

          {/* ÄTA Handling - Small */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bento-card min-h-[280px]"
          >
            <ATACard />
          </motion.div>

          {/* Export - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 bento-card min-h-[280px]"
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
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20">
          <Scan className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">AI-Fakturatolkning</h3>
          <p className="text-sm text-white/50">Fota kvittot. AI sköter resten.</p>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        {/* Receipt mockup */}
        <div className="relative w-48 bg-white/[0.03] rounded-lg border border-white/10 p-4">
          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_hsl(22_100%_55%)]"
            style={{ top: `${scanProgress}%` }}
          />
          
          {/* Receipt content */}
          <div className="space-y-3">
            <div className="h-3 bg-white/10 rounded w-3/4" />
            <div className="h-2 bg-white/5 rounded w-full" />
            <div className="h-2 bg-white/5 rounded w-5/6" />
            <div className="border-t border-dashed border-white/10 my-3" />
            <div className="flex justify-between">
              <div className="h-2 bg-white/5 rounded w-1/3" />
              <div className="h-2 bg-white/10 rounded w-1/4" />
            </div>
            <div className="flex justify-between">
              <div className="h-2 bg-white/5 rounded w-2/5" />
              <div className="h-2 bg-white/10 rounded w-1/4" />
            </div>
            <div className="border-t border-white/10 mt-3 pt-3">
              <div className="flex justify-between">
                <div className="h-3 bg-white/10 rounded w-1/4" />
                <div className="h-3 bg-primary/30 rounded w-1/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Extracted data preview */}
        <div className="absolute right-4 top-4 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: scanProgress > 30 ? 1 : 0, x: scanProgress > 30 ? 0 : 20 }}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs"
          >
            <span className="text-white/50">Leverantör:</span>
            <span className="text-white ml-2">Byggmax AB</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: scanProgress > 50 ? 1 : 0, x: scanProgress > 50 ? 0 : 20 }}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs"
          >
            <span className="text-white/50">Belopp:</span>
            <span className="text-primary ml-2 font-medium">4 250 kr</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: scanProgress > 70 ? 1 : 0, x: scanProgress > 70 ? 0 : 20 }}
            className="px-3 py-1.5 rounded-lg bg-success/20 border border-success/30 text-xs"
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
        <div className="p-2 rounded-lg bg-blue-500/20">
          <MapPin className="h-5 w-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">GPS-Incheckning</h3>
          <p className="text-sm text-white/50">Automatisk stämpling</p>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        {/* Map mockup */}
        <div className="relative w-full h-40 bg-zinc-900 rounded-lg overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-white/20"
                style={{ top: `${(i + 1) * 20}%` }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-white/20"
                style={{ left: `${(i + 1) * 20}%` }}
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
              <div className="relative w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(22_100%_55%/0.5)]" />
            </div>
          </motion.div>

          {/* Status */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-3 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
            <span className="text-xs text-white/70">Arbetsplats: Villavägen 12</span>
            <span className="text-xs text-success font-medium">● Incheckad</span>
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
        <div className="p-2 rounded-lg bg-amber-500/20">
          <AlertTriangle className="h-5 w-5 text-amber-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Smart ÄTA-hantering</h3>
          <p className="text-sm text-white/50">Problem → Lösning</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <motion.div
          className="relative w-20 h-20 flex items-center justify-center"
          key={state}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {state === 'warning' && (
            <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/30">
              <AlertTriangle className="h-10 w-10 text-amber-400" />
            </div>
          )}
          {state === 'processing' && (
            <div className="p-4 rounded-2xl bg-blue-500/20 border border-blue-500/30">
              <Loader2 className="h-10 w-10 text-blue-400 animate-spin" />
            </div>
          )}
          {state === 'done' && (
            <div className="p-4 rounded-2xl bg-success/20 border border-success/30">
              <Check className="h-10 w-10 text-success" />
            </div>
          )}
        </motion.div>
      </div>

      <div className="text-center text-sm text-white/50">
        {state === 'warning' && 'Ärende upptäckt'}
        {state === 'processing' && 'Bearbetar...'}
        {state === 'done' && 'Löst & dokumenterat'}
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
        <div className="p-2 rounded-lg bg-purple-500/20">
          <Download className="h-5 w-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Löneunderlag på 1 klick</h3>
          <p className="text-sm text-white/50">Exportera allt till lönesystemet direkt</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="space-y-4 w-full max-w-xs">
          <button
            onClick={() => setExporting(true)}
            disabled={exporting}
            className="w-full btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {exporting ? 'Exporterar...' : 'Exportera löneunderlag'}
          </button>

          {exporting && (
            <div className="space-y-2">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="text-xs text-center text-white/50">
                {progress < 100 ? `${progress}% klart...` : 'Exporterat!'}
              </p>
            </div>
          )}

          {!exporting && progress === 0 && (
            <p className="text-xs text-center text-white/40">
              Inkluderar tidrapporter, OB-ersättning & ROT-avdrag
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
