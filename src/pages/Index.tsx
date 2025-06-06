
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FeaturedImageSection from "@/components/FeaturedImageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <VideoSection />
      <OfferSection />
      <FAQSection />
      <GuaranteeSection />
      <FeaturedImageSection />
      <Footer />
    </div>
  );
};

export default Index;
