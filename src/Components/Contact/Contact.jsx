import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
            <section id="contact" className={`py-20 bg-gray-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className={`p-8 rounded-xl bg-gray-900 shadow-lg`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="w-5 h-5 text-cyan-500" />
                      <span>monisharema@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaGithub className="w-5 h-5 text-cyan-500" />
                      <span>github.com/monisharema</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaLinkedin className="w-5 h-5 text-cyan-500" />
                      <span>linkedin.com/in/monisharema</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    />
                    <textarea
                      rows="4"
                      placeholder="Your Message"
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    />
                    <button
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
                      onClick={() => alert('Message sent! (This is a demo)')}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;