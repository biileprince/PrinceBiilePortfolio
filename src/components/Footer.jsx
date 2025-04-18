// src/components/Footer.jsx
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegEnvelope,
  FaRocket,
} from "react-icons/fa";
import { navigationItems } from "../data/navItems";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={animations.fadeIn.initial}
      whileInView={animations.fadeIn.animate}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="border-t border-slate-700/50 bg-slate-800/90 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div {...animations.scrollSlideUp}>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white flex items-center">
                <FaRocket className="mr-2 text-blue-400" />
                DevPort
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting digital experiences through innovative development and
              thoughtful design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...animations.scrollSlideUp} className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...animations.scrollSlideUp} className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h3>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400 hover:text-white transition-colors">
                <FaRegEnvelope className="mr-2" />
                <a href="mailto:hello@devport.com" className="text-sm">
                  hello@devport.com
                </a>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                {[
                  { icon: FaGithub, link: "#" },
                  { icon: FaLinkedin, link: "#" },
                  { icon: FaTwitter, link: "#" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={animations.hoverScale}
                    className="p-2 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 hover:text-white"
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div {...animations.scrollSlideUp} className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Newsletter
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-400/90 text-white rounded-lg hover:bg-blue-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          {...animations.fadeUp}
          className="border-t border-slate-700/50 pt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            © {currentYear} DevPort. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
