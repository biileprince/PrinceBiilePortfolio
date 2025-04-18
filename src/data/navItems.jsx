import { FaHome, FaBuilding, FaCogs, FaEnvelope } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrResume } from "react-icons/gr";

export const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome size={20} />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaBuilding size={20} />,
    // subItems: [
    //   { title: "Web Development", path: "/projects/web" },
    //   { title: "Mobile Apps", path: "/projects/mobile" },
    // ],
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <GrResume size={20} />,

    // subItems: [
    //   { title: "Frontend", path: "/skills/frontend" },
    //   { title: "Backend", path: "/skills/backend" },
    // ],
  },
  // {
  //   title: "Portfolio",
  //   path: "/portfolio",
  //   icon: <GiSkills size={20} />,
  //   subItems: [
  //     { title: "Web Development", path: "/projects/web" },
  //     { title: "Mobile Apps", path: "/projects/mobile" },
  //   ],
  // },

  {
    title: "Skills",
    path: "/skills",
    icon: <FaCogs size={20} />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaEnvelope size={20} />,
  },
];
