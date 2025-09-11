import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "React.js", "Vite", "TypeScript", "JavaScript", "Tailwind CSS", 
        "HTML", "CSS", "UI/UX Design"
      ]
    },
    {
      category: "Backend Development", 
      skills: [
        "Python", "Django", "Flask", "Node.js", "Express.js", 
        "REST APIs", "JWT Authentication", "Java", "C"
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        "PostgreSQL", "MySQL", "Firebase", "AWS", "Git", 
        "GitHub", "Deployment"
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "OpenCV", "TensorFlow", "OpenAI API", "Computer Vision", "MTCNN",
        "dlib", "Face Recognition", "AI/ML"
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        "Git", "GitHub", "VS Code", "Agile Development", 
        "Hackathons", "Research", "Problem Solving"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card glass-hover border-border/40 bg-transparent h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="glass-card hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default border-primary/20"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            I'm always learning and adapting to new technologies. Currently exploring 
            <span className="text-primary font-semibold"> Advanced AI Models</span>, 
            <span className="text-primary font-semibold"> Cloud Computing</span>, and 
            <span className="text-primary font-semibold"> Full-Stack Architectures</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;