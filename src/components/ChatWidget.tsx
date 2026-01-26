import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Mail, CheckCircle } from 'lucide-react';
import { sendChatMessage } from '@/lib/email';
import { toast } from 'sonner';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: 'Hej! 👋 Välkommen till Frost Bygg. Hur kan jag hjälpa dig idag?',
    isBot: true,
    timestamp: new Date(),
  },
];

const QUICK_REPLIES = [
  'Berätta mer om Frost',
  'Vad kostar det?',
  'Boka en demo',
  'Kontakta support',
];

const BOT_RESPONSES: Record<string, string> = {
  'berätta mer om frost': 'Frost Bygg är en AI-driven plattform som automatiserar administration för byggföretag. Vi hjälper dig spara 10+ timmar per vecka! Integrerar med Fortnox, Visma och BankID. 🏗️',
  'vad kostar det?': 'Vi har en enkel prissättning: 499 kr/månad med obegränsat antal användare! Du får 30 dagars gratis trial - ingen bindningstid. 💰',
  'boka en demo': 'Perfekt! Skicka ett meddelande så kontaktar Vilmer (grundaren) dig personligen för en demo. Du kan också maila direkt till vilmer.frost@gmail.com 📅',
  'kontakta support': 'Som nystartat företag får du direkt kontakt med grundaren! Maila vilmer.frost@gmail.com. Vi svarar inom 24 timmar! 📧',
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const lowercaseText = text.toLowerCase();
    let botResponse = 'Tack för ditt meddelande! En av våra medarbetare återkommer snart. Under tiden kan du utforska vår hemsida eller boka en demo! 😊';
    let shouldPromptEmail = true;

    // Check for matching responses
    for (const [key, response] of Object.entries(BOT_RESPONSES)) {
      if (lowercaseText.includes(key)) {
        botResponse = response;
        shouldPromptEmail = false;
        break;
      }
    }

    // Simulate bot response
    setTimeout(async () => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      // Prompt for email if message doesn't match quick responses
      if (shouldPromptEmail && !emailSubmitted && messages.length > 2) {
        setTimeout(() => {
          setShowEmailPrompt(true);
        }, 500);
      }

      // Send message to backend if we have user's email
      if (userEmail) {
        await sendChatMessage({
          email: userEmail,
          message: text,
          conversationHistory: [...messages, userMessage].map(m => ({ text: m.text, isBot: m.isBot })),
        });
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleEmailSubmit = async () => {
    if (!userEmail.trim() || !userEmail.includes('@')) {
      toast.error('Ange en giltig e-postadress');
      return;
    }

    try {
      await sendChatMessage({
        email: userEmail,
        message: 'Ny chattkonversation påbörjad',
        conversationHistory: messages.map(m => ({ text: m.text, isBot: m.isBot })),
      });

      setEmailSubmitted(true);
      setShowEmailPrompt(false);
      toast.success('Tack! Vi kontaktar dig snart.');

      const confirmMessage: Message = {
        id: Date.now(),
        text: `Perfekt! Vi har noterat din e-post (${userEmail}). Vilmer återkommer till dig inom 24 timmar. 📧`,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, confirmMessage]);
    } catch {
      toast.error('Något gick fel. Försök igen.');
    }
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-white shadow-lg transition-all ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: '0 4px 20px hsl(22 100% 55% / 0.4)',
        }}
        aria-label="Öppna chatt"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Frost Support</h3>
                  <p className="text-xs text-muted-foreground">Vanligtvis svar inom minuter</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                aria-label="Stäng chatt"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                      message.isBot
                        ? 'bg-secondary text-foreground rounded-bl-md'
                        : 'bg-primary text-white rounded-br-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-muted-foreground rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick replies */}
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Email prompt */}
              {showEmailPrompt && !emailSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Lämna din e-post</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Så att Vilmer kan kontakta dig personligen
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="din@email.se"
                      className="flex-1 px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
                    />
                    <button
                      onClick={handleEmailSubmit}
                      className="px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Skriv ditt meddelande..."
                  className="flex-1 px-4 py-2.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Skicka meddelande"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
