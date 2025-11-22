import NavigationBar from "@/components/NavigationBar";
import ExkemaHero from "@/components/ExkemaHero";
import ProgramSection from "@/components/ProgramSection";
import ExkemaFacilitators from "@/components/ExkemaFacilitators";
import MethodologySection from "@/components/MethodologySection";
import ExkemaFAQ from "@/components/ExkemaFAQ";
import ExkemaCTA from "@/components/ExkemaCTA";
import ExkemaFooter from "@/components/ExkemaFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <ExkemaHero />
      <ProgramSection />
      <ExkemaFacilitators />
      <MethodologySection />
      <ExkemaFAQ />
      <ExkemaCTA />
      <ExkemaFooter />
    </div>
  );
};

export default Index;
