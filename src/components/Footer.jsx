// src/components/Footer.jsx
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegEnvelope,
  FaCode,
} from "react-icons/fa";
import { navigationItems } from "../data/navItems";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/biileprince",
      label: "GitHub Profile",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/prince-biile-75343b244",
      label: "LinkedIn Profile",
    },
    {
      icon: FaTwitter,
      link: "https://x.com/BiilePrince",
      label: "Twitter Profile",
    },
  ];

  return (
    <motion.footer
      initial={animations.fadeIn.initial}
      whileInView={animations.fadeIn.animate}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="border-t border-slate-700/50 bg-slate-800/90 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div {...animations.scrollSlideUp}>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white flex items-center">
                <FaCode className="mr-2 text-blue-400" />
                Prince Y. Biile
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-stack developer specializing in modern web technologies and
              cloud solutions. Turning ideas into functional digital
              experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...animations.scrollSlideUp} className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {item.title}
                </Link>
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
                <a
                  href="mailto:biileprinceyennuyar5@gmail.com"
                  className="text-sm"
                >
                  biileprinceyennuyar5@gmail.com
                </a>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={animations.hoverScale}
                    className="p-2 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 hover:text-white"
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          {...animations.fadeUp}
          className="border-t border-slate-700/50 pt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            © {currentYear} Prince Yennuyar Biile. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
