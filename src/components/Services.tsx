import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import weavesImage from "@/assets/weaves-service.jpg";
import makeupImage from "@/assets/makeup-service.jpg";
import beautyImage from "@/assets/beauty-services.jpg";

const services = [
  {
    title: "Hair Weaves",
    description: "Professional weave installation with premium quality hair. From natural looks to bold styles, we create the perfect look for you.",
    image: weavesImage,
  },
  {
    title: "Makeup Artistry",
    description: "Expert makeup application for any occasion. From everyday elegance to special events, we enhance your natural beauty.",
    image: makeupImage,
  },
  {
    title: "Beauty Treatments",
    description: "Comprehensive beauty services including facials, nail care, and skincare treatments designed to rejuvenate and refresh.",
    image: beautyImage,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium beauty services, tailored to bring out your best self
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
