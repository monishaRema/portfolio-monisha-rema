import React from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaEye,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../assets/Logo.png";

// Nav items with icon and label
const navItems = [
  { name: "home", label: "Home", icon: <FaHome className="mr-2" /> },
  { name: "about", label: "About", icon: <FaUser className="mr-2" /> },
  { name: "skills", label: "Skills", icon: <FaTools className="mr-2" /> },
  {
    name: "projects",
    label: "Projects",
    icon: <FaProjectDiagram className="mr-2" />,
  },
  { name: "contact", label: "Contact", icon: <FaEnvelope className="mr-2" /> },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 40 },
  },
};

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      {/* Top bar */}
      <motion.div
        className="container mx-auto px-5 flex items-center justify-between h-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo/Name */}
        <motion.div className="flex items-center" variants={itemVariants}>
          <a href="#home">
            <img src={Logo} alt="Logo" className="max-w-22" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-4"
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={`#${item.name}`}
              variants={itemVariants}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                ${
                  activeSection === item.name
                    ? "bg-cyan-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              `}
            >
              {item.icon}
              {item.label}
            </motion.a>
          ))}
          {/* Download Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1OTqtY_pk7Rl4DjizQhaJS02398GTmrvv/view?usp=sharing"
            download
            variants={itemVariants}
            className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500 text-cyan-500 font-semibold bg-transparent hover:bg-cyan-500 hover:text-white transition shadow-sm"
          >
            <FaEye />
            Resume
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden flex items-center"
          variants={itemVariants}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-950 border-t border-gray-800 absolute w-full top-16 left-0 z-50 shadow-lg"
          >
            <motion.div
              className="container mx-auto px-5 flex flex-col space-y-1 py-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name}`}
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                    ${
                      activeSection === item.name
                        ? "bg-cyan-500 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </motion.a>
              ))}
              {/* Download Resume Button (Mobile) */}
              <motion.a
                href="https://drive.google.com/file/d/1OTqtY_pk7Rl4DjizQhaJS02398GTmrvv/view?usp=sharing"
                target="_blank"
                variants={itemVariants}
                className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500 text-cyan-500 font-semibold bg-transparent hover:bg-cyan-500 hover:text-white transition shadow-sm justify-center"
              >
                <FaEye />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
