import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-gray-custom uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-section font-black tracking-tighter mt-2 mb-6">
              Let's Work<br />
              <span className="text-accent">Together</span>
            </h2>

            <p className="text-gray-custom text-lg mb-12 max-w-md">
              Got a project in mind? We'd love to hear about it. Drop us a line and let's create something amazing together.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:hello@pixelstudio.com"
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                data-cursor="Email"
              >
                <div className="w-14 h-14 rounded-full border border-gray-custom/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Mail className="w-6 h-6 text-gray-custom group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-custom">Email us</p>
                  <p className="text-lg font-medium group-hover:text-accent transition-colors">
                    hello@pixelstudio.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 rounded-full border border-gray-custom/30 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gray-custom" />
                </div>
                <div>
                  <p className="text-sm text-gray-custom">Call us</p>
                  <p className="text-lg font-medium">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 rounded-full border border-gray-custom/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gray-custom" />
                </div>
                <div>
                  <p className="text-sm text-gray-custom">Visit us</p>
                  <p className="text-lg font-medium">123 Creative Street, NY 10001</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-custom mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-gray-custom/20 rounded-xl focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-custom"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-custom mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-gray-custom/20 rounded-xl focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-custom"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm text-gray-custom mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-gray-custom/20 rounded-xl focus:border-accent focus:outline-none transition-colors text-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="branding">Brand Identity</option>
                  <option value="web">Web Design</option>
                  <option value="app">Mobile App</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-custom mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-white/5 border border-gray-custom/20 rounded-xl focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-custom resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-5 bg-accent text-dark font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="Send"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
