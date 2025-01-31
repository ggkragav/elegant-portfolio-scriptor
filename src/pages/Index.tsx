import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Works />
      <About />
      <Contact />
    </main>
  );
};

export default Index;