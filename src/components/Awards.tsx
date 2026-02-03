import { motion } from 'framer-motion';

const awards = [
  { name: 'Awwwards', count: '5x Site of the Day' },
  { name: 'CSS Design Awards', count: '8x Winner' },
  { name: 'FWA', count: '3x FWA of the Day' },
  { name: 'Webby Awards', count: '2x Honoree' },
  { name: 'The Drum', count: 'Best Digital Agency' },
  { name: 'Red Dot', count: 'Design Award 2023' },
];

const Awards = () => {
  const duplicatedAwards = [...awards, ...awards];

  return (
    <section className="py-24 bg-dark overflow-hidden border-y border-gray-custom/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm text-gray-custom uppercase tracking-widest">
            Awards
          </span>
          <h2 className="text-section font-black tracking-tighter mt-2">
            Recognition<span className="text-accent">.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedAwards.map((award, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 py-6 border-r border-gray-custom/10"
            >
              <div className="text-center min-w-[200px]">
                <p className="text-2xl md:text-3xl font-bold mb-2">{award.name}</p>
                <p className="text-accent text-sm">{award.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured clients */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 mt-20"
      >
        <p className="text-center text-gray-custom text-sm uppercase tracking-widest mb-8">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
          {['Google', 'Apple', 'Meta', 'Netflix', 'Spotify', 'Airbnb'].map((client) => (
            <motion.span
              key={client}
              className="text-2xl md:text-3xl font-bold text-gray-custom hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {client}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
