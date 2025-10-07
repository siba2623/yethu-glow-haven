import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Yethu Beauty Spa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
            Where elegance meets expertise. Experience luxury beauty services that bring out your natural radiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
