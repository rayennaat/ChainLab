import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEthereum } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // All routes are now page-based (no hash links)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blockchain', path: '/blockchain' },
    { name: 'Web3', path: '/web3' },
    { name: 'Demo', path: '/demo' },
  ];

  // Simplified active link check
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <FaEthereum className="text-purple-500 text-2xl" />
            <span className="text-white font-bold text-xl">ChainLab</span>
          </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="relative group"
              >
                <motion.div 
                  whileHover={{ y: -2 }}
                  className={`text-gray-300 group-hover:text-white transition-colors ${isActive(link.path) ? 'text-purple-400' : ''}`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute left-0 top-full mt-1 w-full h-0.5 bg-purple-500"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            <Link to="/connect">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full text-white font-medium"
                >
                    Connect Wallet
                </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900 bg-opacity-95 border-t border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-gray-800 text-purple-400' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-md text-white font-medium">
              Connect Wallet
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;