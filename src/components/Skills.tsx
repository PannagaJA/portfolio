import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", 
        "React Native", "Redux", "Framer Motion", "Three.js"
      ]
    },
    {
      category: "Backend Development", 
      skills: [
        "Node.js", "Python", "Express.js", "FastAPI", "Django", 
        "GraphQL", "REST APIs", "WebSockets", "Microservices"
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", 
        "Kubernetes", "Vercel", "Supabase", "Firebase"
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face",
        "Computer Vision", "NLP", "MLOps", "Prompt Engineering"
      ]
    },
    {
      category: "Tools & Workflow",
      skills: [
        "Git", "GitHub Actions", "Figma", "VS Code", "Linear",
        "Notion", "Slack", "Postman", "Jest"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category}
              className="hover-lift transition-spring border-border/40 bg-card/60 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            I'm always learning and adapting to new technologies. Currently exploring 
            <span className="text-primary font-semibold"> Web3</span>, 
            <span className="text-primary font-semibold"> Edge Computing</span>, and 
            <span className="text-primary font-semibold"> Advanced AI Models</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;