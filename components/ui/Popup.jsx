import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SubscribePopup = ({ onClose }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full md:w-1/3 bg-white p-5 shadow-lg"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600"
      >
        &#10005; {/* Unicode for 'X' */}
      </button>
      <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-4">
        Stay updated with our latest news and offers. Subscribe to our newsletter now!
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 w-full mb-4"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Subscribe
      </button>
    </motion.div>
  );
};

export default SubscribePopup;