import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "./projects"; // adjust path as needed

// Mapping techs to icons (add more as needed)
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaMobileAlt,
  FaChartBar,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiFramer,
  SiExpress,
  SiChartdotjs,
  SiVercel,
  SiNetlify,
  SiLocal,
  SiDatefns,
  SiJson,
  SiPicardsurgeles,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { GiSamuraiHelmet } from "react-icons/gi";
import { SlPieChart } from "react-icons/sl";

const techIcons = {
  React: <FaReact className="text-sky-400" />,
  "React Router": <FaReact className="text-pink-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  DaisyUI: <SiDaisyui className="text-violet-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-200" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  JWT: <SiJson className="text-pink-500" />,
  "Framer Motion": <SiFramer className="text-pink-400" />,
  GSAP: <MdAnimation className="text-green-400" />,
  Recharts: <SlPieChart className="text-pink-400" />,
  "Chart.js": <SiChartdotjs className="text-pink-400" />,
  "date-fns": <SiDatefns className="text-blue-300" />,
  Vercel: <SiVercel className="text-white" />,
  "Surge.sh": <SiPicardsurgeles className="text-gray-100" />,
  Netlify: <SiNetlify className="text-cyan-300" />,
  "Helmet React": <GiSamuraiHelmet className="text-green-300" />,
  "Local Storage": <FaDatabase className="text-orange-400" />,
  SweetAlert2: <FaMobileAlt className="text-pink-300" />,
  "React Toastify": <FaMobileAlt className="text-amber-300" />,
};

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Project = ({ project, index }) => (
  <motion.div
    className={`project-box flex flex-col lg:flex-row items-center gap-10 mb-20 rounded-2xl bg-gradient-to-l from-gray-900 to-blue-950 overflow-hidden group`}
    custom={index}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Image Section */}
    <div className="flex-1 w-full">
      <div
        style={{
          backgroundImage: `url(${project.image})`,
        }}
        className="project-image-box h-[350px] lg:h-[500px]"
      ></div>
    </div>

    {/* Info Section */}
    <div className="flex-1 flex flex-col gap-3 justify-center px-10 py-10 lg:py-5">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-50">
        {project.title}
      </h3>
      {project.tagline && (
        <div className="text-base italic text-blue-200 mb-1">
          {project.tagline}
        </div>
      )}
      <div className="text-[#cfd8e3] mb-3">{project.description}</div>

      {/* Tech Stack */}
      <h3 className="text-white text-xl md:text-2xl font-semibold mb-5">
        Technology Used{" "}
      </h3>
      <div className="flex flex-wrap gap-3 items-center mb-2">
        {project.backend?.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1 px-2 py-1 bg-[#232a38] rounded-lg text-xs text-[#c0d5fd] border border-[#222f43]/30"
          >
            {techIcons[tech] || null}
            {tech}
          </span>
        ))}
        {project.tech?.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1 px-2 py-1 bg-[#232a38] rounded-lg text-xs text-[#c0d5fd] border border-[#222f43]/30"
          >
            {techIcons[tech] || null}
            {tech}
          </span>
        ))}
      </div>
      {/* Links */}
      <div className="flex gap-5 mt-3">
        {typeof project.github === "string" ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex items-center gap-2 text-[#b5c6e0]"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        ) : (
          <>
            <a
              href={project.github.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition flex items-center gap-2 text-[#b5c6e0]"
            >
              <FaGithub /> <span>Frontend</span>
            </a>
            <a
              href={project.github.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition flex items-center gap-2 text-[#b5c6e0]"
            >
              <FaGithub /> <span>Backend</span>
            </a>
          </>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex items-center gap-2 text-[#b5c6e0]"
          >
            <FaExternalLinkAlt /> <span>Live</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-[#24282c]">
    <div className="container mx-auto px-5">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Here are the projects that i build for amazing web experiences
      </motion.p>
      {projects.map((project, i) => (
        <Project
          key={project.title}
          project={project}
          reverse={i % 2 !== 0}
          index={i}
        />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
