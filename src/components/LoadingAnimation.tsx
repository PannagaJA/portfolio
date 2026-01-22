import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  children: React.ReactNode;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total loading duration (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, -60, 0],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Morphing Logo Text */}
            <motion.div
              layoutId="brand-logo"
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-center whitespace-nowrap cursor-default z-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "anticipate",
              }}
            >
              <span className="text-foreground">Pannaga </span>
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                J A
              </motion.span>
            </motion.div>

            {/* "Portfolio" Subtext with stagger reveal */}
            <motion.div
              className="overflow-hidden h-12 flex items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              <motion.span
                className="text-2xl md:text-3xl text-muted-foreground font-light tracking-[0.5em]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              >
                PORTFOLIO
              </motion.span>
            </motion.div>

            {/* Progress/Line Animation */}
            <motion.div
              className="mt-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      ) : (
        <div key="content">
          {children}
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
