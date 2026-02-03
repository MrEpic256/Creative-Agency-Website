import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-black tracking-tighter z-[101]"
            whileHover={{ scale: 1.05 }}
            data-cursor="Home"
          >
            PIXEL<span className="text-accent">.</span>
          </motion.a>

          <motion.button
            className="z-[101] flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-cursor="Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="block w-8 h-0.5 bg-white"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-8 h-0.5 bg-white"
              animate={{
                opacity: isOpen ? 0 : 1,
                x: isOpen ? 20 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-8 h-0.5 bg-white"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay flex items-center justify-center"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full py-32">
              <div className="flex flex-col gap-4 md:gap-6">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    onClick={handleLinkClick}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter hover:text-accent transition-colors duration-300 line-animation"
                    data-cursor="Go"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="flex flex-col items-start md:items-end gap-8 mt-12 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-gray-custom">
                  <p className="text-sm uppercase tracking-widest mb-2">Get in touch</p>
                  <a
                    href="mailto:hello@pixelstudio.com"
                    className="text-xl md:text-2xl text-white hover:text-accent transition-colors"
                    data-cursor="Email"
                  >
                    hello@pixelstudio.com
                  </a>
                </div>

                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-full border border-gray-custom/30 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
