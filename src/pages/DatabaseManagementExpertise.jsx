import React from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import { FaDatabase, FaServer, FaCode, FaFileExcel } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import Title from "./../components/Title";

const DatabaseManagementExpertise = () => {
  const databaseFeatures = [
    {
      id: 1,
      title: "SQL Databases",
      des: "Designing and implementing relational databases with proper normalization and efficient querying",
      icon: <SiMysql className="text-4xl text-blue-400" />,
      tech: ["MySQL", "PostgreSQL", "SQLite", "MS Access"],
      projects: [
        "University course projects",
        "Database Management coursework",
      ],
    },
    {
      id: 2,
      title: "NoSQL Systems",
      des: "Working with document-based databases for flexible data structures in web applications",
      icon: <SiMongodb className="text-4xl text-blue-400" />,
      tech: ["MongoDB", "Mongoose ODM", "Atlas Cloud", "CRUD Operations"],
      projects: ["Full-stack applications", "University projects"],
    },
    {
      id: 3,
      title: "Database Design",
      des: "Creating efficient database schemas with proper relationships and normalization",
      icon: <FaDatabase className="text-4xl text-blue-400" />,
      tech: ["ER Modeling", "Normalization", "Schema Design", "Indexing"],
      projects: ["Academic projects", "Web application backends"],
    },
    {
      id: 4,
      title: "Data Automation",
      des: "Building data processing systems with Excel and automation tools",
      icon: <FaFileExcel className="text-4xl text-blue-400" />,
      tech: ["Excel Formulas", "VBA", "Mail Merge", "Data Transformation"],
      projects: ["Student Assessment System", "Grade automation"],
    },
    {
      id: 5,
      title: "Backend Integration",
      des: "Connecting databases to Node.js applications with proper API design",
      icon: <FaServer className="text-4xl text-blue-400" />,
      tech: ["Node.js", "Express", "REST APIs", "Mongoose"],
      projects: ["MERN stack applications", "University assignments"],
    },
    {
      id: 6,
      title: "Data Management",
      des: "Implementing CRUD operations and data validation in applications",
      icon: <FaCode className="text-4xl text-blue-400" />,
      tech: [
        "CRUD Operations",
        "Data Validation",
        "Error Handling",
        "API Design",
      ],
      projects: ["Full-stack projects", "Academic implementations"],
    },
  ];

  return (
    <section
      id="database"
      className="w-full py-20 border-b border-slate-700/50"
    >
      <Title
        title="Data Management Skills"
        des="Database Design & Implementation"
        align="center"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-8">
        {databaseFeatures.map((item, index) => (
          <motion.div
            key={item.id}
            initial={animations.scrollSlideUp.initial}
            whileInView={animations.scrollSlideUp.animate}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1 }}
          >
            <DatabaseFeatureCard item={item} />
          </motion.div>
        ))}
      </div>

      {/* Database Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">
            Core Database Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">ACID Compliance</div>
              <p className="text-slate-400">
                Ensuring data integrity through Atomicity, Consistency,
                Isolation, and Durability
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-blue-400 text-lg">Normalization</div>
              <p className="text-slate-400">
                Structuring databases to reduce redundancy and improve data
                integrity
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-blue-400 text-lg">CRUD Operations</div>
              <p className="text-slate-400">
                Implementing Create, Read, Update, and Delete functionality in
                applications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DatabaseFeatureCard = ({ item }) => {
  return (
    <motion.div
      className="w-full h-full p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 
                border border-slate-700/50 transition-all duration-300 flex flex-col justify-between"
      whileHover={animations.hoverScale}
    >
      <div className="space-y-6">
        <div className="text-blue-400">{item.icon}</div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{item.title}</h2>
          <p className="text-slate-400 leading-relaxed">{item.des}</p>

          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project References */}
      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <p className="text-sm text-slate-400">
          <span className="text-blue-400">Applied in:</span>{" "}
          {item.projects.join(", ")}
        </p>
      </div>
    </motion.div>
  );
};

export default DatabaseManagementExpertise;
