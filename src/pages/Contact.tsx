import { useState } from 'react';
import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, Send, CheckCircle, Loader2, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { sendContactForm } from '@/lib/email';
import { useSEO } from '@/hooks/useSEO';

const Contact = () => {
  useSEO({
    title: 'Kontakt',
    description: 'Kontakta Frost Solutions. Vi svarar inom 24 timmar. E-post, personlig support från grundaren Vilmer Frost.',
    path: '/contact',
  });

  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast.error('Fyll i alla obligatoriska fält');
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await sendContactForm({ email: formData.email, company: formData.company, message: formData.message });
      if (result.success) {
        setIsSubmitted(true);
        toast.success('Meddelande skickat!', { description: 'Vi återkommer inom 24 timmar.' });
      } else {
        throw new Error(result.error);
      }
    } catch {
      toast.error('Något gick fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold tracking-wide uppercase mb-6">
                <MessageSquare className="h-3.5 w-3.5" />
                Kontakt
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1c1a] mb-4 tracking-tight">
                Prata med <span className="text-[#f26522]">oss</span>
              </h1>
              <p className="text-[#594138] max-w-2xl mx-auto text-lg">
                Har du frågor om Frost? Vi svarar inom 24 timmar.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              {isSubmitted ? (
                <div className="rounded-2xl bg-emerald-50 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-8 w-8 text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1b1c1a] mb-2">Tack för ditt meddelande!</h3>
                  <p className="text-[#594138] mb-6">Vi återkommer inom 24 timmar.</p>
                  <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', company: '', message: '' }); }} className="text-[#f26522] font-bold hover:underline">
                    Skicka ett nytt meddelande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#1b1c1a] mb-2">Namn</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ditt namn" className="w-full px-4 py-3.5 rounded-xl border border-[#e1bfb3]/40 bg-white text-[#1b1c1a] placeholder:text-[#594138]/40 focus:outline-none focus:ring-2 focus:ring-[#f26522]/20 focus:border-[#f26522]/40 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#1b1c1a] mb-2">E-post *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="din@email.se" className="w-full px-4 py-3.5 rounded-xl border border-[#e1bfb3]/40 bg-white text-[#1b1c1a] placeholder:text-[#594138]/40 focus:outline-none focus:ring-2 focus:ring-[#f26522]/20 focus:border-[#f26522]/40 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-[#1b1c1a] mb-2">Företag</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Ditt företagsnamn" className="w-full px-4 py-3.5 rounded-xl border border-[#e1bfb3]/40 bg-white text-[#1b1c1a] placeholder:text-[#594138]/40 focus:outline-none focus:ring-2 focus:ring-[#f26522]/20 focus:border-[#f26522]/40 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[#1b1c1a] mb-2">Meddelande *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Beskriv hur vi kan hjälpa dig..." className="w-full px-4 py-3.5 rounded-xl border border-[#e1bfb3]/40 bg-white text-[#1b1c1a] placeholder:text-[#594138]/40 focus:outline-none focus:ring-2 focus:ring-[#f26522]/20 focus:border-[#f26522]/40 transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full ember-gradient text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#f26522]/20 hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2">
                    {isSubmitting ? <><Loader2 className="h-5 w-5 animate-spin" />Skickar...</> : <><Send className="h-5 w-5" strokeWidth={1.75} />Skicka meddelande</>}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info cards */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-5">
              <div className="p-6 rounded-2xl bg-white shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f26522]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#f26522]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1b1c1a] mb-1">E-post</h3>
                    <p className="text-[#594138] text-sm mb-2">Skriv direkt till oss</p>
                    <a href="mailto:vilmer.frost@gmail.com" className="text-[#f26522] font-bold hover:underline text-sm">vilmer.frost@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1b1c1a] mb-1">Svarstid</h3>
                    <p className="text-[#594138] text-sm mb-2">Vi är snabba på att svara</p>
                    <span className="text-emerald-600 font-bold text-sm">Inom 24 timmar</span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-blue-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1b1c1a] mb-1">Plats</h3>
                    <p className="text-[#594138] text-sm mb-2">Vi är baserade i</p>
                    <span className="text-[#1b1c1a] font-bold text-sm">Stockholm, Sverige</span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-[#fdf6f2] border border-[#f26522]/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full ember-gradient flex items-center justify-center text-white font-extrabold text-sm">VF</div>
                  <div>
                    <h3 className="font-bold text-[#1b1c1a]">Vilmer Frost</h3>
                    <p className="text-sm text-[#594138]">Grundare & CEO</p>
                  </div>
                </div>
                <p className="text-sm text-[#594138] mb-4 leading-relaxed">
                  Som nystartat företag ger jag personlig support. Kontakta mig direkt om du har frågor.
                </p>
                <a href="mailto:vilmer.frost@gmail.com" className="inline-flex items-center gap-2 text-[#f26522] hover:underline text-sm font-bold">
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                  vilmer.frost@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Boka demo */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 rounded-2xl ember-gradient p-10 text-center text-white shadow-lg shadow-[#f26522]/20"
          >
            <h2 className="text-2xl font-extrabold mb-3">Vill du se Frost i action?</h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Boka en demo så visar vi hur Frost kan effektivisera just ditt byggföretag.
            </p>
            <a
              href="mailto:vilmer.frost@gmail.com?subject=Boka demo"
              className="inline-flex items-center gap-2 bg-white text-[#f26522] px-8 py-3.5 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform"
            >
              <Mail className="h-5 w-5" strokeWidth={1.75} />
              Boka demo
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
