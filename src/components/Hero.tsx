import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 section-padding text-center max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Udit Maurya</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft beautiful, functional web experiences that solve real-world problems.
            Specializing in modern web technologies and user-centric design.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[var(--glow-primary)] transition-all"
            onClick={scrollToProjects}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-border hover:bg-secondary/50"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://github.com/udit-maurya1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-all hover-glow"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/udit-maurya-8bb935294/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-all hover-glow"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:udit0maurya@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-all hover-glow"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
