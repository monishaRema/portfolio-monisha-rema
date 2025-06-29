import React from 'react';

const AboutMe = () => {
    return (
         <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Problem solver <span className="text-cyan-500">&lt;coder&gt;</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Full Stack Developer with expertise in modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bachelor's in Computer Science</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Strong foundation in computer science fundamentals, algorithms, and data structures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Specializing in React & Node.js</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Constantly learning new technologies and following industry trends to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Passionate about clean code</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      I enjoy working on challenging projects and collaborating with teams to create impactful solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className={`inline-block p-8 rounded-2xl bg-gray-800 shadow-2xl`}>
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">MR</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Monisha Rema</h3>
                <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutMe;