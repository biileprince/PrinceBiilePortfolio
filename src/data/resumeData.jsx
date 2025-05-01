// src/data/resumeData.js
import {
  FaGraduationCap,
  FaFileAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaJsSquare,
  FaMicrosoft,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const education = [
  {
    id: 1,
    title: "BSc Information Technology",
    subTitle: "University of Cape Coast (2022 – Present)",
    result: "Level 300, 2nd Sem (17 cr) | Dean's List Honoree",
    des: [
      "Current Courses: UNIX Programming, Network Computing II, Management Support Systems",
      "Level 200: Web Technology I & II, Database Management, Algorithms, OOP",
      "Level 100: Programming Fundamentals, Computer Hardware, Mathematics for Computing",
    ].join(" "),
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "Senior Secondary Certificate (SSCE)",
    subTitle: "Walewale Senior High School (2018 – 2021)",
    result: "Graduated with Honors | Health Prefect",
    des: "Demonstrated leadership managing school health programs and initiatives",
    icon: <FaGraduationCap />,
  },
];

export const experience = [
  {
    id: 1,
    title: "Student Assessment Automation System",
    subTitle: "Private School Project",
    result: "Excel + Word MailMerge | 90% Time Savings",
    des: "Developed automated terminal report generation system for KG-JHS3 using advanced Excel formulas and Word integration, eliminating manual errors",
    icon: <FaMicrosoft />,
  },
  {
    id: 2,
    title: "Full-Stack Web Applications",
    subTitle: "Personal & Academic Projects",
    result: "MERN Stack | Tailwind CSS",
    des: "Built responsive web applications using React, Node.js, Express, MongoDB, and modern CSS frameworks with features like user authentication and REST APIs",
    icon: <FaReact />,
  },
];

export const skills = {
  technical: [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js/Express", level: 80 },
    { name: "MongoDB/SQL", level: 80 },
    { name: "C++/Python", level: 75 },
    { name: "UNIX/Linux", level: 70 },
    { name: "Microsoft Office Suite", level: 95 },
  ],
  design: [
    { name: "Responsive Design", level: 85 },
    { name: "UI/UX Principles", level: 75 },
    { name: "Figma", level: 70 },
  ],
  soft: [
    { name: "Problem Solving", level: 95 },
    { name: "Academic Research", level: 90 },
    { name: "Team Leadership", level: 85 },
    { name: "Time Management", level: 90 },
  ],
};

export const achievements = [
  {
    id: 1,
    year: "2024",
    title: "AWS re/Start Program Candidate",
    des: "Selected for intensive AWS cloud computing training program with AmaliTech",
  },
  {
    id: 2,
    year: "2023",
    title: "Google Cybersecurity Scholar",
    des: "Awarded scholarship for Google Career Certificate in Cybersecurity",
  },
  {
    id: 3,
    year: "2023",
    title: "Dean's List Honors",
    des: "Consistently maintained First Class academic standing through Level 200-300",
  },
  {
    id: 4,
    year: "2023",
    title: "Programming Hub Certifications",
    des: "Certified in JavaScript, C++, and Web Development fundamentals",
  },
];
