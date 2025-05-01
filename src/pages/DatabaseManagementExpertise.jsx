import React from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";

import {
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaSync,
  FaChartBar,
  FaRegClock,
} from "react-icons/fa";
import { SiApachecassandra, SiRedis, SiPostgresql } from "react-icons/si";
import Title from "./../components/Title";

const DatabaseManagementExpertise = () => {
  const databaseFeatures = [
    {
      id: 1,
      title: "Relational Databases",
      des: "Enterprise-grade SQL solutions with ACID compliance and complex transaction support",
      icon: <SiPostgresql className="text-4xl text-blue-400" />,
      tech: ["PostgreSQL", "MySQL", "Oracle", "SQL Server"],
      metrics: "99.999% Availability",
    },
    {
      id: 2,
      title: "NoSQL Systems",
      des: "Scalable schema-less databases for unstructured data and high-velocity workloads",
      icon: <SiApachecassandra className="text-4xl text-blue-400" />,
      tech: ["Cassandra", "MongoDB", "Couchbase", "DynamoDB"],
      metrics: "1M+ Operations/sec",
    },
    {
      id: 3,
      title: "In-Memory Databases",
      des: "Real-time data processing with sub-millisecond response times",
      icon: <SiRedis className="text-4xl text-blue-400" />,
      tech: ["Redis", "Memcached", "Hazelcast", "Aerospike"],
      metrics: "500k TPS Capacity",
    },
    {
      id: 4,
      title: "Data Replication",
      des: "Multi-region synchronization with conflict resolution and failover mechanisms",
      icon: <FaSync className="text-4xl text-blue-400" />,
      tech: ["CDC", "Logical Replication", "Sharding", "Cluster Sync"],
      metrics: "<10ms Replication Lag",
    },
    {
      id: 5,
      title: "Security & Compliance",
      des: "Enterprise-grade security with RBAC, encryption, and audit trails",
      icon: <FaShieldAlt className="text-4xl text-blue-400" />,
      tech: ["TDE", "SSL", "VPC", "SOC2 Compliance"],
      metrics: "Zero Audit Findings",
    },
    {
      id: 6,
      title: "Performance Tuning",
      des: "Query optimization and index management for peak database performance",
      icon: <FaRegClock className="text-4xl text-blue-400" />,
      tech: ["Query Plan Analysis", "Index Optimization", "Partitioning"],
      metrics: "10x Query Speed Boost",
    },
  ];

  return (
    <section
      id="database"
      className="w-full py-20 border-b border-slate-700/50"
    >
      <Title
        title="Database Management"
        des="Enterprise Data Infrastructure Solutions"
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

      {/* Database Methodologies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">
            Core Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <FaServer className="text-xl" />
                <span className="text-lg">ACID Compliance</span>
              </div>
              <p className="text-slate-400">
                Atomicity, Consistency, Isolation, and Durability guarantees for
                critical transactions
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <FaChartBar className="text-xl" />
                <span className="text-lg">Horizontal Scaling</span>
              </div>
              <p className="text-slate-400">
                Sharding and clustering strategies for petabyte-scale datasets
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <FaDatabase className="text-xl" />
                <span className="text-lg">Disaster Recovery</span>
              </div>
              <p className="text-slate-400">
                Point-in-time recovery with RPO 1min and RTO 5min
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Database Feature Card Component
const DatabaseFeatureCard = ({ item }) => {
  return (
    <motion.div
      className="w-full h-full p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 
                border border-slate-700/50 transition-all duration-300 flex flex-col justify-between"
      whileHover={animations.hoverScale}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="text-blue-400">{item.icon}</div>
          <span className="px-3 py-1 text-xs bg-blue-400/10 text-blue-400 rounded-full">
            {item.metrics}
          </span>
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

      {/* Status Indicator */}
      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulsedatabase-management" />
          <span>Operational Excellence Certified</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DatabaseManagementExpertise;
