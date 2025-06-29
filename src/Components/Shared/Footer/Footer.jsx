import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/monishaRema', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/monisha-rema-web-developer/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:monisharema97@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#161d27] dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='max-w-xs mx-auto md:mx-0 text-center md:text-left'
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Monisha Rema</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Junior MERN Stack Developer passionate about building clean, user-focused web apps that actually make an impact.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-center md:text-start'
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-center md:text-start'
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p className='flex gap-3 items-center justify-center md:justify-start'>
                <FiMail className="inline text-blue-400" />
                <span>monisharema97@gmail.com</span>
              </p>
              <p className='flex gap-3 items-center justify-center md:justify-start'><FaPhoneAlt className="inline text-blue-400"></FaPhoneAlt> <span>+974 3329 6248</span></p>
              <p className='flex gap-3 items-center justify-center md:justify-start'><FaLocationArrow className="inline text-blue-400"></FaLocationArrow> Qatar / Bangladesh</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Open to freelance, remote, and full-time web dev opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Monisha Rema. All rights reserved.
            </p>
           
          </div>
        </motion.div>

    
      </div>
    </footer>
  );
};

export default Footer;
