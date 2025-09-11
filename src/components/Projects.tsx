import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Mental Health Assistance System",
      description:
        "AI-based mental wellness platform featuring chatbot, stress-relief music, and interactive games. Contributed as Frontend Developer & UI/UX Designer. Secured 2nd place at TJ Hacks Hackathon.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "AI", "UI/UX", "NLP"],
      liveUrl: "https://github.com/me-sanath/mindme-tjhacks",
      githubUrl: "https://github.com/PannagaJA",
      featured: true,
      date: "TJ Hacks 2024",
    },
    {
      title: "AI-Powered Case Study Chatbot",
      description:
        "Built a chatbot to answer case study questions using OpenAI API. Designed a React + Vite frontend for real-time user interaction and implemented a document pipeline for context-aware responses.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "Flask", "React", "TypeScript", "OpenAI API"],
      liveUrl: "https://github.com/PannagaJA/chatbot",
      githubUrl: "https://github.com/PannagaJA",
      featured: true,
      date: "May 2025",
    },
    {
      title: "Attendance System using Face Recognition",
      description:
        "Real-time attendance system with webcam-based detection. Integrated with Google Sheets for automated record management and achieved 86.73% accuracy, reducing manual work.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "MTCNN", "Google Sheets API"],
      liveUrl:
        "https://github.com/PannagaJA/Attendance-System-using-face-recognition",
      githubUrl: "https://github.com/PannagaJA",
      featured: true,
      date: "Mar 2025",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on that showcase my skills
            and passion for innovation
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group glass-card glass-hover overflow-hidden h-full">
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </motion.div>
                <CardHeader>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs glass-card"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button size="sm" className="w-full accent-gradient">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant="outline" size="sm" className="glass-card">
                          <Github className="h-4 w-4" />
                        </Button>
                      </motion.a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
