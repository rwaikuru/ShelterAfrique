import React from 'react';
import Image from 'next/image';

const Sidebar = ({ isVisible, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <input
          className="w-full h-10 text-small bg-default-400/20 dark:bg-default-500/20"
          placeholder="Type to search..."
          type="search"
        />
        <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">X</button>
      </div>
      <div className="p-4 overflow-y-auto">
        <h3 className="text-xl font-semibold mb-4">Recommended</h3>
        <div className="mb-4">
          <Image
            src="/handhouse.avif" 
            alt="Recommended Article"
            width={600}
            height={400}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h4 className="mt-2 text-lg font-semibold">Article Title</h4>
          <p className="text-gray-600">Article description goes here...</p>
        </div>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-blue-600">Blockchain News</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-600">STX Price Prediction</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-600">US-Approved Bitcoin ETFs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
