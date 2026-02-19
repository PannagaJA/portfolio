import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "blog", name: "Blog" },
    { id: "contact", name: "Contact" }
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sectionElements = sections.map(section => 
            document.getElementById(section.id)
          );

          const currentSection = sectionElements.findIndex(element => {
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          });

          if (currentSection !== -1) {
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4">
      {/* Progress Line */}
      <div className="relative w-0.5 h-48 bg-border/30 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-primary origin-top"
          style={{
            scaleY: scaleX,
            height: "100%"
          }}
        />
      </div>

      {/* Section Dots */}
      <div className="flex flex-col space-y-3 py-2">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative w-3 h-3 rounded-full border-2 transition-all duration-300 group ${
              activeSection === index
                ? "bg-primary border-primary scale-125"
                : "bg-transparent border-muted-foreground/40 hover:border-primary/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-card/90 backdrop-blur-sm text-card-foreground px-2 py-1 rounded text-xs whitespace-nowrap border border-border">
                {section.name}
              </div>
            </div>

            {/* Active section glow */}
            {activeSection === index && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10"
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress;