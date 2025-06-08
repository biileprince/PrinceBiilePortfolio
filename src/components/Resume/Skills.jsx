// src/components/Resume/Skills.jsx
import { motion } from "framer-motion";
import { animations } from "../../utils/animations";
import { skills } from "../../data/resumeData";

const SkillCategory = ({ title, skills }) => (
  <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
    <h3 className="text-lg font-semibold text-slate-200 mb-4">{title}</h3>
    <div className="space-y-5">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          initial={animations.scrollSlideUp.initial}
          whileInView={animations.scrollSlideUp.animate}
        >
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SkillCategory title="Cloud & AWS" skills={skills.cloud} />
      <SkillCategory title="Web Development" skills={skills.development} />
      <SkillCategory title="Programming" skills={skills.programming} />
      <SkillCategory title="Professional Skills" skills={skills.soft} />
    </div>
  );
};
export default Skills;
