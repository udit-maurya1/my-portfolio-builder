import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>
        
        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Name
            </label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background/50 border-border"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/50 border-border"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or just say hi..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-background/50 border-border resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[var(--glow-primary)] transition-all"
          >
            Send Message
          </Button>
        </form>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Or reach out directly at</p>
          <a 
            href="mailto:your.email@example.com"
            className="text-primary hover:text-primary/80 text-lg font-medium transition-colors"
          >
            your.email@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
