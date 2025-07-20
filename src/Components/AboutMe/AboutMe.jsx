import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaPalette } from "react-icons/fa";

const AboutMe = () => (
  <section id="about" className="py-24 bg-[#121926]">
    <div className="container mx-auto px-5">
      {/* Heading */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Profile Image */}
        <motion.div
          className="animated-border relative min-w-[300px] md:min-w-[350px] rounded-2xl overflow-hidden p-1 bg-[#27445f80]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          
        >
          <img
            src="https://avatars.githubusercontent.com/u/188803446?s=400&u=8584af5a2786ee6db4d4d16678b95fa00111fcae&v=4"
            alt="Monisha Rema"
            className="w-full h-[410px] object-cover relative z-10 rounded-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Info */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            About Me
             <div className="w-45 h-1 bg-gradient-to-r from-blue-700 to-green-600 mt-2 rounded-full" />
          </motion.h2>
          <p className="text-gray-200 mb-6 text-lg leading-relaxed">
            A passionate{" "}
            <span className="text-blue-400 font-semibold">
              MERN Stack Developer
            </span>{" "}
            focused on building clean, efficient, and user-centered web apps
            that deliver real value and seamless experiences.
          </p>

          {/* 3 key points */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="bg-blue-900/80 p-3 rounded-lg text-blue-400 text-xl">
                <FaLaptopCode />
              </span>
              <span className="text-gray-300">
                <strong className="text-blue-300">Hands-on experience</strong>{" "}
                in React, Node.js, MongoDB, and Express, building real-world
                projects from scratch and solving real problems.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-900/80 p-3 rounded-lg text-purple-400 text-xl">
                <FaLightbulb />
              </span>
              <span className="text-gray-300">
                <strong className="text-blue-300">Constant learner,</strong>{" "}
                quick to adopt best practices, modern tools, and stay ahead with
                emerging tech trends.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-900/80 p-3 rounded-lg text-pink-400 text-xl">
                <FaPalette />
              </span>
              <span className="text-gray-300">
                <strong className="text-blue-300">
                  Design-aware developer
                </strong>
                —care about UI/UX, accessibility, and bringing user ideas to
                life with detail and empathy.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMe;
