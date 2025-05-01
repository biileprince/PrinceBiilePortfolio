import { motion } from "framer-motion";

const WebdevCard = ({ item }) => {
  return (
    <motion.div
      className="relative w-full h-80 p-6 rounded-xl backdrop-blur-lg bg-slate-800/50 
                border border-slate-700/50 cursor-pointer group hover:border-blue-400/30
                transition-all duration-300 flex flex-col justify-between overflow-hidden"
      whileHover="hover"
      whileTap="tap"
      variants={{
        hover: { y: -5 },
        tap: { scale: 0.98 },
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="space-y-6">
        <div className="text-blue-400">{item.icon}</div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
            {item.title}
          </h2>
          <p className="text-slate-400 leading-relaxed line-clamp-3">
            {item.des}
          </p>

          {item.tech && (
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default WebdevCard;
