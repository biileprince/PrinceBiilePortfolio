import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import { BsGithub } from "react-icons/bs";
import { FaArrowLeft, FaGlobe } from "react-icons/fa";

const ProjectDetails = () => {
  const project = useLoaderData();
  const navigate = useNavigate();
  return (
    <motion.div
      {...animations.scrollZoomIn}
      className="max-w-6xl mx-auto p-6 pb-20"
    >
      <motion.div {...animations.fadeUp} className="mb-12 text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-300 hover:text-slate-200 transition-colors group 
          cursor-pointer hover:underline"
        >
          <FaArrowLeft
            className=" text-blue-400 group-hover:text-blue-300 transform group-hover:translate-x-1 transition-transform 
            text-2xl"
          />
          Back To Projects
        </button>
        <h1 className="text-4xl font-bold text-slate-200 mb-4 mt-5">
          {project.title}
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          {project.description}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div {...animations.scrollSlideLeft} className="space-y-6">
          <img
            src={`.${project.image}`}
            alt={project.title}
            className="rounded-xl shadow-xl w-full h-96 object-cover"
          />
          <div className="flex gap-4 justify-center">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-400/10 text-blue-400 rounded-lg hover:bg-blue-400/20 transition-colors"
            >
              <BsGithub /> GitHub
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-400/10 text-blue-400 rounded-lg hover:bg-blue-400/20 transition-colors"
            >
              <FaGlobe /> Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div {...animations.scrollSlideRight} className="space-y-8">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-slate-200 mb-4">
              Features
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-slate-400">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-slate-200 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-700/50 rounded-full text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
