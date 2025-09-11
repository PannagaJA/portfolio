import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in React, Django, Node.js, PostgreSQL, and AWS. Built scalable web applications and APIs."
    },
    {
      icon: Lightbulb,
      title: "AI/ML Innovation",
      description: "Specialized in computer vision, OpenAI API integration, face recognition systems, and AI-powered chatbots."
    },
    {
      icon: Rocket,
      title: "Project Leadership",
      description: "Led development of NeuroCampus platform and multiple AI-powered solutions from concept to deployment."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Coordinator at AMC E-CELL, hackathon winner, and active contributor to the tech community."
    }
  ];

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing B.E. in Computer Science & Engineering (AIML) at AMC Engineering College, Bengaluru. 
                I'm passionate about building scalable applications and intelligent platforms that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey includes working as a Software Engineer at Stalight Technology, where I developed "NeuroCampus" 
                - an AI-powered academic management platform using Django, React, PostgreSQL, and AWS with features like 
                face recognition attendance and AI-assisted Q&A.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm participating in hackathons (2nd place at TJ Hacks), contributing to the tech community, 
                or exploring the latest in AI/ML research. I believe in continuous learning and creating technology that makes 
                a meaningful impact.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card glass-hover h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;