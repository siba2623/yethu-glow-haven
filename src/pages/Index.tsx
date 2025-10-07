import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container text-center">
          <p className="font-serif text-lg mb-2">Yethu Beauty Spa</p>
          <p className="text-sm opacity-80">
            Where beauty meets elegance
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
