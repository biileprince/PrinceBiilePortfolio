// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaArrowRight } from "react-icons/fa";
import { animations } from "../utils/animations";
// import images from "../assets/Images";

const ProjectsCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="w-full p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 border border-slate-700/50 
                 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer"
      whileHover={animations.hoverScale}
    >
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <motion.img
          className="w-full h-full object-fit hover:scale-105 transition-transform"
          src={project.image}
          alt={project.title}
          onClick={onClick}
        />
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-slate-200">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <BsGithub className="text-xl text-slate-300 hover:text-white" />
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGlobe className="text-xl text-slate-300 hover:text-white" />
            </a>
          </div>
        </div>

        <p className="text-slate-400 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={onClick}
          className="w-full flex items-center justify-between group mt-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
        >
          <span className="text-blue-400 group-hover:text-blue-300">
            View Details
          </span>
          <FaArrowRight className="text-blue-400 group-hover:text-blue-300 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
