import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground pt-16">
      <Hero />
      <Works />
      <Footer />
    </main>
  );
};

export default Index;