import { Navbar } from '@/components/linear/Navbar';
import { HeroSection } from '@/components/linear/HeroSection';
import { IntegrationTicker } from '@/components/linear/IntegrationTicker';
import { HowItWorksSection } from '@/components/linear/HowItWorksSection';
import { BentoFeatures } from '@/components/linear/BentoFeatures';
import { ReplacesTools } from '@/components/linear/ReplacesTools';
import { SpeedStats } from '@/components/linear/SpeedStats';
import { ComparisonSection } from '@/components/linear/ComparisonSection';
import { PricingSection } from '@/components/linear/PricingSection';
import { AboutSection } from '@/components/linear/AboutSection';
import { CTASection } from '@/components/linear/CTASection';
import { Footer } from '@/components/linear/Footer';
import { BackToTop } from '@/components/BackToTop';
import { CookieConsent } from '@/components/CookieConsent';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  useSEO({
    title: 'Frost Solutions',
    description: 'AI-driven projektverktyg för svenska byggföretag. ROT-automation, fakturatolkning, tidrapportering. 499 kr/mån med obegränsade användare.',
    path: '/',
  });

  return (
    <div className="min-h-screen bg-background">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
      >
        Hoppa till huvudinnehåll
      </a>
      
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <IntegrationTicker />
        <HowItWorksSection />
        <BentoFeatures />
        <ReplacesTools />
        <SpeedStats />
        <ComparisonSection />
        <PricingSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
      
      <BackToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
