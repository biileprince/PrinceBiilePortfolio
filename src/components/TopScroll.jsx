import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { animations } from "../utils/animations";

const TopScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      className={`fixed bottom-20 sm:bottom-8 right-8 p-3 rounded-full bg-blue-400/90 hover:bg-blue-400 
                text-white shadow-lg transition-colors z-50 ${
                  !isVisible && "hidden"
                }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      {...animations.scrollSlideUp}
    >
      <FiArrowUp className="text-xl" />
    </motion.button>
  );
};

export default TopScroll;
