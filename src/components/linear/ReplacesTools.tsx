import { motion } from 'framer-motion';

const tools = ['iBinder', 'Bluebeam', 'SSG', 'Planday', 'Bygglet', 'Excel'];

export function ReplacesTools() {
  return (
    <section className="py-16 bg-[#f5f3f0]">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#594138]/50 mb-8"
        >
          Ersätter alla dessa verktyg
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-5 py-2.5 rounded-full bg-white text-[#594138] font-bold text-sm shadow-sm line-through decoration-[#f26522]/40 decoration-2"
            >
              {tool}
            </span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg font-extrabold text-[#1b1c1a]"
        >
          Ett verktyg istället för sex.
        </motion.p>
      </div>
    </section>
  );
}
