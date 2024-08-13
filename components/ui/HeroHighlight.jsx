import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Adjust transition time as needed

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: -activeIndex * 100,
        transition: {
          type: 'spring',
          stiffness: 500,
          damping: 30,
        },
      });
    }
  }, [activeIndex, inView, controls]);

  return (
    <div ref={carouselRef} className="relative w-full overflow-hidden">
      <motion.div
        ref={ref}
        animate={controls}
        className="flex w-full transition-x duration-500"
      >
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeroCarousel;
