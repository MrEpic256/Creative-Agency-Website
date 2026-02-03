import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Pixel Studio transformed our brand completely. Their attention to detail and creative vision exceeded all our expectations. The team was professional, responsive, and truly understood our vision.",
    name: 'Jennifer Martinez',
    role: 'CEO',
    company: 'TechFlow Inc.',
    logo: '🚀',
  },
  {
    quote: "Working with Pixel Studio was an absolute pleasure. They delivered a website that not only looks stunning but also performs exceptionally well. Our conversion rates have increased by 150%.",
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Innovate Labs',
    logo: '💡',
  },
  {
    quote: "The team at Pixel Studio brings a perfect blend of creativity and strategy. They don't just design pretty things—they create solutions that drive real business results.",
    name: 'Sarah Thompson',
    role: 'Founder',
    company: 'Bloom Studio',
    logo: '🌸',
  },
  {
    quote: "Exceptional work from start to finish. Pixel Studio understood our complex requirements and delivered a digital experience that our users love. Highly recommended!",
    name: 'David Park',
    role: 'Product Manager',
    company: 'NextGen Solutions',
    logo: '⚡',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-custom uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-section font-black tracking-tighter mt-2">
            Client Love<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-16 h-16 text-accent/30 mx-auto mb-8" />
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-12 text-white/90">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <div className="text-5xl">{testimonials[current].logo}</div>
                <div>
                  <p className="text-xl font-bold">{testimonials[current].name}</p>
                  <p className="text-gray-custom">
                    {testimonials[current].role} at {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-gray-custom/30 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="Prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-accent w-8' : 'bg-gray-custom/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-14 h-14 rounded-full border border-gray-custom/30 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
