import { Navbar } from '@/components/linear/Navbar';
import { HeroSection } from '@/components/linear/HeroSection';
import { SocialProofMarquee } from '@/components/linear/SocialProofMarquee';
import { BentoFeatures } from '@/components/linear/BentoFeatures';
import { CommandPalette } from '@/components/linear/CommandPalette';
import { ComparisonSection } from '@/components/linear/ComparisonSection';
import { CTASection } from '@/components/linear/CTASection';
import { Footer } from '@/components/linear/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofMarquee />
        <BentoFeatures />
        <CommandPalette />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
