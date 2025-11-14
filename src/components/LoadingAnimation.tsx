import React, { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  children: React.ReactNode;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationStage, setAnimationStage] = useState(0); // 0: initial, 1: expanding, 2: fading

  useEffect(() => {
    // Stage 1: Initial delay
    const initialTimer = setTimeout(() => {
      setAnimationStage(1);
    }, 500);

    // Stage 2: Expand animation
    const expandTimer = setTimeout(() => {
      setAnimationStage(2);
    }, 1500);

    // Stage 3: Fade out and show content
    const fadeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(expandTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-pulse"></div>
        
        {/* Central glowing orb */}
        <div className={`absolute w-24 h-24 rounded-full bg-primary transition-all duration-1000 ${animationStage >= 1 ? 'scale-[30] opacity-5' : 'scale-100 opacity-100'}`}>
          <div className="absolute inset-0 rounded-full bg-primary animate-ping"></div>
        </div>
        
        {/* Expanding rings with glow */}
        <div className={`absolute w-32 h-32 rounded-full border-2 border-primary transition-all duration-1000 ${animationStage >= 1 ? 'scale-[25] opacity-0' : 'scale-0 opacity-100'}`}></div>
        <div className={`absolute w-48 h-48 rounded-full border-2 border-secondary transition-all duration-1000 delay-200 ${animationStage >= 1 ? 'scale-[20] opacity-0' : 'scale-0 opacity-100'}`}></div>
        <div className={`absolute w-64 h-64 rounded-full border-2 border-accent transition-all duration-1000 delay-300 ${animationStage >= 1 ? 'scale-[15] opacity-0' : 'scale-0 opacity-100'}`}></div>
        
        {/* Center content with enhanced styling */}
        <div className={`relative z-10 flex flex-col items-center transition-all duration-700 ${animationStage >= 2 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
          <div className="relative mb-6">
            {/* Outer rotating ring */}
            <div className="w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            
            {/* Inner rotating ring (reverse) */}
            <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-secondary border-b-transparent animate-spin-reverse"></div>
            
            {/* Central logo/icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-background animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Brand text with gradient */}
          <div className="text-3xl font-bold tracking-widest mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse">
              PORTFOLIO
            </span>
          </div>
          
          {/* Animated progress bar */}
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-progress"></div>
          </div>
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-primary ${animationStage >= 1 ? 'opacity-0' : 'opacity-100'}`}
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 18}deg) translateX(${animationStage >= 1 ? '150px' : '0'})`,
              transition: `all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.05}s`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <>
      {children}
    </>
  );
};

export default LoadingAnimation;