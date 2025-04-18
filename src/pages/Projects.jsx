import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import { animations } from "../utils/animations";
import Title from "../components/Title";
import ProjectsCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const projectsPerPage = 5;

  const fuse = new Fuse(projects, {
    keys: ["title", "description", "techStack", "tags"],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    let result = [...projects];

    if (searchQuery) {
      result = fuse.search(searchQuery).map(({ item }) => item);
    }

    if (selectedTags.length > 0) {
      result = result.filter((project) =>
        selectedTags.every((tag) => project.tags?.includes(tag))
      );
    }

    if (selectedTech.length > 0) {
      result = result.filter((project) =>
        selectedTech.every((tech) => project.techStack.includes(tech))
      );
    }

    setFilteredProjects(result);
    setCurrentPage(1);
  }, [searchQuery, selectedTags, selectedTech, projects]);

  // Pagination calculations
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Filter helpers
  const allTags = [...new Set(projects.flatMap((p) => p.tags || []))];
  const allTech = [...new Set(projects.flatMap((p) => p.techStack))];

  const toggleFilter = (value, type) => {
    const setter = type === "tag" ? setSelectedTags : setSelectedTech;
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const navigate = useNavigate();
  return (
    <section
      id="projects"
      className="w-full py-20 border-b border-slate-700/50"
    >
      <Title
        title="Project Archive"
        des="Explore All Projects"
        align="center"
      />

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-8">
        <motion.div
          {...animations.fadeIn}
          className="relative max-w-3xl mx-auto"
        >
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full  px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 
                     placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div {...animations.fadeIn} className="space-y-4">
            <h3 className="text-slate-400 text-sm font-medium">
              Project Types:
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleFilter(tag, "tag")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-blue-400/10 text-blue-400"
                      : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/30"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div {...animations.fadeIn} className="space-y-4">
            <h3 className="text-slate-400 text-sm font-medium">
              Technologies:
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTech.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech, "tech")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTech.includes(tech)
                      ? "bg-blue-400/10 text-blue-400"
                      : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/30"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 px-4 sm:px-8">
        {currentProjects.map((project, index) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          {...animations.fadeIn}
          className="flex justify-center mt-12"
        >
          <nav className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === number
                      ? "bg-blue-400 text-white"
                      : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/30"
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </nav>
        </motion.div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          {...animations.fadeIn}
          className="text-center py-12 text-slate-500"
        >
          No projects found matching your criteria
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
