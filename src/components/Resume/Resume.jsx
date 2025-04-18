// src/components/Resume/index.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { animations } from "../../utils/animations";
import Title from "../Title";
import { ResumeCard } from "./ResumeCard";
import { Skills } from "./Skills";
import { education, experience, achievements } from "../../data/resumeData";

const ResumeTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <motion.div
      {...animations.fadeIn}
      className="flex flex-wrap gap-4 mb-12 border-b border-slate-700/50 pb-4"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? "bg-blue-400/10 text-blue-400"
              : "text-slate-400 hover:bg-slate-700/30"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </motion.div>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="resume" className="w-full py-20 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Professional Journey"
          des="Experience & Qualifications"
          align="center"
        />

        <ResumeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          {activeTab === "education" && (
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="grid md:grid-cols-2 gap-8">
              {experience.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {activeTab === "skills" && <Skills />}

          {activeTab === "achievements" && (
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item) => (
                <motion.div
                  key={item.title}
                  {...animations.scrollSlideUp}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <div className="text-blue-400 text-sm mb-2">{item.year}</div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{item.des}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
export default Resume;
