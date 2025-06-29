import React from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Hero = () => {
    return (
           <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Monisha Rema
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
                Full Stack Developer
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                &#123; JavaScript, React, Node.js, MongoDB, Express.js, Python... &#125;
              </p>
              <p className="text-sm md:text-base mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                Passionate about creating innovative web solutions. I leverage cutting-edge technologies to bring digital ideas to life with clean, efficient code and user-centered design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={"#projects"}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>See my work</span>
                  <FaExternalLinkAlt size={18} />
                </a>
                <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                  <FaDownload size={18} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>

            {/* Keyboard and Mouse Illustration */}
            <div className="mt-16 relative">
              <div className={`inline-block p-8 rounded-2xl bg-gray-800 shadow-2xl`}>
                <div className="flex items-center justify-center space-x-8">
                  {/* Keyboard */}
                  <div className={`p-4 rounded-lg bg-gray-700}`}>
                    <div className="grid grid-cols-10 gap-1">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded bg-gray-600`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Mouse */}
                  <div className={`w-12 h-20 rounded-full bg-gray-600`}>
                    <div className={`w-1 h-8 rounded-full mx-auto pt-2  bg-gray-300`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
};

export default Hero;