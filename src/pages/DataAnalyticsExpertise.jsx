import React from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import {
  FaChartLine,
  FaDatabase,
  FaPython,
  FaRegLightbulb,
  FaFileExcel,
  FaUniversity,
} from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";

import Title from "./../components/Title";

const DataAnalyticsExpertise = () => {
  const dataAnalyticsFeatures = [
    {
      id: 1,
      title: "Data Visualization",
      des: "Creating insightful visualizations to communicate findings using Excel and BI tools",
      icon: <FaChartLine className="text-4xl text-blue-400" />,
      tech: ["Excel", "Power BI", "Matplotlib", "Seaborn"],
      projects: [
        "Student assessment reports",
        "Academic performance dashboards",
      ],
    },
    {
      id: 2,
      title: "Data Processing",
      des: "Cleaning and preparing data for analysis using Python and SQL",
      icon: <FaDatabase className="text-4xl text-blue-400" />,
      tech: ["Python", "Pandas", "NumPy", "SQL"],
      projects: ["Data cleaning for academic projects", "Database management"],
    },
    {
      id: 3,
      title: "Statistical Analysis",
      des: "Applying statistical methods to derive insights from academic and personal projects",
      icon: <FaPython className="text-4xl text-blue-400" />,
      tech: ["Statistical Modeling", "Forecasting Methods", "Regression"],
      projects: [
        "University coursework projects",
        "Statistical modeling assignments",
      ],
    },
    {
      id: 4,
      title: "Excel Automation",
      des: "Developing automated solutions for data processing and reporting",
      icon: <FaFileExcel className="text-4xl text-blue-400" />,
      tech: ["VBA", "Formulas", "PivotTables", "Mail Merge"],
      projects: ["Student report automation", "Grade calculation systems"],
    },
    {
      id: 5,
      title: "Academic Analytics",
      des: "Applying data analysis techniques to educational datasets and coursework",
      icon: <FaUniversity className="text-4xl text-blue-400" />,
      tech: [
        "Educational Data Mining",
        "Course Analysis",
        "Performance Tracking",
      ],
      projects: ["University course projects", "Learning analytics"],
    },
    {
      id: 6,
      title: "Predictive Modeling",
      des: "Building basic predictive models using Python libraries",
      icon: <FaRegLightbulb className="text-4xl text-blue-400" />,
      tech: ["Scikit-learn", "Basic ML Algorithms", "Model Evaluation"],
      projects: ["Academic forecasting projects", "Course prediction models"],
    },
  ];

  return (
    <section
      id="data-analytics"
      className="w-full py-20 border-b border-slate-700/50"
    >
      <Title
        title="Data Analytics Skills"
        des="Transforming Data into Insights"
        align="center"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-8">
        {dataAnalyticsFeatures.map((item, index) => (
          <motion.div
            key={item.id}
            initial={animations.scrollSlideUp.initial}
            whileInView={animations.scrollSlideUp.animate}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1 }}
          >
            <EnhancedFeatureCard item={item} />
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">
            Core Methodologies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">
                ✓ Data Cleaning Process
              </div>
              <p className="text-slate-400">
                Handling missing values, outlier detection, and data
                normalization
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">
                ✓ Exploratory Analysis
              </div>
              <p className="text-slate-400">
                Using descriptive statistics and visualization to understand
                data patterns
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">
                ✓ Basic Predictive Modeling
              </div>
              <p className="text-slate-400">
                Implementing regression and classification models with
                Scikit-learn
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skill Progression */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">
            Skill Development Path
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Python Data Analysis</span>
                <span className="text-slate-400">Intermediate</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                <div
                  className="bg-blue-400 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Excel & Power BI</span>
                <span className="text-slate-400">Advanced</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                <div
                  className="bg-blue-400 h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Statistical Analysis</span>
                <span className="text-slate-400">Intermediate</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                <div
                  className="bg-blue-400 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Database Management</span>
                <span className="text-slate-400">Intermediate</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                <div
                  className="bg-blue-400 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Feature Card Component
const EnhancedFeatureCard = ({ item }) => {
  return (
    <motion.div
      className="w-full h-full p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 
                border border-slate-700/50 cursor-pointer group hover:bg-slate-800/70 
                transition-all duration-300 flex flex-col justify-between"
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

      {item.projects && (
        <div className="mt-6 pt-4 border-t border-slate-700/50">
          <h4 className="text-sm font-medium text-slate-300 mb-2">
            Applied in:
          </h4>
          <ul className="text-xs text-slate-400 space-y-1">
            {item.projects.map((project, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-1">•</span> {project}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default DataAnalyticsExpertise;
