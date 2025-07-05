import React from "react";
import { FaDownload, FaExternalLinkAlt, FaEye, FaRegHandPaper } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedKeyboard from "./AnimatedKeyboard";

const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => (
  <section
    id="home"
    className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#181f2c] via-[#192746] to-[#050d1f]"
    aria-label="Hero section"
  >
    {/* Animated floating gradient blur */}
    <motion.div
      className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-600 via-cyan-400 to-purple-600 rounded-full blur-3xl opacity-25 z-0"
      animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
      <motion.div
        className="text-center"
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
      >
        <motion.p
          className="text-base md:text-lg mb-2"
          variants={fadeUpVariant}
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2496e225] to-[#4b4b502d] rounded-4xl px-5 py-1 border border-[#ffffff0a] text-gray-400 backdrop-blur-lg shadow-md font-medium text-base">
            <FaRegHandPaper className="text-blue-400 animate-waving-hand" />
            Hi! This is
          </span>
        </motion.p>
        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={fadeUpVariant}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Monisha Rema
          </span>
        </motion.h1>
        {/* Subtitle */}
        <motion.h2
          className="text-xl md:text-2xl mb-4 text-blue-400 font-semibold tracking-wide"
          variants={fadeUpVariant}
        >
          Junior MERN Stack Developer
        </motion.h2>

        <motion.p
          className="text-base md:text-lg mb-5 max-w-2xl mx-auto text-gray-400 font-light"
          variants={fadeUpVariant}
        >
          Building modern, scalable web apps that blend clean UI, smooth
          interactions, and real-world functionality. I love learning new tech
          and shipping features that actually help users and teams.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeUpVariant}
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            tabIndex={0}
            aria-label="See my work"
          >
            <span>See my work</span>
            <FaExternalLinkAlt size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/1OTqtY_pk7Rl4DjizQhaJS02398GTmrvv/view?usp=sharing"
       
            target="_blank"
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            tabIndex={0}
            aria-label="Download CV"
          >
            <FaEye size={22} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Keyboard & Mouse Illustration */}
        <motion.div
          className="mt-16 relative flex justify-center"
          variants={fadeUpVariant}
        >
          <AnimatedKeyboard></AnimatedKeyboard>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
