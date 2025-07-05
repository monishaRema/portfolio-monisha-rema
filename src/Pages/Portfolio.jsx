import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaDownload,
  FaCode,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";
import Navbar from "../Components/Shared/Header/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/Contact/Contact";
import ProjectsSection from "../Components/Projects/ProjectsSection";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetHeight = element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}

      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      ></Navbar>
      {/* Hero Section */}
      <Hero></Hero>
      {/* About Section */}
      <AboutMe></AboutMe>

      {/* Skills Section */}
      <Skills></Skills>
      {/* Projects Section */}
      <ProjectsSection></ProjectsSection>

      {/* Contact Section */}

      <Contact></Contact>

      <Footer></Footer>
    </>
  );
};

export default Portfolio;
