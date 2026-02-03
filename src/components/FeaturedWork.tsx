import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Neon Dreams',
    category: 'Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Minimal Flow',
    category: 'Web Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Tech Pulse',
    category: 'Mobile App',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Urban Edge',
    category: 'Brand Identity',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Digital Canvas',
    category: 'UI/UX Design',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Future Vision',
    category: 'Web Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1633218388467-539651dcf81a?w=800&h=600&fit=crop',
  },
];

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;

    if (section && scroll) {
      const scrollWidth = scroll.scrollWidth - window.innerWidth;

      gsap.to(scroll, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-dark"
    >
      <div className="absolute top-12 left-6 md:left-12 z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-gray-custom uppercase tracking-widest"
        >
          Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-section font-black tracking-tighter mt-2"
        >
          Selected<span className="text-accent">.</span>
        </motion.h2>
      </div>

      <div
        ref={scrollRef}
        className="flex items-center h-screen pt-32 gap-8 pl-6 md:pl-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] h-[60vh] group"
            data-cursor="View"
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl img-hover-zoom">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 rounded-full bg-accent flex items-center justify-center"
                >
                  <ArrowUpRight className="w-8 h-8 text-dark" />
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-accent mb-2">{project.category}</p>
                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                </div>
                <span className="text-gray-custom">{project.year}</span>
              </div>
            </div>

            {/* Project number */}
            <div className="absolute top-8 right-8">
              <span className="text-6xl font-black text-white/10">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        ))}

        <div className="flex-shrink-0 w-[30vw] h-[60vh] flex items-center justify-center">
          <motion.a
            href="#contact"
            className="text-2xl md:text-4xl font-bold text-gray-custom hover:text-accent transition-colors line-animation"
            whileHover={{ x: 20 }}
            data-cursor="Contact"
          >
            Start a Project →
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
