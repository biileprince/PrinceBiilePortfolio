import React from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import {
  FaSearch,
  FaMobileAlt,
  FaChartLine,
  FaLink,
  FaKeyboard,
  FaFileAlt,
} from "react-icons/fa";
import { SiGoogleanalytics, SiPagespeedinsights } from "react-icons/si";
import Title from "./../components/Title";

const SeoExpertise = () => {
  const seoFeatures = [
    {
      id: 1,
      title: "Technical SEO",
      des: "Website architecture optimization for search engine crawlers",
      icon: <FaSearch className="text-4xl text-blue-400" />,
      elements: ["Sitemaps", "Robots.txt", "Schema Markup", "Canonical Tags"],
      impact: "40% faster indexing",
    },
    {
      id: 2,
      title: "On-Page Optimization",
      des: "Content and HTML source code optimization",
      icon: <FaFileAlt className="text-4xl text-blue-400" />,
      elements: [
        "Meta Tags",
        "Header Structure",
        "Keyword Density",
        "ALT Text",
      ],
      impact: "25% CTR improvement",
    },
    {
      id: 3,
      title: "Mobile SEO",
      des: "Mobile-first indexing and AMP implementation",
      icon: <FaMobileAlt className="text-4xl text-blue-400" />,
      elements: [
        "Responsive Design",
        "Core Web Vitals",
        "Mobile Usability",
        "AMP",
      ],
      impact: "60% mobile traffic boost",
    },
    {
      id: 4,
      title: "Content Strategy",
      des: "Semantic search optimization and topic clustering",
      icon: <FaKeyboard className="text-4xl text-blue-400" />,
      elements: ["LSI Keywords", "Content Clusters", "E-A-T", "User Intent"],
      impact: "3x organic visibility",
    },
    {
      id: 5,
      title: "Backlink Analysis",
      des: "Quality link building and toxic link removal",
      icon: <FaLink className="text-4xl text-blue-400" />,
      elements: [
        "DR Score",
        "Referring Domains",
        "Anchor Text",
        "Link Velocity",
      ],
      impact: "15% DA improvement",
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      des: "Performance tracking and KPI monitoring",
      icon: <FaChartLine className="text-4xl text-blue-400" />,
      elements: ["Google Search Console", "Ahrefs", "SEMrush", "Hotjar"],
      impact: "Data-driven decisions",
    },
  ];

  return (
    <section id="seo" className="w-full py-20 border-b border-slate-700/50">
      <Title
        title="SEO Optimization"
        des="Search Engine Visibility Strategies"
        align="center"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-8">
        {seoFeatures.map((item, index) => (
          <motion.div
            key={item.id}
            initial={animations.scrollSlideUp.initial}
            whileInView={animations.scrollSlideUp.animate}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1 }}
          >
            <SeoFeatureCard item={item} />
          </motion.div>
        ))}
      </div>

      {/* SEO Checklist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <motion.div
          {...animations.fadeIn}
          className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">
            Core SEO Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <SiGoogleanalytics className="text-xl" />
                <span className="text-lg">Technical Foundation</span>
              </div>
              <ul className="text-slate-400 list-disc pl-6">
                <li>XML Sitemap</li>
                <li>Robots.txt optimization</li>
                <li>SSL implementation</li>
                <li>Structured data markup</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <SiPagespeedinsights className="text-xl" />
                <span className="text-lg">Content Best Practices</span>
              </div>
              <ul className="text-slate-400 list-disc pl-6">
                <li>Keyword research</li>
                <li>Content silo structure</li>
                <li>Internal linking strategy</li>
                <li>Regular content audits</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SeoFeatureCard = ({ item }) => {
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
            {item.impact}
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{item.title}</h2>
          <p className="text-slate-400 leading-relaxed">{item.des}</p>

          <div className="flex flex-wrap gap-2">
            {item.elements.map((element, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <div className="text-sm text-slate-400">
          <span className="text-blue-400">Key Tools:</span>{" "}
          {item.elements.slice(0, 3).join(", ")}
        </div>
      </div>
    </motion.div>
  );
};

export default SeoExpertise;
