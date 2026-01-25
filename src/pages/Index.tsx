import { Navbar } from '@/components/linear/Navbar';
import { HeroSection } from '@/components/linear/HeroSection';
import { TestimonialSection } from '@/components/linear/TestimonialSection';
import { BentoFeatures } from '@/components/linear/BentoFeatures';
import { SpeedStats } from '@/components/linear/SpeedStats';
import { ComparisonSection } from '@/components/linear/ComparisonSection';
import { CTASection } from '@/components/linear/CTASection';
import { Footer } from '@/components/linear/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialSection />
        <BentoFeatures />
        <SpeedStats />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
