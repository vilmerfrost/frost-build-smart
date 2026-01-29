import { Navbar } from '@/components/linear/Navbar';
import { HeroSection } from '@/components/linear/HeroSection';
import { HowItWorksSection } from '@/components/linear/HowItWorksSection';
import { BentoFeatures } from '@/components/linear/BentoFeatures';
import { SpeedStats } from '@/components/linear/SpeedStats';
import { ComparisonSection } from '@/components/linear/ComparisonSection';
import { PricingSection } from '@/components/linear/PricingSection';
import { AboutSection } from '@/components/linear/AboutSection';
import { CTASection } from '@/components/linear/CTASection';
import { Footer } from '@/components/linear/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CookieConsent } from '@/components/CookieConsent';
import { CustomCursor } from '@/components/CustomCursor';
import { PageLoader } from '@/components/PageLoader';
import { ChatWidget } from '@/components/ChatWidget';
import { ProductTour } from '@/components/ProductTour';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';

const Index = () => {
  return (
    <>
      {/* Page loader - shows branded loading animation on first visit */}
      <PageLoader minDuration={1200} />
      
      {/* Custom cursor for premium feel - only on desktop */}
      <CustomCursor />
      
      <div className="min-h-screen bg-background">
        {/* Scroll progress indicator */}
        <ScrollProgress />
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Hoppa till huvudinnehåll
        </a>
        
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <HeroSection />
          <HowItWorksSection />
          <BentoFeatures />
          <SpeedStats />
          <ComparisonSection />
          <PricingSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
        
        {/* Floating elements */}
        <BackToTop />
        <ChatWidget />
        <ProductTour autoStart={false} />
        <ExitIntentPopup />

        {/* Cookie consent banner */}
        <CookieConsent />
      </div>
    </>
  );
};

export default Index;
