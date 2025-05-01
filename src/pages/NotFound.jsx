import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import { FaHome, FaFrown } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <motion.div
        className="text-center max-w-2xl px-4"
        initial={animations.fadeIn.initial}
        animate={animations.fadeIn.animate}
      >
        <div className="text-blue-400 text-9xl mb-4 flex justify-center">
          <FaFrown />
        </div>
        <h1 className="text-5xl font-bold text-slate-200 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-400/90 hover:bg-blue-400 
                    text-white rounded-lg transition-colors"
        >
          <FaHome className="mr-2" />
          Return Home
        </NavLink>
      </motion.div>
    </div>
  );
};

export default NotFound;
