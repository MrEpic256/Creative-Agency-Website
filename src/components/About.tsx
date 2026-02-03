import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { number: 50, suffix: '+', label: 'Projects Completed' },
  { number: 8, suffix: '', label: 'Years of Experience' },
  { number: 15, suffix: '', label: 'Team Members' },
  { number: 20, suffix: '+', label: 'Awards Won' },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop"
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>

            {/* Floating accent element */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent rounded-2xl flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-4xl font-black text-dark">8+</span>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full border border-accent/20 rounded-2xl" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm text-gray-custom uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-section font-black tracking-tighter mt-2 mb-8">
              We Are<br />
              <span className="text-accent">Pixel Studio</span>
            </h2>

            <div className="space-y-6 text-gray-custom leading-relaxed">
              <p>
                We are a creative digital agency passionate about crafting exceptional
                digital experiences. Founded in 2016, we've been helping brands transform
                their digital presence through innovative design and strategic thinking.
              </p>
              <p>
                Our team of designers, developers, and strategists work collaboratively
                to deliver solutions that not only look stunning but also drive real
                business results. We believe in the power of creativity to solve complex
                problems.
              </p>
              <p>
                From startups to Fortune 500 companies, we've partnered with diverse
                clients across industries, always maintaining our commitment to quality
                and innovation.
              </p>
            </div>

            <motion.a
              href="#team"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent text-dark font-bold rounded-full hover:bg-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="Click"
            >
              Meet the Team
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-gray-custom/20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-accent mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-custom text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
