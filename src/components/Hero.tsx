import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        y: -30,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const titleWords = ['We Create', 'Digital', 'Experiences'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12"
    >
      {/* Animated gradient orb */}
      <div
        ref={orbRef}
        className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.4) 0%, rgba(0,255,136,0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Abstract shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-accent/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="absolute bottom-32 left-20 w-20 h-20 bg-accent/10 rounded-lg"
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {titleWords.map((word, index) => (
            <div key={index} className="overflow-hidden">
              <motion.h1
                variants={wordVariants}
                className={`text-hero font-black tracking-tighter leading-none ${
                  index === 1 ? 'text-accent' : 'text-white'
                }`}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-custom max-w-2xl mx-auto mb-12"
        >
          Award-winning creative agency specializing in branding, web design, and digital innovation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-custom uppercase tracking-widest">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
