import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const slides = [
      {
        image: '/heroo.jpg',
        alt: 'Image 1',
      },
      {
        image: '/housing.avif',
        alt: 'Image 2',
      },
      // Add more slides as needed
    ];
  
    return (
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => ( // Fixed closing parenthesis here
            <span
              key={index}
              className={`${className} custom-bullet ${
                index === activeIndex ? 'custom-bullet-active' : ''
              }`}
            />
          ),
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        style={{ height: '100vh', width: '100%' }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={slide.alt} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

export default HeroSlider;