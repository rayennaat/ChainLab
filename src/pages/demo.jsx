import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/navbar';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transaction Demo</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simulate blockchain transactions in real-time
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl border border-gray-800 p-8">
          {/* Transaction Flow */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="w-full md:w-auto">
              <p className="text-gray-500 text-sm mb-1">From Address</p>
              <div className="bg-gray-800 p-3 rounded-lg font-mono text-purple-400 truncate">
                0x1a2b3c...d4e5f
              </div>
            </div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-3xl text-purple-500"
            >
              →
            </motion.div>

            <div className="w-full md:w-auto">
              <p className="text-gray-500 text-sm mb-1">To Address</p>
              <div className="bg-gray-800 p-3 rounded-lg font-mono text-blue-400 truncate">
                0x6g7h8i...j9k0l
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Transaction Status</span>
              <span>Mining...</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            </div>
          </div>

          {/* Blocks Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((block) => (
              <motion.div
                key={block}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-4 rounded-lg border border-purple-500/20"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-purple-400">Block #{block}</span>
                  <span className="text-xs bg-gray-900 px-2 py-1 rounded">
                    {block} TXs
                  </span>
                </div>
                <p className="text-xs font-mono text-gray-400 truncate">
                  000{block}a1b...c{block}d2e
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium"
            >
              New Transaction
            </motion.button>
            <Link to="/blockchain">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gray-800 rounded-lg font-medium border border-gray-700"
              >
                How It Works
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/" className="text-gray-400 hover:text-white inline-flex items-center">
            ← Back to Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Demo;