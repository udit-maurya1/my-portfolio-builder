import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-foreground font-semibold text-lg mb-1">Udit Maurya</p>
              <p className="text-muted-foreground text-sm">
                Building the web, one line at a time
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/udit-maurya1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/udit-maurya-8bb935294/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:udit0maurya@gmail.com"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Made with React by Udit 
              <span className="mx-2">•</span>
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
