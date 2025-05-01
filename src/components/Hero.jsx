// components/Hero.jsx
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaPython,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiPython,
} from "react-icons/si";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";

import { TiVendorMicrosoft } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import images from "./../../public/images/Images";

const socialLinks = [
  { icon: FaFacebookF, link: "https://web.facebook.com/prince.biile/" },
  { icon: FaTwitter, link: "https://x.com/BiilePrince" },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/prince-biile-75343b244",
  },
  { icon: FaGithub, link: "https://github.com/biileprince" },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/princebiile?igsh=MTBrdWJtNW5peWQyNw==",
  },
];

const skillIcons = [
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPython,
  TiVendorMicrosoft,
  SiFigma,
];

const Hero = () => {
  const navigate = useNavigate();
  const [text] = useTypewriter({
    words: [
      "Aspiring Full Stack Developer",
      "Cloud Computing Learner",
      "Data Analyst",

      "Tech Enthusiast",

      "Lifelong Learner",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2500,
  });

  return (
    <section
      id="home"
      className="w-full pt-20 pb-24 px-4 sm:px-8 lg:px-16 border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left Content */}
        <motion.div
          initial={animations.slideInFromLeft.initial}
          animate={animations.slideInFromLeft.animate}
          transition={animations.slideInFromLeft.transition}
          className="w-full lg:w-1/2 flex flex-col gap-12"
        >
          <div className="flex flex-col gap-8">
            <h4 className="text-lg font-light text-slate-400 tracking-widest">
              WELCOME TO MY DIGITAL REALM
            </h4>

            <h1 className="text-5xl xl:text-6xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-400">Prince Yennuyar Biile</span>
            </h1>

            <h2 className="text-3xl xl:text-4xl font-semibold text-slate-300">
              A <span className="text-white">{text}</span>
              <Cursor cursorStyle="|" cursorColor="#60a5fa" />
            </h2>

            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              I'm a BSc. Information Technology student at the University of
              Cape Coast with a passion for full-stack development, data
              analysis, and cloud computing. I build intuitive, data-driven
              applications using React, Node.js, MongoDB, and Tailwind CSS. With
              a background in academic excellence and hands-on
              projects—including an automated student assessment system—I strive
              to solve real-world problems through clean code and practical
              solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4">
            <motion.a
              href="/public/PrinceBiile_CV.pdf"
              download
              whileHover={animations.hoverScalebtn}
              className="flex items-center gap-2 px-6 py-3 bg-blue-400/90 text-white rounded-lg
                         hover:bg-blue-400 transition-colors backdrop-blur-sm"
            >
              <FaFileDownload />
              Download CV
            </motion.a>
            <motion.button
              whileHover={animations.hoverScalebtn}
              className="flex items-center gap-2 px-6 py-3 border border-blue-400/50 text-blue-400
                         rounded-lg hover:border-blue-400 transition-colors backdrop-blur-sm"
              onClick={() => navigate("/contact")}
            >
              <FaPaperPlane />
              Get in Touch
            </motion.button>
          </div>

          {/* Social & Skills */}
          <div className="flex flex-col xl:flex-row gap-6  justify-between">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-slate-400 mb-4">
                Find me on
              </h2>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, link }, idx) => (
                  <motion.a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={animations.hoverScalebtn}
                    className="p-3 rounded-full backdrop-blur-lg bg-slate-700/50
                               border border-slate-600 text-slate-300 hover:text-white cursor-pointer"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider text-slate-400 mb-4">
                Top Expertise
              </h2>
              <div className="flex flex-wrap gap-4">
                {skillIcons.map((Icon, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={animations.hoverScale}
                    className="p-3 rounded-full backdrop-blur-lg bg-slate-700/50
                               border border-slate-600 text-slate-300 hover:text-white cursor-pointer"
                  >
                    <Icon />
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={animations.slideInFromRight.initial}
          animate={animations.slideInFromRight.animate}
          transition={animations.slideInFromRight.transition}
          className="w-full lg:w-1/2 flex justify-center items-center relative group"
        >
          <div className="relative z-10">
            <motion.img
              initial={animations.float.initial}
              animate={animations.float.animate}
              transition={animations.float.transition}
              loading="lazy"
              className="w-[300px] h-[400px] lg:w-[500px] lg:h-[680px] object-contain z-50"
              src={images.banner}
              alt="Profile Illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl -z-10" />
          </div>
          <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-slate-800 to-transparent rounded-xl shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
