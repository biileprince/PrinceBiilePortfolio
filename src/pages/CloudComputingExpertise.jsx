import React from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import {
  FaAws,
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaUserCheck,
} from "react-icons/fa";
import Title from "./../components/Title";

const CloudComputingExpertise = () => {
  const cloudFeatures = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      des: "Certified in AWS fundamentals including global infrastructure, core services, and cloud concepts",
      icon: <FaAws className="text-4xl text-blue-400" />,
      concepts: [
        "EC2 Instances",
        "S3 Storage",
        "IAM Security",
        "Cloud Economics",
      ],
      certification: "AWS Certified Cloud Practitioner",
      date: "2024",
    },
    {
      id: 2,
      title: "Compute Services",
      des: "Deploying and managing virtual servers with EC2, serverless with Lambda, and container services",
      icon: <FaServer className="text-4xl text-blue-400" />,
      concepts: ["EC2", "Lambda", "Elastic Beanstalk", "ECS"],
      projects: ["Deployed web applications", "Serverless APIs"],
    },
    {
      id: 3,
      title: "Cloud Security",
      des: "Implementing IAM policies, security groups, encryption, and compliance best practices",
      icon: <FaShieldAlt className="text-4xl text-blue-400" />,
      concepts: ["IAM Roles", "Security Groups", "KMS", "WAF"],
      certification: "AWS re/Start Graduate",
      date: "2024",
    },
    {
      id: 4,
      title: "Networking",
      des: "Configuring VPCs, subnets, route tables, and content delivery networks",
      icon: <FaNetworkWired className="text-4xl text-blue-400" />,
      concepts: ["VPC", "Route 53", "CloudFront", "Direct Connect"],
      projects: ["Networked applications", "Content delivery solutions"],
    },
    {
      id: 5,
      title: "Storage Solutions",
      des: "Working with S3 buckets, EBS volumes, and archival storage options",
      icon: <FaDatabase className="text-4xl text-blue-400" />,
      concepts: ["S3", "EBS", "EFS", "Glacier"],
      projects: ["Static website hosting", "File storage systems"],
    },
    {
      id: 6,
      title: "Identity & Access",
      des: "Managing users, roles, and permissions with AWS Identity services",
      icon: <FaUserCheck className="text-4xl text-blue-400" />,
      concepts: ["IAM Users", "Policies", "MFA", "Roles"],
      certification: "AWS Security Best Practices",
      date: "2024",
    },
  ];

  return (
    <section id="cloud" className="w-full py-20 border-b border-slate-700/50">
      <Title
        title="Cloud Computing Expertise"
        des="AWS Certified Solutions & Services"
        align="center"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-8">
        {cloudFeatures.map((item, index) => (
          <motion.div
            key={item.id}
            initial={animations.scrollSlideUp.initial}
            whileInView={animations.scrollSlideUp.animate}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1 }}
          >
            <CloudFeatureCard item={item} />
          </motion.div>
        ))}
      </div>

      {/* AWS Skills Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-200">
                AWS re/Start Program Completion
              </h3>
              <p className="text-blue-400 mt-2">
                AmaliTech Training Program • 2024
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <FaAws className="text-4xl text-orange-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-blue-400 text-lg">Core AWS Services</div>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> EC2 Compute
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> S3 Storage
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> VPC Networking
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> IAM Security
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-blue-400 text-lg">Technical Skills</div>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Linux
                  Administration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Python Scripting
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Networking
                  Fundamentals
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Database
                  Concepts
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-blue-400 text-lg">Professional Skills</div>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Troubleshooting
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Agile
                  Methodology
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Technical
                  Documentation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Incident
                  Response
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CloudFeatureCard = ({ item }) => {
  return (
    <motion.div
      className="w-full h-full p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 
                border border-slate-700/50 transition-all duration-300 flex flex-col justify-between"
      whileHover={animations.hoverScale}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="text-blue-400">{item.icon}</div>
          {item.certification && (
            <span className="px-3 py-1 text-xs bg-blue-400/10 text-blue-400 rounded-full">
              Certified
            </span>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{item.title}</h2>
          <p className="text-slate-400 leading-relaxed">{item.des}</p>

          <div className="flex flex-wrap gap-2">
            {item.concepts.map((concept, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50">
        {item.certification ? (
          <div className="text-sm text-blue-400">
            <div className="font-medium">{item.certification}</div>
            <div className="text-slate-400 text-xs mt-1">
              Completed {item.date}
            </div>
          </div>
        ) : (
          <div className="text-sm text-blue-400">
            <span className="font-medium">Applied in:</span>{" "}
            <span className="text-slate-400">{item.projects.join(", ")}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CloudComputingExpertise;
