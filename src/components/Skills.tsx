import { Code2, Database, Palette, Rocket, Shield, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vue.js"]
  },
  {
    icon: Database,
    title: "Backend Development",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Vercel", "Supabase"]
  },
  {
    icon: Palette,
    title: "Design & UX",
    items: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility"]
  },
  {
    icon: Zap,
    title: "Tools & Workflow",
    items: ["Git", "VS Code", "Jira", "Postman", "Webpack"]
  },
  {
    icon: Shield,
    title: "Best Practices",
    items: ["Testing", "Security", "Performance", "Clean Code", "Agile"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit built through years of hands-on experience and continuous learning
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
