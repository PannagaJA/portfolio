import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSimpleTheme } from '@/hooks/useSimpleTheme';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useSimpleTheme();

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={toggleTheme}
      className='relative w-9 h-9 rounded-full hover:bg-secondary transition-colors duration-200'
    >
      <AnimatePresence mode='wait'>
        <motion.div
        key={theme}
        initial={{ scale: 0, rotate: theme === 'dark' ? -180 : 180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: theme === 'dark' ? 180 : -180 }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 25,
          duration: 0.3 
        }}
        className='absolute inset-0 flex items-center justify-center'
      >
        {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
      </AnimatePresence>
    </Button>
  );
};

export default ThemeToggle;