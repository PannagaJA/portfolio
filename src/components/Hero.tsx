import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import { motion } from "framer-motion";
import Resume from "@/assets/resume.pdf";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-responsive">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Image */}
          <motion.div 
            className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 hover-lift animate-float glass-card">
              <img
                src={profileImage}
                alt="Pannaga J A - Full-Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-smooth"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="text-primary">Pannaga J A</span>
            </h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Full-Stack Developer | AI/ML Enthusiast | Software Engineer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Computer Science Engineering student passionate about building scalable applications, intelligent platforms, and computer vision solutions. 
            I create innovative solutions that bridge cutting-edge technology with real-world business needs using React, Django, AWS, and AI/ML.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="accent-gradient hover-glow transition-spring group"
                onClick={scrollToAbout}
              >
                More About Me
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={Resume} download>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-card glass-hover hover:bg-primary hover:text-primary-foreground border-primary/20"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { icon: Github, href: "https://github.com/PannagaJA", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/pannaga-ja", label: "LinkedIn" },
              { icon: Mail, href: "mailto:pannaga.baradwaj@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-full glass-card glass-hover hover:bg-primary hover:text-primary-foreground transition-spring"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;