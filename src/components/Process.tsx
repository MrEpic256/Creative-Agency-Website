import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into understanding your brand, audience, and goals through research and analysis.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create compelling concepts and visual solutions that align with your brand identity.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We bring designs to life with clean code and cutting-edge development practices.',
    icon: Code,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'We launch your project and provide ongoing support to ensure continued success.',
    icon: Rocket,
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm text-gray-custom uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="text-section font-black tracking-tighter mt-2">
            Our Process<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-custom/20 hidden md:block">
            <motion.div
              className="w-full bg-accent origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Circle indicator */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full z-10 hidden md:block">
                  <motion.div
                    className="absolute inset-0 bg-accent rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-8xl md:text-9xl font-black text-white/5">
                      {step.number}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold -mt-12 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-custom max-w-md leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon card */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center">
                    <step.icon className="w-10 h-10 md:w-14 md:h-14 text-accent" />
                  </div>
                </motion.div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
