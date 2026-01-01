import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TryROTDemo } from '@/components/TryROTDemo';
import { StatsSection } from '@/components/enterprise/StatsSection';
import { CustomerLogos } from '@/components/enterprise/CustomerLogos';
import { FeaturedIn } from '@/components/social-proof/FeaturedIn';
import { EnhancedFeaturesSection } from '@/components/enterprise/EnhancedFeaturesSection';
import { SavingsCalculator } from '@/components/SavingsCalculator';
import { InteractiveProductTour } from '@/components/InteractiveProductTour';
import { PricingSection } from '@/components/PricingSection';
import { PricingTable } from '@/components/enterprise/PricingTable';
import { ComparisonSlider } from '@/components/ComparisonSlider';
import { Testimonials } from '@/components/enterprise/Testimonials';
import { SecuritySection } from '@/components/enterprise/SecuritySection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { FAQSection } from '@/components/enterprise/FAQSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { EnhancedFooter } from '@/components/enterprise/EnhancedFooter';
import { RecentSignups } from '@/components/social-proof/RecentSignups';
import { EasterEggsProvider } from '@/components/EasterEggs';

const Index = () => {
  return (
    <EasterEggsProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <TryROTDemo />
          <StatsSection />
          <CustomerLogos />
          <FeaturedIn />
          <EnhancedFeaturesSection />
          <SavingsCalculator />
          <InteractiveProductTour />
          <PricingSection />
          <PricingTable />
          <ComparisonSlider />
          <Testimonials />
          <SecuritySection />
          <IntegrationsSection />
          <FAQSection />
          <AboutSection />
          <ContactSection />
        </main>
        <EnhancedFooter />
        <RecentSignups />
      </div>
    </EasterEggsProvider>
  );
};

export default Index;