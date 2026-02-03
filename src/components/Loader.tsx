import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="loader-container flex-col gap-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-6xl md:text-8xl font-black tracking-tighter"
          animate={{
            color: ['#ffffff', '#00ff88', '#ffffff'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          PIXEL
        </motion.div>
        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <div className="flex items-center gap-4">
        <motion.span
          className="text-5xl md:text-7xl font-black text-accent tabular-nums"
          key={Math.floor(progress)}
        >
          {Math.min(Math.floor(progress), 100)}
        </motion.span>
        <span className="text-2xl text-gray-custom">%</span>
      </div>

      <motion.div
        className="w-64 h-[2px] bg-gray-custom/30 overflow-hidden rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.p
        className="text-gray-custom text-sm tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading Experience
      </motion.p>
    </motion.div>
  );
};

export default Loader;
