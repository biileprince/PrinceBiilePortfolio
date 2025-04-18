import React from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";

import {
  FaChartLine,
  FaDatabase,
  FaPython,
  FaCloudscale,
  FaRegLightbulb,
} from "react-icons/fa";
import { SiApachespark, SiTableau, SiSnowflake } from "react-icons/si";
import Title from "../components/Title";

const DataAnalyticsExpertise = () => {
  const dataAnalyticsFeatures = [
    {
      id: 1,
      title: "Advanced Data Visualization",
      des: "Transform raw data into actionable insights through interactive dashboards and real-time reporting systems",
      icon: <FaChartLine className="text-4xl text-blue-400" />,
      path: "/analytics/visualization",
      tech: ["Tableau", "Power BI", "D3.js", "Plotly"],
      metrics: "40% faster decision-making cycle",
    },
    {
      id: 2,
      title: "Predictive Analytics",
      des: "Machine learning models for forecasting and pattern recognition with 92% accuracy rate",
      icon: <FaPython className="text-4xl text-blue-400" />,
      path: "/analytics/predictive",
      tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      metrics: "30% reduction in operational costs",
    },
    {
      id: 3,
      title: "Big Data Processing",
      des: "Scalable data pipelines handling 1M+ events/sec with real-time stream processing",
      icon: <SiApachespark className="text-4xl text-blue-400" />,
      path: "/analytics/big-data",
      tech: ["Spark", "Hadoop", "Kafka", "Flink"],
      metrics: "10x processing speed improvement",
    },
    {
      id: 4,
      title: "Business Intelligence",
      des: "Enterprise-grade BI solutions with automated KPI tracking and anomaly detection",
      icon: <FaRegLightbulb className="text-4xl text-blue-400" />,
      path: "/analytics/bi",
      tech: ["Looker", "Metabase", "Redash", "Superset"],
      metrics: "25% increase in operational efficiency",
    },
    {
      id: 5,
      title: "Cloud Analytics",
      des: "Modern data lakehouse architectures with petabyte-scale storage capabilities",
      icon: <FaCloudscale className="text-4xl text-blue-400" />,
      path: "/analytics/cloud",
      tech: ["Snowflake", "BigQuery", "Redshift", "Databricks"],
      metrics: "60% reduction in storage costs",
    },
    {
      id: 6,
      title: "Data Warehousing",
      des: "Optimized OLAP systems supporting complex analytical queries",
      icon: <SiSnowflake className="text-4xl text-blue-400" />,
      path: "/analytics/warehousing",
      tech: ["Snowflake", "BigQuery", "Redshift", "PostgreSQL"],
      metrics: "99.9% query success rate",
    },
  ];

  return (
    <section
      id="data-analytics"
      className="w-full py-20 border-b border-slate-700/50"
    >
      <Title
        title="Data Analytics & Insights"
        des="Transforming Data into Strategic Assets"
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
            <EnhancedFeatureCard item={item} metrics={item.metrics} />
          </motion.div>
        ))}
      </div>

      {/* Additional Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">
            Methodologies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">✓ CRISP-DM Framework</div>
              <p className="text-slate-400">
                Structured approach for data mining projects ensuring business
                relevance
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">✓ Agile Analytics</div>
              <p className="text-slate-400">
                Iterative development of analytical solutions with bi-weekly
                deliverables
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">✓ DataOps Practices</div>
              <p className="text-slate-400">
                CI/CD pipelines for analytics with automated testing and
                deployment
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Feature Card Component
const EnhancedFeatureCard = ({ item, metrics }) => {
  return (
    <motion.div
      className="w-full h-full p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 
                border border-slate-700/50 cursor-pointer group hover:bg-slate-800/70 
                transition-all duration-300 flex flex-col justify-between"
      whileHover={animations.hoverScale}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="text-blue-400">{item.icon}</div>
          {metrics && (
            <span className="px-3 py-1 text-xs bg-blue-400/10 text-blue-400 rounded-full">
              {metrics}
            </span>
          )}
        </div>

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

      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <button className="w-full flex items-center justify-between group text-blue-400 hover:text-blue-300">
          <span className="text-sm">View Case Studies</span>
          <span className="transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default DataAnalyticsExpertise;
