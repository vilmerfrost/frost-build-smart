import { useState } from 'react';
import { Navbar } from '@/components/linear/Navbar';
import { Footer } from '@/components/linear/Footer';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, Send, CheckCircle, Loader2, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { sendContactForm } from '@/lib/email';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      toast.error('Fyll i alla obligatoriska fält');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactForm({
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success('Meddelande skickat!', {
          description: 'Vi återkommer inom 24 timmar.',
        });
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4" />
                Kontakt
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Hur kan vi <span className="text-primary">hjälpa dig?</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Har du frågor om Frost Bygg? Vi svarar inom 24 timmar.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {isSubmitted ? (
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tack för ditt meddelande!</h3>
                  <p className="text-muted-foreground mb-6">
                    Vi har tagit emot ditt meddelande och återkommer inom 24 timmar.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ email: '', company: '', message: '' });
                    }}
                    className="text-primary hover:underline"
                  >
                    Skicka ett nytt meddelande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="din@email.se"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Företag
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ditt företagsnamn"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Meddelande *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Beskriv hur vi kan hjälpa dig..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Skickar...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Skicka meddelande
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Direct Email */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-post</h3>
                    <p className="text-muted-foreground text-sm mb-2">Skriv direkt till oss</p>
                    <a href="mailto:vilmer.frost@gmail.com" className="text-primary hover:underline font-medium">
                      vilmer.frost@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Svarstid</h3>
                    <p className="text-muted-foreground text-sm mb-2">Vi är snabba på att svara</p>
                    <span className="text-green-500 font-medium">Inom 24 timmar</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Plats</h3>
                    <p className="text-muted-foreground text-sm mb-2">Vi är baserade i</p>
                    <span className="text-foreground font-medium">Stockholm, Sverige 🇸🇪</span>
                  </div>
                </div>
              </div>

              {/* Founder Direct Contact */}
              <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(22 100% 55%), hsl(22 80% 60%))',
                    }}
                  >
                    VF
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Vilmer Frost</h3>
                    <p className="text-sm text-muted-foreground">Grundare & CEO</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Som nystartat företag ger jag personlig support. Kontakta mig direkt om du har frågor.
                </p>
                <a 
                  href="mailto:vilmer.frost@gmail.com" 
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                >
                  <Mail className="h-4 w-4" />
                  vilmer.frost@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
