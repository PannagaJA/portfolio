import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container-responsive py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Pannaga J A. Built using React & Tailwind CSS
            </p>
          </div>

          {/* Right side - Back to top */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-spring group flex items-center"
            >
              Back to Top
              <motion.span
                className="ml-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <ArrowUp className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;