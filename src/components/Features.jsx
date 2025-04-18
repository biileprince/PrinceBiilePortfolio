import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import Title from "./Title";
import FeatureCard from "./FeatureCard";

import { AiFillAppstore, AiOutlineLayout } from "react-icons/ai";
import {
  FaMobile,
  FaGlobe,
  FaDatabase,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import { MdAnalytics } from "react-icons/md";

const iconComponents = {
  AiFillAppstore,
  AiOutlineLayout,
  FaMobile,
  FaGlobe,
  SiProgress,
  SiAntdesign,
  FaDatabase,
  FaCloud,
  GiNetworkBars,
  FaLaptopCode,
  MdAnalytics,
};

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("features.json");
        if (!response.ok) throw new Error("Failed to fetch features");
        const data = await response.json();
        setFeatures(
          data.map((feature) => ({
            ...feature,
            icon: iconComponents[feature.icon]
              ? React.createElement(iconComponents[feature.icon])
              : null,
          }))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  if (loading)
    return (
      <div className="text-center text-slate-400 py-20">
        Loading features...
      </div>
    );

  if (error)
    return <div className="text-center text-red-400 py-20">Error: {error}</div>;

  return (
    <section
      id="features"
      className="w-full py-20 border-b border-slate-700/50"
    >
      <Title title="Capabilities" des="Core Expertise" align="center" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 px-8">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={animations.scrollSlideUp.initial}
            whileInView={animations.scrollSlideUp.animate}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{
              ...animations.scrollSlideUp.transition,
              delay: index * 0.1,
            }}
          >
            <motion.div whileHover={animations.hoverScale}>
              <FeatureCard
                item={item}
                onClick={() => handleCardClick(item.path)}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
