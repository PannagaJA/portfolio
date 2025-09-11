import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Proficient in modern web technologies, from React and Node.js to cloud infrastructure and databases."
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      description: "Specialized in machine learning, natural language processing, and building AI-powered applications."
    },
    {
      icon: Rocket,
      title: "Startup Experience",
      description: "Co-founded multiple tech startups, bringing products from concept to market successfully."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of developers, designers, and product managers in fast-paced environments."
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
                With over 6 years of experience in software development, I've had the privilege of working 
                on diverse projects ranging from early-stage startups to enterprise-level applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with a computer science degree, but my real education came from building 
                real products that solve real problems. I'm passionate about creating technology that makes 
                a meaningful impact on people's lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest AI research, mentoring aspiring 
                developers, or working on my next startup idea. I believe in continuous learning and 
                staying at the forefront of technological innovation.
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