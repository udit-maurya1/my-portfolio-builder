const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm a passionate developer with a love for creating elegant solutions to complex problems.
            With expertise in modern web technologies, I bring ideas to life through clean code and
            intuitive user experiences.
          </p>
          
          <p className="text-lg text-foreground/90 leading-relaxed">
            My journey in tech started with curiosity and has evolved into a commitment to continuous
            learning and improvement. I believe in writing code that not only works but is maintainable,
            scalable, and enjoyable to work with.
          </p>
          
          <p className="text-lg text-foreground/90 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source,
            or sharing knowledge with the developer community.
          </p>
          
          <div className="pt-6 border-t border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Values</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {["Clean Code", "User-Centric Design", "Continuous Learning", "Collaboration"].map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground/80">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
