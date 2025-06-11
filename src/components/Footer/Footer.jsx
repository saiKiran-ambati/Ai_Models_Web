import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} AI Models Web. All rights reserved.</p>

        <div className="flex space-x-6 items-center">
          <a href="mailto:saikiranreddyambati.com" className="hover:text-blue-600 dark:hover:text-blue-400" aria-label="Email">
            <FaEnvelope size={18} />
          </a>
          <a href="https://github.com/saiKiran-ambati" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/saikiranreddy-ambati-565b17369/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
