import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Advantages />
      <HowItWorks />
      <Pricing />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;
