import React from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";

import {
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaRegClock,
  FaAws,
} from "react-icons/fa";
import { SiDocker, SiTerraform } from "react-icons/si";
import Title from "./../components/Title";

const CloudComputingExpertise = () => {
  const cloudFeatures = [
    {
      id: 1,
      title: "Cloud Fundamentals",
      des: "Understanding core cloud concepts: IaaS, PaaS, SaaS, and public/private/hybrid cloud models",
      icon: <FaCloud className="text-4xl text-blue-400" />,
      concepts: [
        "EC2 Instances",
        "S3 Storage",
        "VPC Networking",
        "CloudFormation",
      ],
      tip: "Start with AWS Free Tier for hands-on practice",
    },
    {
      id: 2,
      title: "Virtualization Basics",
      des: "Mastering hypervisors (Type 1/2), containers, and resource allocation strategies",
      icon: <FaServer className="text-4xl text-blue-400" />,
      concepts: ["EC2", "Lambda", "Docker", "Hyper-V"],
      tip: "Practice creating AMIs in AWS",
    },
    {
      id: 3,
      title: "Cloud Security",
      des: "Implementing IAM policies, security groups, and encryption best practices",
      icon: <FaShieldAlt className="text-4xl text-blue-400" />,
      concepts: ["IAM Roles", "KMS", "WAF", "Security Hub"],
      tip: "Follow least privilege principle",
    },
    {
      id: 4,
      title: "Networking Essentials",
      des: "Configuring VPCs, subnets, route tables, and load balancers",
      icon: <FaNetworkWired className="text-4xl text-blue-400" />,
      concepts: ["VPC", "Route 53", "CloudFront", "Direct Connect"],
      tip: "Use CIDR notation practice",
    },
    {
      id: 5,
      title: "Storage Solutions",
      des: "Working with S3 buckets, EBS volumes, and Glacier archival",
      icon: <FaDatabase className="text-4xl text-blue-400" />,
      concepts: ["S3 Classes", "EBS Types", "EFS", "Storage Gateway"],
      tip: "Understand durability vs availability",
    },
    {
      id: 6,
      title: "Auto Scaling",
      des: "Implementing load balancing and automatic resource scaling",
      icon: <FaRegClock className="text-4xl text-blue-400" />,
      concepts: ["Auto Scaling Groups", "ELB", "CloudWatch", "Spot Instances"],
      tip: "Master scaling policies configuration",
    },
  ];

  return (
    <section id="cloud" className="w-full py-20 border-b border-slate-700/50">
      <Title
        title="Cloud Computing"
        des="AWS Foundational Knowledge & Best Practices"
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

      {/* Learning Path */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">
            AWS Learning Path
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <FaAws className="text-xl" />
                <span className="text-lg">Core Services</span>
              </div>
              <p className="text-slate-400">
                EC2, S3, VPC, IAM, Lambda, CloudFormation
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <SiDocker className="text-xl" />
                <span className="text-lg">Containerization</span>
              </div>
              <p className="text-slate-400">
                ECS, ECR, EKS, Docker fundamentals
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <SiTerraform className="text-xl" />
                <span className="text-lg">Infrastructure as Code</span>
              </div>
              <p className="text-slate-400">Terraform, CloudFormation, CDK</p>
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
        <div className="text-blue-400">{item.icon}</div>

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
        <div className="text-sm text-blue-400 flex items-center gap-2">
          <span className="text-xs">💡 Study Tip:</span>
          {item.tip}
        </div>
      </div>
    </motion.div>
  );
};

export default CloudComputingExpertise;
