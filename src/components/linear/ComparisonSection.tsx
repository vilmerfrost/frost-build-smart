import { motion } from 'framer-motion';
import {
  AlertCircle,
  Ban,
  Bell,
  Brain,
  CheckCircle,
  Clock,
  FileSpreadsheet,
  Frown,
  Smile,
  Zap,
} from 'lucide-react';

const comparisons = [
  {
    old: { icon: FileSpreadsheet, text: 'Excel-kaos', subtext: 'Manuellt och rörigt' },
    new: { icon: Brain, text: 'AI gör jobbet', subtext: 'Strukturerat och konsekvent' },
  },
  {
    old: { icon: Clock, text: '2+ timmar/vecka', subtext: 'Borta på administration' },
    new: { icon: Zap, text: '5 minuter/vecka', subtext: 'Mer tid för det som räknas' },
  },
  {
    old: { icon: Ban, text: 'Missar ROT-avdrag', subtext: 'Pengar som aldrig kommer tillbaka' },
    new: { icon: CheckCircle, text: 'Hittar varje krona', subtext: 'Det du har rätt till' },
  },
  {
    old: { icon: AlertCircle, text: 'Ingen översikt', subtext: 'Överraskningar i efterhand' },
    new: { icon: Bell, text: 'Automatiska notiser', subtext: 'Du hänger med i realtid' },
  },
];

export function ComparisonSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1b1c1a] mb-4">
            Före och efter <span className="text-[#f26522]">Frost</span>
          </h2>
          <p className="text-lg text-[#594138] max-w-lg mx-auto">
            Gamla sättet jämfört med hur det kan vara.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Old way */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#fdf2f0] p-8"
          >
            <header className="mb-8 flex items-center gap-4 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Frown className="h-6 w-6 text-red-500" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1b1c1a]">Gamla sättet</h3>
                <p className="text-sm text-[#594138]">Tungt, långsamt och riskfyllt</p>
              </div>
            </header>

            <ul className="flex flex-col gap-4">
              {comparisons.map((row, index) => (
                <motion.li
                  key={`old-${index}`}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                    <row.old.icon className="h-5 w-5 text-red-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-bold text-[#1b1c1a]">{row.old.text}</p>
                    <p className="text-sm text-[#594138]">{row.old.subtext}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          {/* New way */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#f0fdf4] p-8"
          >
            <header className="mb-8 flex items-center gap-4 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Smile className="h-6 w-6 text-emerald-500" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1b1c1a]">Med Frost</h3>
                <p className="text-sm text-[#594138]">Lätt, snabbt och tryggt</p>
              </div>
            </header>

            <ul className="flex flex-col gap-4">
              {comparisons.map((row, index) => (
                <motion.li
                  key={`new-${index}`}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                    <row.new.icon className="h-5 w-5 text-emerald-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-bold text-[#1b1c1a]">{row.new.text}</p>
                    <p className="text-sm text-[#594138]">{row.new.subtext}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
