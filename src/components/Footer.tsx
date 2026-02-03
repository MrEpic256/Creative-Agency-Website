import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Dribbble, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'Work', 'Services', 'About', 'Contact'];
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
  ];

  return (
    <footer className="py-16 px-6 md:px-12 bg-dark border-t border-gray-custom/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-3xl font-black tracking-tighter"
            whileHover={{ scale: 1.05 }}
            data-cursor="Home"
          >
            PIXEL<span className="text-accent">.</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-custom hover:text-white transition-colors duration-300 line-animation"
                whileHover={{ y: -2 }}
                data-cursor={link}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-gray-custom/30 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-cursor={social.label}
                aria-label={social.label}
              >
                <social.icon size={18} className="text-gray-custom" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-custom/10">
          <p className="text-gray-custom text-sm">
            © 2026 Pixel Studio. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-custom hover:text-accent transition-colors duration-300"
            whileHover={{ y: -2 }}
            data-cursor="Top"
          >
            Back to Top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
