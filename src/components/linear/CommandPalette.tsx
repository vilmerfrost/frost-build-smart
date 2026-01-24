import { motion } from 'framer-motion';
import { Search, FolderPlus, Clock, FileText, Users, Settings, Command } from 'lucide-react';
import { useState, useEffect } from 'react';

const commands = [
  { icon: FolderPlus, label: 'Skapa nytt projekt', shortcut: '⌘ + K' },
  { icon: Clock, label: 'Ny tidrapport', shortcut: '⌘ + N' },
  { icon: FileText, label: 'Ladda upp faktura', shortcut: '⌘ + U' },
  { icon: Users, label: 'Hantera team', shortcut: '⌘ + T' },
  { icon: Settings, label: 'Inställningar', shortcut: '⌘ + ,' },
];

export function CommandPalette() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Vad vill du göra?';

  useEffect(() => {
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Cycle through commands
    const cycleInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % commands.length);
    }, 2000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cycleInterval);
    };
  }, []);

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] mb-6">
            <Command className="h-4 w-4 text-white/60" />
            <span className="text-sm text-white/60">Snabbkommandon</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blixtsnabb navigering
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Styr hela appen med tangentbordet. Byggd för effektivitet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="command-palette p-2">
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
              <Search className="h-5 w-5 text-white/40" />
              <span className="text-lg text-white/60">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Commands list */}
            <div className="py-2">
              {commands.map((command, index) => {
                const Icon = command.icon;
                const isActive = index === activeIndex;
                
                return (
                  <motion.div
                    key={command.label}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      isActive ? 'bg-white/[0.05]' : ''
                    }`}
                    animate={{
                      backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-white/40'}`} />
                      <span className={`${isActive ? 'text-white' : 'text-white/60'}`}>
                        {command.label}
                      </span>
                    </div>
                    <kbd className="px-2 py-1 rounded bg-white/[0.05] text-xs text-white/40 font-mono">
                      {command.shortcut}
                    </kbd>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/30">
              <span>Tryck ↵ för att välja</span>
              <span>ESC för att stänga</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
