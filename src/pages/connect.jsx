import { motion } from 'framer-motion';
import { FaEthereum, FaWallet, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../Components/navbar';

const Connect = () => {
  const [connectedWallet, setConnectedWallet] = useState(null);

  const handleConnect = (walletName) => {
    setConnectedWallet(walletName);
    // Auto-disconnect after 15 seconds (like real sessions)
    setTimeout(() => setConnectedWallet(null), 15000);
  };

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Browser extension',
      icon: <FaEthereum className="text-2xl text-orange-400" />,
      color: 'orange'
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      description: 'Mobile wallet connection',
      icon: <div className="w-6 h-6 bg-purple-500 rounded-full" />,
      color: 'purple'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      description: 'Coinbase ecosystem',
      icon: <div className="w-6 h-6 bg-blue-400 rounded-full" />,
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <div className="max-w-md mx-auto p-4 py-24">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8 pt-8">
          <Link to="/" className="text-gray-400 hover:text-white">
            <FaArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaWallet /> Connect Wallet
          </h1>
        </header>

        {/* Wallet Options */}
        <div className="space-y-4 mb-8">
          {wallets.map((wallet) => (
            <motion.button
              key={wallet.id}
              whileHover={{ y: connectedWallet === wallet.id ? 0 : -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleConnect(wallet.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                connectedWallet === wallet.id
                ? 'bg-green-900/20 border-green-500'
                : 'bg-gray-800 hover:bg-gray-700 border-gray-700'
              }`}
            >
              {wallet.icon}
              <div className="text-left flex-1">
                <p className="font-medium">{wallet.name}</p>
                <p className="text-sm text-gray-400">{wallet.description}</p>
              </div>
              {connectedWallet === wallet.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-400 flex items-center gap-1"
                >
                  <FaCheck />
                  <span className="text-sm">Connected</span>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Connection Status Bar */}
        {connectedWallet && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-3 bg-gray-800 rounded-lg border border-green-500/30 flex items-center"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm">
              Connected to {wallets.find(w => w.id === connectedWallet).name} (auto-disconnect in 15s)
            </span>
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
          <p>By connecting, you agree to our Terms and Privacy Policy</p>
          <p className="mt-2">This is a frontend demo only</p>
        </div>
      </div>
    </div>
  );
};

export default Connect;