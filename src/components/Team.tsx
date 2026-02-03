import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Alex Morgan',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'Marcus Johnson',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'Emily Davis',
    role: 'UX Strategist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'David Kim',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'Lisa Wang',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm text-gray-custom uppercase tracking-widest">
            The Team
          </span>
          <h2 className="text-section font-black tracking-tighter mt-2">
            Our Creative<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              data-cursor={member.name}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Social links */}
                <motion.div
                  className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <a
                    href={member.social.instagram}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-300"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </motion.div>

                {/* Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
