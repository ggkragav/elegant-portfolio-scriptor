import Hero from "@/components/Hero";
import Works from "@/components/Works";
import FrenchTeaching from "@/components/FrenchTeaching";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Works />
      <FrenchTeaching />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;