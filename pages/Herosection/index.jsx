import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HeroScrollDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const data = [
    {
      title: 'Nagano Prefecture',
      subtitle: 'Japan Alps',
      description: 'Mauris malesuada est sit amet augue accumsan tincidunt.',
      buttonText: 'Discover Location',
      bgImage: '/shelterA1.jpeg',
      cardImage: '/shelterA1.jpeg',
    },
    {
      title: 'Marrakech Merzouga',
      subtitle: 'Sahara Desert, Morocco',
      description: 'Mauris malesuada est sit amet augue accumsan tincidunt.',
      buttonText: 'Explore',
      bgImage: '/shelterA2.jpeg',
      cardImage: '/shelterA2.jpeg',
    },
    {
      title: 'Yosemite National Park',
      subtitle: 'California, United States',
      description: 'Mauris malesuada est sit amet augue accumsan tincidunt.',
      buttonText: 'Discover Nature',
      bgImage: '/shelterA1.jpeg',
      cardImage: '/shelterA1.jpeg',
    },
    {
      title: 'Los Lances Beach',
      subtitle: 'Tarifa, Spain',
      description: 'Mauris malesuada est sit amet augue accumsan tincidunt.',
      buttonText: 'Explore Tarifa',
      bgImage: '/shelterA2.jpeg',
      cardImage: '/shelterA2.jpeg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 800);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      }, 800);
    }
  };

  const visibleCards = [
    ...data.slice(currentIndex + 1, currentIndex + 4),
    ...data.slice(0, Math.max(0, currentIndex + 4 - data.length)),
  ];

  return (
    <div className="relative h-screen w-full">
      {/* Background Image Transition */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${data[currentIndex].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      {/* Timer Bar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <motion.div
          className="h-1 bg-yellow-500"
          key={currentIndex} // Reset the animation on each slide change
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }} // 5 seconds timer
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full">
        {/* Left Text Section */}
        <div className="w-1/2 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold">{data[currentIndex].subtitle}</h3>
            <h1 className="text-6xl font-bold">{data[currentIndex].title}</h1>
            <p className="mt-4 text-lg">{data[currentIndex].description}</p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded">
              {data[currentIndex].buttonText}
            </button>
          </div>
        </div>

        {/* Right Card Section */}
        <div className="w-1/2 flex items-center justify-end pr-20">
          <div className="flex space-x-4 overflow-hidden">
            {visibleCards.map((item, index) => (
              <motion.div
                key={index}
                className={`h-72 w-48 bg-white  shadow-lg rounded-full cursor-pointer relative transition-transform ${
                  index === 0 ? 'scale-110' : 'scale-100 opacity-60'
                }`}
                onClick={() => setCurrentIndex((currentIndex + index + 1) % data.length)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={item.cardImage}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                  width={192}
                  height={288}
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows and Pagination */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="flex items-center space-x-16 mt-96">
          {/* <button
            onClick={handlePrev}
            className="p-3 border-2 w-10 h-10 mt-20 border-white rounded-full text-white hover:bg-gray-600 hover:border-gray-600 transition-colors"
          >
            ◄
          </button>
          <button
            onClick={handleNext}
            className="p-3 border-2 w-10 h-10 mt-20  border-white rounded-full text-white hover:bg-gray-600 hover:border-gray-600 transition-colors "
          >
            ►
          </button> */}
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-12 right-12 z-10 flex items-center space-x-4">
        <svg height="2" width="60">
          <line x1="0" y1="0" x2="60" y2="0" style={{ stroke: 'white', strokeWidth: 2 }} />
        </svg>
        <div className="text-white text-lg font-semibold">
          {String(currentIndex + 1).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default HeroScrollDemo;
