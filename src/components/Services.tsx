import { motion } from 'framer-motion';
import { Palette, Monitor, LineChart, Figma } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description: 'Creating unique and memorable brand identities that resonate with your target audience and stand out in the market.',
    icon: Palette,
  },
  {
    number: '02',
    title: 'Web Design',
    description: 'Designing modern, responsive websites that deliver exceptional user experiences and drive business results.',
    icon: Monitor,
  },
  {
    number: '03',
    title: 'Digital Strategy',
    description: 'Developing comprehensive digital strategies that align with your business goals and maximize your online presence.',
    icon: LineChart,
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description: 'Crafting intuitive user interfaces and seamless experiences that delight users and keep them coming back.',
    icon: Figma,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-sm text-gray-custom uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-section font-black tracking-tighter mt-2">
            What We Do<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="group relative p-8 md:p-12 border border-gray-custom/20 rounded-2xl hover:border-accent/50 transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent"
              data-cursor="Learn More"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl md:text-7xl font-black text-white/5 group-hover:text-accent/20 transition-colors duration-500">
                  {service.number}
                </span>
                <div className="w-14 h-14 rounded-full border border-gray-custom/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-gray-custom group-hover:text-accent transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>

              <p className="text-gray-custom leading-relaxed">
                {service.description}
              </p>

              <motion.div
                className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-dark font-bold">→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
