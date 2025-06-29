import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaTools,
} from "react-icons/fa";
import { MdSettingsApplications } from "react-icons/md";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiFramer,
  SiJsonwebtokens,
  SiBootstrap,
  SiSass,
  SiAxios,
  SiReactrouter,
  SiFigma,
  SiAdobexd,
  SiReactquery,
  SiNotion,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { motion } from "framer-motion";

// Data
const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-3xl text-blue-400" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-violet-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-300" /> },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-pink-400" />,
      },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
      {
        name: "GSAP",
        icon: <MdSettingsApplications className="text-green-400" />,
      },
      { name: "Sass/SCSS", icon: <SiSass className="text-pink-300" /> },
      { name: "Axios", icon: <SiAxios className="text-cyan-300" /> },
      {
        name: "TanStack Query",
        icon: <SiReactquery className="text-amber-400" />,
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaNodeJs className="text-3xl text-green-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-3xl text-orange-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      { name: "Adobe XD", icon: <SiAdobexd className="text-violet-400" /> },
      {
        name: "Notion",
        icon: <SiNotion className="text-black dark:text-white" />,
      },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-300" /> },
    ],
  },
];

// Animation variants for group cards
const groupBoxVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 1, ease: "easeOut" },
  }),
};

const Skills = () => (
  <section id="skills" className="py-24 bg-[#161d27]">
    <div className="container mx-auto px-5">
      {/* Animated Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-5 text-center"
        variants={groupBoxVariant}
        initial="hidden"
        whileInView="visible"
      >
        Skills & Technologies
      </motion.h2>
      {/* Animated Section Paragraph */}
      <motion.p
       className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-16"
        variants={groupBoxVariant}
        initial="hidden"
        whileInView="visible"
      >
      These are the core technologies I use to build reliable, high-impact web apps.
  Always learning, always leveling up.
      </motion.p>

      {/* Animate each group card */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            custom={idx}
            variants={groupBoxVariant}
            initial="hidden"
            whileInView="visible"
            className="flex-1 rounded-2xl p-6 shadow-lg bg-gradient-to-b from-[#1a2332] to-[#06183ad2] border border-[#222f43]"
          >
            <motion.div
              className="flex items-center gap-4 mb-5 justify-center border-b border-[#3a88ec50] pb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <span>{group.icon}</span>
              <span className="text-2xl md:text-3xl font-semibold text-[#cfd8e3] text-center">
                {group.title}
              </span>
            </motion.div>

            <div className="flex flex-wrap gap-5 justify-center">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex-1 max-w-42 flex items-center gap-3 px-3 py-2 bg-[#21283a]/80 rounded-lg hover:scale-[1.04] transition shadow-sm"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-[#eaf1fb]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
