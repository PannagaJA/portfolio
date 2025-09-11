import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSimpleTheme } from "@/hooks/useSimpleTheme";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useSimpleTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full hover:bg-secondary"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 180,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={16} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : -180,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun size={16} />
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;