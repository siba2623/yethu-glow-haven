import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience the Yethu difference? Book your appointment now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground">
                Visit us at our beautiful spa
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Contact</h3>
              <p className="text-muted-foreground">
                Call us for appointments
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Hours</h3>
              <p className="text-muted-foreground">
                Open daily to serve you
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8">
              Book Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
