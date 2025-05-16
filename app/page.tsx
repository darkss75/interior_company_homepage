import HeroSlider from "@/components/hero-slider";
import CompanyIntro from "@/components/company-intro";
import CtaSection from "@/components/cta-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Company Introduction */}
      <CompanyIntro />
      

      {/* Call to Action */}
      <CtaSection />
    </div>
  );
}
