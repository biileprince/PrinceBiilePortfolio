import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "../data/navItems";
import { sidebarAnimation } from "../utils/animations";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const closeAllMenus = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 bg-slate-800/90 border-b border-slate-700/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center text-2xl font-bold text-white"
            >
              <FaCode className="mr-2 text-blue-400" />
              Prince Biile
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-slate-700 text-white"
                        : "text-gray-300 hover:bg-slate-700"
                    }`
                  }
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar and Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Mobile Sidebar */}
              <motion.div
                {...sidebarAnimation}
                className="md:hidden fixed top-0 left-0 h-full w-64 bg-slate-800/95 backdrop-blur-lg
                         border-r border-slate-700/90 shadow-xl z-[70] overflow-y-auto"
              >
                <div className="p-4 border-b border-slate-700/90">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-bold text-white flex items-center">
                      <FaCode className="mr-2 text-blue-400" />
                      Prince Biile
                    </div>
                    <button
                      onClick={closeAllMenus}
                      className="p-2 text-gray-300 hover:text-white"
                      aria-label="Close menu"
                    >
                      <HiX size={24} />
                    </button>
                  </div>
                </div>
                <nav className="p-4 space-y-2">
                  {navigationItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeAllMenus}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-slate-700/80 text-white"
                            : "text-gray-300 hover:bg-slate-700/50"
                        }`
                      }
                    >
                      {item.icon}
                      <span className="ml-3">{item.title}</span>
                    </NavLink>
                  ))}
                </nav>
              </motion.div>

              {/* Overlay with correct positioning */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                onClick={closeAllMenus}
              />
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full bg-slate-800/90 border-t border-slate-700/90 z-50">
        <div className="flex justify-around py-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `flex flex-col items-center p-2 text-xs ${
                  isActive ? "text-white" : "text-gray-300"
                } hover:text-white`
              }
            >
              {item.icon}
              <span className="mt-1 text-xs">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
