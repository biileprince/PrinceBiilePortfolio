// src/data/resumeData.js
import {
  FaGraduationCap,
  FaFileAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaAws,
  FaJava,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

export const education = [
  {
    id: 1,
    title: "BSc Information Technology",
    subTitle: "University of Cape Coast",
    period: "2022 - Present",
    details: [
      "Level 300: UNIX Programming, Network Computing II, Management Support Systems, Human-Computer Interface",
      "Level 200: Web Technology I & II, Database Management, Algorithms, Object-Oriented Programming",
      "Level 100: Programming Fundamentals, Computer Hardware, Mathematics for Computing",
      "Maintained Dean's List standing with First Class honors",
    ],
    icon: <FaGraduationCap />,
    result: "First Class Honors",
  },
  {
    id: 2,
    title: "AWS re/Start Graduate",
    subTitle: "Amazon Web Services (AWS)",
    period: "2024",
    details: [
      "Intensive 12-week cloud computing program focused on AWS services",
      "Hands-on experience with EC2, S3, Lambda, IAM, and VPC",
      "Prepared for AWS Cloud Practitioner certification",
      "Developed solutions for real-world cloud deployment scenarios",
    ],
    icon: <FaAws />,
    result: "Certified Cloud Practitioner",
  },
  {
    id: 3,
    title: "Senior Secondary Certificate",
    subTitle: "Walewale Senior High School",
    period: "2018 – 2021",
    details: [
      "Graduated with honors in General Science program",
      "Served as Health Prefect managing school health initiatives",
      "Awarded Best Instrumentalist and MC for Red Cross Society",
      "Developed leadership and organizational skills",
    ],
    icon: <FaGraduationCap />,
    result: "Honors Graduate",
  },
];

export const experience = [
  {
    id: 1,
    title: "Student Assessment Automation System",
    subTitle: "Private School Project",
    period: "2023",
    details: [
      "Designed and implemented automated report generation system for K-JHS3",
      "Utilized Excel formulas and Word Mail Merge to process 500+ student records",
      "Reduced report preparation time by 90% and eliminated manual errors",
      "Created user-friendly templates for teachers to input assessment data",
    ],
    icon: <FaFileAlt />,
    result: "Excel Automation",
  },
  {
    id: 2,
    title: "Full-Stack Web Applications",
    subTitle: "Personal & Academic Projects",
    period: "2022 – Present",
    details: [
      "Developed responsive web applications using MERN stack (MongoDB, Express, React, Node.js)",
      "Implemented user authentication systems with JWT and OAuth",
      "Created RESTful APIs for data management and integration",
      "Designed responsive UIs with Tailwind CSS and Bootstrap",
    ],
    icon: <FaReact />,
    result: "MERN Stack",
  },
  {
    id: 3,
    title: "Cloud Deployment Projects",
    subTitle: "AWS re/Start Program",
    period: "2024",
    details: [
      "Deployed scalable applications on AWS infrastructure",
      "Configured EC2 instances and S3 buckets for web hosting",
      "Implemented serverless functions using AWS Lambda",
      "Set up monitoring with CloudWatch and security with IAM policies",
    ],
    icon: <FaCloud />,
    result: "AWS Services",
  },
];

export const skills = {
  cloud: [
    { name: "AWS EC2/S3", level: 85 },
    { name: "Serverless Architecture", level: 80 },
    { name: "Cloud Security", level: 75 },
    { name: "Cloud Deployment", level: 80 },
  ],
  development: [
    { name: "JavaScript/React", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "MongoDB/Database", level: 80 },
    { name: "HTML/CSS/Tailwind", level: 95 },
  ],
  programming: [
    { name: "Python", level: 75 },
    { name: "Java", level: 80 },
    { name: "C++", level: 75 },
    { name: "PHP/Laravel", level: 70 },
  ],
  soft: [
    { name: "Problem Solving", level: 95 },
    { name: "Technical Communication", level: 90 },
    { name: "Project Management", level: 85 },
    { name: "Agile Methodology", level: 80 },
  ],
};

export const achievements = [
  {
    id: 1,
    year: "2024",
    title: "AWS Certified Cloud Practitioner",
    des: "Earned official AWS certification demonstrating cloud infrastructure knowledge",
    icon: <FaAws />,
  },
  {
    id: 2,
    year: "2024",
    title: "Google Cybersecurity Scholar",
    des: "Completed Google Career Certificate in Cybersecurity with focus on threat analysis",
    //cybersecurity react icon

    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    year: "2023",
    title: "Dean's List Honors",
    des: "Achieved First Class academic standing in Level 100-300 coursework",
    icon: <FaGraduationCap />,
  },
  {
    id: 4,
    year: "2023",
    title: "Programming Hub Certifications",
    des: "Certified in JavaScript, C++, Web Development, and Advanced C++ programming",
    icon: <TbBrandJavascript />,
  },
];
