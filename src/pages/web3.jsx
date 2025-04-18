import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/navbar';

const Web3 = () => {
  const web3Cards = [
    {
      title: "DeFi",
      icon: "💸",
      description: "Decentralized financial applications that eliminate intermediaries",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "NFTs",
      icon: "🖼️",
      description: "Unique digital assets representing ownership of items",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DAOs",
      icon: "🏛️",
      description: "Community-governed organizations with transparent rules",
      color: "from-yellow-500 to-red-500"
    }
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Web3 Ecosystem</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The next evolution of the internet powered by blockchain
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {web3Cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${card.color} p-0.5 rounded-xl`}
            >
              <div className="bg-gray-900 h-full rounded-xl p-6">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fake DApp Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden max-w-4xl mx-auto"
        >
          <div className="p-4 bg-gray-800 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="font-mono text-lg">dapp.example</div>
              <button className="px-4 py-2 bg-purple-600 rounded-lg text-sm">
                Connect Wallet
              </button>
            </div>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center text-gray-500">
              [Web3 Application Preview]
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Web3;