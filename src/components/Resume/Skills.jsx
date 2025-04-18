// src/components/Resume/Skills.jsx
import { motion } from "framer-motion";
import { animations } from "../../utils/animations";
import { skills } from "../../data/resumeData";

const SkillBar = ({ name, level }) => (
  <motion.div
    initial={animations.scrollSlideUp.initial}
    whileInView={animations.scrollSlideUp.animate}
    className="mb-6"
  >
    <div className="flex justify-between text-sm text-slate-400 mb-2">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
      />
    </div>
  </motion.div>
);

export const Skills = () => {
  const { technical, design, soft } = skills;

  return (
    <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-8 lg:p-0">
      <div>
        <h3 className="text-xl font-semibold text-slate-200 mb-8">Technical</h3>
        {technical.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-200 mb-8">Design</h3>
        {design.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-200 mb-8">Soft</h3>
        {soft.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};
