import { motion } from 'framer-motion';
import { FaEthereum, FaWallet, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; // Added useEffect
import Navbar from '../Components/navbar';

const Connect = () => {
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [countdown, setCountdown] = useState(15); // Added countdown state

  const handleConnect = (walletName) => {
    setConnectedWallet(walletName);
    setCountdown(15); // Reset countdown when connecting
    // Auto-disconnect after 15 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setConnectedWallet(null);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Browser extension',
      icon: <FaEthereum className="text-2xl text-orange-400" />,
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      description: 'Mobile wallet connection',
      icon: <div className="w-6 h-6 bg-purple-500 rounded-full" />,
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      description: 'Coinbase ecosystem',
      icon: <div className="w-6 h-6 bg-blue-400 rounded-full" />,
    }
  ];

  return (
    <div className="min-h-screen text-white bg-black">
      <Navbar/>
      <div className="max-w-md p-4 py-24 mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 pt-8 mb-8">
          <Link to="/" className="text-gray-400 hover:text-white">
            <FaArrowLeft size={20} />
          </Link>
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <FaWallet /> Connect Wallet
          </h1>
        </header>

        {/* Wallet Options */}
        <div className="mb-8 space-y-4">
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
              <div className="flex-1 text-left">
                <p className="font-medium">{wallet.name}</p>
                <p className="text-sm text-gray-400">{wallet.description}</p>
              </div>
              {connectedWallet === wallet.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 text-green-400"
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
            className="flex items-center p-3 mb-6 bg-gray-800 border rounded-lg border-green-500/30"
          >
            <div className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">
              Connected to {wallets.find(w => w.id === connectedWallet).name} 
              (disconnecting in {countdown}s)
            </span>
          </motion.div>
        )}

        {/* Footer */}
        <div className="pt-4 text-xs text-center text-gray-500 border-t border-gray-800">
          <p>By connecting, you agree to our Terms and Privacy Policy</p>
          <p className="mt-2">This is a frontend demo only</p>
        </div>
      </div>
    </div>
  );
};

export default Connect;