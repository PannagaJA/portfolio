import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

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
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-8">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 hover-lift animate-float">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-smooth"></div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="hero-title">
              Hi, I'm <span className="text-primary">Alex Johnson</span>
            </h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Full-Stack Developer | AI Innovator | Startup Founder
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies and artificial intelligence. 
            I create innovative solutions that bridge the gap between cutting-edge technology and real-world business needs.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="accent-gradient hover-glow transition-spring group"
              onClick={scrollToAbout}
            >
              More About Me
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-spring hover-lift"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;