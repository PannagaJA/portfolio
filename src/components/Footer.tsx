import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              © 2024 Alex Johnson. Built with{" "}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />{" "}
              using React & Tailwind CSS
            </p>
          </div>

          {/* Right side - Back to top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground transition-spring group"
          >
            Back to Top
            <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;