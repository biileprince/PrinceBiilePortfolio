import { motion } from "framer-motion";
import { animations } from "../utils/animations";

const Title = ({ title, des, align = "left" }) => {
  return (
    <motion.div
      initial={animations.fadeInTitle.initial}
      animate={animations.fadeInTitle.animate}
      transition={animations.fadeInTitle.transition}
      className={`flex flex-col gap-6 mb-16 ${
        align === "center" ? "text-center items-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="w-16 h-[2px] bg-blue-400/50 rounded-full" />
        <h3 className="text-sm uppercase tracking-widest text-blue-400 font-medium">
          {title}
        </h3>
        <span className="w-16 h-[2px] bg-blue-400/50 rounded-full" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-200 leading-tight max-w-2xl">
        {des}
      </h1>

      <div className="mt-4 w-full max-w-3xl">
        <div className="h-[1px] bg-gradient-to-r from-slate-700/0 via-slate-700/50 to-slate-700/0" />
      </div>
    </motion.div>
  );
};

export default Title;
