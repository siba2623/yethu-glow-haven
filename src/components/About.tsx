import { Sparkles, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Expert Stylists",
    description: "Our team brings years of experience and passion to every service",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every client receives customized treatments tailored to their unique needs",
  },
  {
    icon: Award,
    title: "Premium Products",
    description: "We use only the finest quality products for exceptional results",
  },
];

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Welcome to Yethu
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Yethu Beauty Spa, we believe that beauty is not just about looking good—it's about feeling confident, empowered, and radiant. Our dedicated team of beauty professionals is committed to providing exceptional services in a warm, welcoming environment where you can relax and be yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card hover:bg-accent/5 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
