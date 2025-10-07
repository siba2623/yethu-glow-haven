import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(20, { message: "Phone number must be less than 20 digits" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

export const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const whatsappMessage = encodeURIComponent(
      `New Contact Form Submission\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.message}`
    );
    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    form.reset();
  };

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

          <div className="bg-background rounded-lg shadow-lg p-8 mb-8">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center text-foreground">Send Us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your beauty needs..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full text-lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
