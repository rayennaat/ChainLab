import React from 'react';
import Navbar from '../Components/navbar';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content - Adjusted for full-width Spline */}
      <div className="relative h-full w-full">
        {/* Text Content - Now overlapping on top of Spline */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center px-4 pt-[20vh]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
          >
            Decentralize the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Future</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Explore blockchain technology through immersive 3D visualization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/demo">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Launch Demo
            </button>
            </Link>
            <Link to="/blockchain">
                <button className="px-8 py-3 border border-gray-600 rounded-full text-white font-medium hover:bg-gray-900/50 transition-all">
                    Learn More
                </button>
            </Link>
          </motion.div>
        </div>

        {/* Full-width Spline Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Spline 
            scene="https://prod.spline.design/BgASEC-S8s1fZM4p/scene.splinecode" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;