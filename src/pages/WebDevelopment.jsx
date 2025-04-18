import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";

// Web Development specific icons
import { FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiGraphql } from "react-icons/si";
import Title from "./../components/Title";
import FeatureCard from "./../components/FeatureCard";

const WebDevelopmentExpertise = () => {
  const [webFeatures, setWebFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Web development specific features data
  const webDevelopmentFeatures = [
    {
      id: 1,
      title: "Frontend Development",
      des: "Building responsive, accessible, and performant user interfaces with modern frameworks",
      icon: <FaReact className="text-4xl text-blue-400" />,
      path: "/expertise/frontend",
      tech: ["React", "Next.js", "TypeScript"],
    },
    {
      id: 2,
      title: "Backend Systems",
      des: "Scalable server-side solutions with optimized database architectures",
      icon: <FaNodeJs className="text-4xl text-blue-400" />,
      path: "/expertise/backend",
      tech: ["Node.js", "GraphQL", "REST APIs"],
    },
    {
      id: 3,
      title: "Full Stack Solutions",
      des: "End-to-end web applications with seamless frontend-backend integration",
      icon: <FaCode className="text-4xl text-blue-400" />,
      path: "/expertise/fullstack",
      tech: ["Next.js", "TypeScript", "Prisma"],
    },
    {
      id: 4,
      title: "Web Architecture",
      des: "Designing robust application architectures and cloud infrastructure",
      icon: <FaDatabase className="text-4xl text-blue-400" />,
      path: "/expertise/architecture",
      tech: ["AWS", "Microservices", "Docker"],
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setWebFeatures(webDevelopmentFeatures);
      setLoading(false);
    }, 800);
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  if (loading)
    return (
      <div className="text-center text-slate-400 py-20">
        Loading web development expertise...
      </div>
    );

  if (error)
    return <div className="text-center text-red-400 py-20">Error: {error}</div>;

  return (
    <section
      id="web-development"
      className="w-full py-20 border-b border-slate-700/50"
    >
      <Title
        title="Web Development"
        des="Core Expertise in Modern Web Solutions"
        align="center"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4 sm:px-8">
        {webFeatures.map((item, index) => (
          <motion.div
            key={item.id}
            initial={animations.scrollSlideUp.initial}
            whileInView={animations.scrollSlideUp.animate}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureCard
              item={item}
              onClick={() => handleCardClick(item.path)}
              techStack={item.tech}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WebDevelopmentExpertise;
