// src/components/Resume/ResumeCard.jsx
import { motion } from "framer-motion";
import { animations } from "../../utils/animations";

export const ResumeCard = ({ item }) => {
  return (
    <motion.div
      initial={animations.scrollSlideUp.initial}
      whileInView={animations.scrollSlideUp.animate}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="group relative p-6 rounded-xl bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 hover:border-blue-400/30 transition-all"
    >
      <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center">
        <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
      </div>

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-200">{item.title}</h3>
          <p className="text-sm text-slate-400 mt-1">{item.subTitle}</p>
          <p className="text-xs text-slate-500 mt-1">{item.period}</p>
        </div>
        <span className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-blue-400">
          {item.result}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {item.details.map((detail, index) => (
          <p key={index} className="text-slate-400 text-sm flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            {detail}
          </p>
        ))}
      </div>

      {item.icon && (
        <div className="mt-6 pt-4 border-t border-slate-700/30 flex justify-end">
          <div className="text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
            {item.icon}
          </div>
        </div>
      )}
    </motion.div>
  );
};
