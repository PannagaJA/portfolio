import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "NeuroCampus - Academic Management System",
      description: "AI-powered academic management platform with role-based dashboards for Admin, HOD, Faculty, and Students. Features face recognition attendance, JWT/OTP auth, AI-assisted Q&A, and PDF/CSV exports.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Django", "React", "PostgreSQL", "AWS", "AI/ML"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Case Study Chatbot",
      description: "Built a chatbot to answer case study questions using OpenAI API. Designed a React + Vite frontend for real-time user interaction with document pipeline for context-aware responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "Flask", "React", "TypeScript", "OpenAI API"],
      liveUrl: "#",
      githubUrl: "https://github.com/pannaga-ja",
      featured: true
    },
    {
      title: "Attendance System using Face Recognition",
      description: "Real-time attendance system with webcam-based detection. Integrated with Google Sheets for automated record management. Achieved 86.73% accuracy, reducing manual work.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "MTCNN", "Google Sheets API"],
      liveUrl: "#",
      githubUrl: "https://github.com/pannaga-ja",
      featured: true
    },
    {
      title: "Mental Health Assistance System",
      description: "AI-based mental wellness platform with chatbot, stress-relief music, and interactive games. Contributed as Frontend Developer & UI/UX Designer. Secured 2nd place at TJ Hacks Hackathon.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "AI", "UI/UX"],
      liveUrl: "#",
      githubUrl: "https://github.com/pannaga-ja",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on that showcase my skills and passion for innovation
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
                          delay: index * 0.1 + techIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-xs glass-card">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button size="sm" className="w-full accent-gradient">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button variant="outline" size="sm" className="glass-card">
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Other Notable Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card glass-hover h-full">
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs glass-card">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs glass-card">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs glass-card">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="glass-card">
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
