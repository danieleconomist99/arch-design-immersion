import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import FacilitatorsSection from "@/components/FacilitatorsSection";
import CurriculumSection from "@/components/CurriculumSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ObjectiveSection />
      <FacilitatorsSection />
      <CurriculumSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
