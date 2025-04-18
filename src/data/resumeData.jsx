// src/data/resumeData.js
import {
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiFigma,
  SiSketch,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiKubernetes,
  SiGraphql,
} from "react-icons/si";

export const education = [
  {
    id: 1,
    title: "BSc in Computer Science",
    subTitle: "Stanford University (2016 - 2020)",
    result: "GPA: 3.8 / 4.0",
    des: "Specialized in full‑stack development and software architecture. Coursework: Advanced Algorithms, Cloud Computing, UX Design.",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "MSc in Information Technology",
    subTitle: "Massachusetts Institute of Technology (2020 - 2022)",
    result: "GPA: 4.0 / 4.0",
    des: "Focused on distributed systems and machine learning. Thesis: Scalable Microservices for Real‑Time Analytics.",
    icon: <FaGraduationCap />,
  },
  {
    id: 3,
    title: "Full‑Stack Developer Certification",
    subTitle: "Coursera Specialization (2023)",
    result: "Certificate Issued",
    des: "Completed hands‑on capstone building a MERN‑stack e‑commerce app with CI/CD and Docker deployments.",
    icon: <FaGraduationCap />,
  },
];

export const experience = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    subTitle: "Google · Full‑time (2022 - Present)",
    result: "Mountain View, CA",
    des: "Leading the Search UI modernization team. Improved Lighthouse performance by 40% and implemented a new component library in React.",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "Backend Engineer",
    subTitle: "Amazon Web Services · Full‑time (2020 - 2022)",
    result: "Seattle, WA",
    des: "Designed and maintained serverless data pipelines using AWS Lambda, API Gateway, and DynamoDB. Reduced latency by 30%.",
    icon: <FaAws />,
  },
  {
    id: 3,
    title: "Full‑Stack Developer",
    subTitle: "StartupX · Contract (2018 - 2020)",
    result: "Remote",
    des: "Built end‑to‑end web applications with React, Node.js, and PostgreSQL. Implemented GraphQL APIs and real‑time features with Socket.io.",
    icon: <FaNodeJs />,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    subTitle: "Freelance · (2016 - 2018)",
    result: "Remote",
    des: "Crafted wireframes, prototypes, and high‑fidelity designs for mobile & web. Clients included two Fortune 500 companies.",
    icon: <SiFigma />,
  },
];

export const skills = {
  technical: [
    { name: "React / Next.js", level: 98 },
    { name: "TypeScript", level: 95 },
    { name: "Node.js", level: 92 },
    { name: "GraphQL", level: 88 },
    { name: "AWS (Lambda, DynamoDB)", level: 85 },
    { name: "Python", level: 80 },
    { name: "Java", level: 78 },
    { name: "Docker", level: 82 },
    { name: "Kubernetes", level: 75 },
    { name: "SQL & NoSQL", level: 90 },
  ],
  design: [
    { name: "Figma", level: 95 },
    { name: "Sketch", level: 90 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "UX Research", level: 88 },
    { name: "Prototyping", level: 92 },
    { name: "Motion Design", level: 75 },
  ],
  soft: [
    { name: "Agile Methodologies", level: 90 },
    { name: "Team Leadership", level: 85 },
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Time Management", level: 88 },
    { name: "Critical Thinking", level: 92 },
  ],
};

export const achievements = [
  {
    id: 1,
    title: "Google Developer Expert",
    year: "2023",
    des: "Awarded for outstanding contributions to the web performance community.",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect – Associate",
    year: "2022",
    des: "Validated expertise in designing and deploying scalable systems on AWS.",
  },
  {
    id: 3,
    title: "Global Hackathon Winner",
    year: "2021",
    des: "Led a team to victory at the CloudNative Hackathon, building a real‑time analytics dashboard.",
  },
  {
    id: 4,
    title: "Published Technical Author",
    year: "2020",
    des: "Authored “Modern React Patterns” on Medium, reaching 50k+ reads.",
  },
];
