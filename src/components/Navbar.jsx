// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaCogs,
  FaEnvelope,
  FaSearch,
  FaRocket,
} from "react-icons/fa";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "../data/navItems";
import {
  dropdownAnimation,
  sidebarAnimation,
  accordionAnimation,
} from "../utils/animations";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Using one state for both desktop and mobile dropdown/accordion
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navRef = useRef(null);
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

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
              <FaRocket className="mr-2 text-blue-400" />
              DevPort
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <form
                onSubmit={handleSearch}
                className="relative mr-4 hidden xl:block"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 rounded-full bg-slate-700/50 text-white placeholder-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-blue-400 border border-slate-600"
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <FaSearch className="text-gray-300 hover:text-white transition-colors" />
                </button>
              </form>
              {navigationItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.subItems ? (
                    <>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center px-3 py-2 rounded-lg transition-colors
                           ${
                             isActive
                               ? "bg-slate-700 text-white"
                               : "text-gray-300 hover:bg-slate-700"
                           }`
                        }
                        onMouseEnter={() => setOpenDropdown(item.path)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                        <HiChevronDown className="ml-1" />
                      </NavLink>
                      <AnimatePresence>
                        {openDropdown === item.path && (
                          <motion.div
                            {...dropdownAnimation}
                            className="absolute top-full left-0 mt-2 w-48 bg-slate-800/90
                                       rounded-lg shadow-xl border border-slate-700/90"
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            {item.subItems.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white
                                   ${isActive ? "bg-slate-700 text-white" : ""}`
                                }
                              >
                                {subItem.title}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-lg transition-colors
                         ${
                           isActive
                             ? "bg-slate-700 text-white"
                             : "text-gray-300 hover:bg-slate-700"
                         }`
                      }
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              {...sidebarAnimation}
              className="md:hidden fixed top-0 left-0 h-full w-64 bg-slate-800/90
                         border-r border-slate-700/90 shadow-xl z-[70] overflow-y-auto"
            >
              <div className="p-4 border-b border-slate-700/90">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold text-white flex items-center">
                    <FaRocket className="mr-2 text-blue-400" />
                    DevPort
                  </div>
                  <button
                    onClick={closeAllMenus}
                    className="p-2 text-gray-300 hover:text-white"
                  >
                    <HiX size={24} />
                  </button>
                </div>
                {/* <form onSubmit={handleSearch} className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-full bg-slate-700/50 text-white 
                             placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 
                             border border-slate-600"
                  />
                  <button type="submit" className="absolute right-3 top-2.5">
                    <FaSearch className="text-gray-300 hover:text-white transition-colors" />
                  </button>
                </form> */}
              </div>
              <nav className="p-4">
                {navigationItems.map((item) => (
                  <div key={item.path} className="mb-2">
                    {item.subItems ? (
                      <div className="group">
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.path ? null : item.path
                            )
                          }
                          className="w-full flex justify-between items-center p-2 rounded-lg
                                   text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                          <div className="flex items-center">
                            {item.icon}
                            <span className="ml-2">{item.title}</span>
                          </div>
                          <HiChevronDown
                            className={`transform transition-transform duration-300 ${
                              openDropdown === item.path ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.path && (
                            <motion.div
                              {...accordionAnimation}
                              className="pl-6 overflow-hidden"
                            >
                              {item.subItems.map((subItem) => (
                                <NavLink
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={closeAllMenus}
                                  className={({ isActive }) =>
                                    `block p-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white
                                     ${
                                       isActive ? "bg-slate-700 text-white" : ""
                                     }`
                                  }
                                >
                                  {subItem.title}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={closeAllMenus}
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-lg transition-colors
                           ${
                             isActive
                               ? "bg-slate-700 text-white"
                               : "text-gray-300 hover:bg-slate-700 hover:text-white"
                           }`
                        }
                      >
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom Navigation Tab for Mobile */}
      <nav
        className="md:hidden fixed bottom-0 left-0 w-full bg-slate-800/90 border-t border-slate-700/90 shadow-xl z-50 
      rounded-tl-3xl rounded-tr-3xl "
      >
        <div className="flex justify-around">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center p-2 text-xs transition-colors ${
                  isActive ? "text-white" : "text-gray-300"
                } hover:text-white`
              }
            >
              {item.icon}
              {/* <span className="mt-1">{item.title}</span> */}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Overlay for Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-y-0 left-64 right-0 bg-black/50 backdrop-blur-sm z-[60]"
          onClick={closeAllMenus}
        />
      )}
    </>
  );
};

export default Navbar;
