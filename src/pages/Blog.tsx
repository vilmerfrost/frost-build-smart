import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, User, ArrowRight, Search, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    slug: 'rot-automation-sparar-tid',
    title: 'Varför ROT-automation sparar byggföretag 15 timmar per månad',
    excerpt: 'Manuell ROT-hantering är en tidstjuv. Lär dig hur AI kan automatisera processen och spara ditt företag värdefull tid.',
    category: 'Product',
    readTime: '5 min',
    date: '15 jan 2026',
    image: '🤖',
    featured: true,
  },
  {
    slug: 'bygglet-vs-frost-bygg',
    title: 'Bygglet vs Frost Bygg: Komplett jämförelse 2026',
    excerpt: 'En detaljerad jämförelse av funktioner, priser och användarupplevelse mellan Bygglet och Frost Bygg.',
    category: 'Industry',
    readTime: '7 min',
    date: '12 jan 2026',
    image: '⚖️',
  },
  {
    slug: 'hur-vi-byggde-frost-bygg',
    title: 'Hur vi byggde Frost Bygg på 2 veckor',
    excerpt: 'Berättelsen om hur en 16-åring från Stockholm byggde ett komplett projektverktyg på rekordtid.',
    category: 'Company',
    readTime: '4 min',
    date: '10 jan 2026',
    image: '🚀',
  },
  {
    slug: 'verkliga-kostnaden-byggprogramvara',
    title: 'Den verkliga kostnaden av byggprogramvara',
    excerpt: 'Dolda avgifter, setup-kostnader och per-användare-priser. Vi bryter ner vad byggprogramvara verkligen kostar.',
    category: 'Industry',
    readTime: '6 min',
    date: '8 jan 2026',
    image: '💰',
  },
  {
    slug: 'ai-i-byggbranschen-2026',
    title: 'AI i byggbranschen: Vad som är möjligt 2026',
    excerpt: 'Från ROT-automation till prediktiv analys. En översikt av hur AI förändrar byggbranschen.',
    category: 'Industry',
    readTime: '8 min',
    date: '5 jan 2026',
    image: '⚡',
  },
];

const categories = ['Alla', 'Product', 'Industry', 'Company'];

const categoryColors: Record<string, string> = {
  'Product': 'bg-primary/10 text-primary',
  'Industry': 'bg-blue-500/10 text-blue-500',
  'Company': 'bg-green-500/10 text-green-500',
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge-frost mb-4 inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" />
              Blogg
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Insikter för <span className="text-gradient">byggbranschen</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tips, guider och nyheter om byggprojekthantering, AI och hur du kan effektivisera ditt företag.
            </p>
          </div>

          {/* Search & Categories */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Sök artiklar..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    cat === 'Alla'
                      ? 'bg-primary text-white shadow-[0_2px_10px_hsl(22_100%_55%/0.3)]'
                      : 'bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(p => p.featured).map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group grid md:grid-cols-2 gap-6 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-[0_0_30px_hsl(22_100%_55%/0.1)] transition-all duration-300"
              >
                <div className="aspect-video md:aspect-auto md:min-h-[300px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center text-8xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                  <span className="relative z-10">{post.image}</span>
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold">
                    <TrendingUp className="h-3 w-3" />
                    Utvald artikel
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-accent/10 text-accent'}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold">
                        VF
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Vilmer Frost</div>
                        <div className="text-xs text-muted-foreground">{post.date}</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Läs mer
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Blog Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.filter(p => !p.featured).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-[0_0_20px_hsl(22_100%_55%/0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 flex items-center justify-center text-5xl relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
                    <span className="relative z-10">{post.image}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-accent/10 text-accent'}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-semibold">
                          VF
                        </div>
                        Vilmer Frost
                      </div>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Få de senaste insikterna
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Prenumerera på vårt nyhetsbrev för tips om byggprojekthantering och AI.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="din@email.se"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
                <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-[0_4px_15px_hsl(22_100%_55%/0.3)]">
                  Prenumerera
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;