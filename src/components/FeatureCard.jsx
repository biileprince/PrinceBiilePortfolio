import { animations, motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const FeatureCard = ({ item, onClick, techStack }) => {
  return (
    <motion.div
      className="w-full h-80 p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 
                border border-slate-700/50 cursor-pointer group hover:bg-slate-800/70 
                transition-all duration-300 flex flex-col justify-between"
      whileHover={animations.hoverScale}
    >
      <div className="space-y-6">
        <div className="text-blue-400">{item.icon}</div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{item.title}</h2>
          <p className="text-slate-400 leading-relaxed line-clamp-4">
            {item.des}
          </p>

          {techStack && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-blue-400 mt-4">
        <Link
          to={item.path}
          onClick={(e) => e.stopPropagation()}
          className="text-sm hover:text-blue-300 transition-colors"
        >
          Explore Expertise
        </Link>
        <HiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
