import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { animations } from "../utils/animations";
import ProjectsCard from "./ProjectCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setFeaturedProjects(data.slice(0, 6));
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="text-center py-12 text-slate-400">
        Loading featured projects...
      </div>
    );

  return (
    <section className="w-full py-12 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="Explore My Work" des="Featured Projects" align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={animations.scrollSlideUp.initial}
              whileInView={animations.scrollSlideUp.animate}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectsCard
                project={project}
                onClick={() => navigate(`/projects/${project.id}`)}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mb-8 mt-8 font-bold">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-center"
          >
            View All Projects
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
