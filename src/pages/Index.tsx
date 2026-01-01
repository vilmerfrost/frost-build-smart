import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TryROTDemo } from '@/components/TryROTDemo';
import { FeaturedIn } from '@/components/social-proof/FeaturedIn';
import { FeaturesSection } from '@/components/FeaturesSection';
import { SavingsCalculator } from '@/components/SavingsCalculator';
import { InteractiveProductTour } from '@/components/InteractiveProductTour';
import { PricingSection } from '@/components/PricingSection';
import { ComparisonSlider } from '@/components/ComparisonSlider';
import { ComparisonSection } from '@/components/ComparisonSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { RecentSignups } from '@/components/social-proof/RecentSignups';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TryROTDemo />
        <FeaturedIn />
        <FeaturesSection />
        <SavingsCalculator />
        <InteractiveProductTour />
        <PricingSection />
        <ComparisonSlider />
        <ComparisonSection />
        <CaseStudiesSection />
        <IntegrationsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <RecentSignups />
    </div>
  );
};

export default Index;
