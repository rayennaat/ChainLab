import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/navbar';

const Blockchain = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
        >
          How Blockchain Works
        </motion.h1>

        {/* Interactive Block Chain */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center  pb-4 space-x-4 max-w-full">
            {[1, 2, 3, 4].map((block) => (
              <motion.div
                key={block}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: block * 0.1 }}
                className="flex-shrink-0 bg-gray-900 p-6 rounded-lg border-2 border-purple-500 w-[230px] h-[200]"
              >
                <h3 className="text-xl font-mono mb-2">Block #{block}</h3>
                <p className="text-gray-400 text-sm font-mono truncate">
                  Hash: 000{block}a1b2...{block}f3e
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {block} transaction{block !== 1 ? 's' : ''}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Fake Mining Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium"
          >
            ⛏️ Mine Block (Simulated)
          </motion.button>
        </div>

        {/* Educational Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-bold mb-3">Decentralized</h3>
            <p className="text-gray-400">
              No single entity controls the network. Data is distributed across thousands of nodes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-bold mb-3">Immutable</h3>
            <p className="text-gray-400">
              Once recorded, data cannot be altered retroactively without altering all subsequent blocks.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Blockchain;