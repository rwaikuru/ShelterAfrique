// components/Herosection.jsx

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Navbarmain from '@/components/Navbar';
import { Lora } from 'next/font/google';


const lora = Lora({ subsets: ['latin'] }); // Configure font loader


const fadeInUp = {
  animation: 'fadeInUp 1s ease-in-out',
};

const textContentStyle = {
  position: 'absolute',
  bottom: '20%',
  left: '10%',
  transform: 'translateX(0)',
  color: 'white',
  textAlign: 'left',
  maxWidth: '50%',
  padding: '0 20px',
};

const lineStyle = {
  borderBottom: '2px solid blue',
  margin: '10px 0',
  width: '500px',
  display: 'block',
};

const dropdownStyle = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  zIndex: 1000, // Ensure it appears above other content
};

const dropdownContentStyle = {
  display: 'none',
  position: 'absolute',
  top: '20px',
  left: '0',
  backgroundColor: 'transparent',
  padding: '5px 0',
  zIndex: 1000, // Ensure it appears above other content
};

const dropdownItemStyle = {
  padding: '5px 10px',
  textDecoration: 'none',
  color: 'white',
  display: 'block',
};

const dropdownItemHoverStyle = {
  textDecoration: 'underline',
};

const Herosection = () => {
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative', marginBottom: '5px' }}>
     
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .text-content {
          font-size: 2.5rem; /* Adjust as needed for text-4xl */
        }
        .swiper-pagination-bullet {
          width: 30px;
          height: 1px;
          border-radius: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 1;
          
          
        }
        .swiper-pagination-bullet-active {
          background: rgba(0, 0, 0, 1);
        }
      `}</style>

      <div
        style={dropdownStyle}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span style={{ textDecoration: 'underline', color: "black" }}>English</span>
        <div style={{ ...dropdownContentStyle, display: showDropdown ? 'block' : 'none' }}>
          <a href="#" style={dropdownItemStyle} onMouseOver={e => e.target.style = dropdownItemHoverStyle} onMouseOut={e => e.target.style = dropdownItemStyle}>
            French
          </a>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        style={{ height: '100%', width: '100%' }}
      >
        <SwiperSlide>
          <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <img
              src="/heroo.gif" 
              alt="GIF"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="text-content text-black" style={{ ...textContentStyle, ...fadeInUp }}>
              <h2 className='mb-5 text-xs text-black'>WE ARE SHELTER AFRIQUE</h2>
              <h2 style={{ fontSize: '2rem', color: 'black' }}>The Only Pan-African Real Estate <br/>Finance Institution</h2>
              <div style={lineStyle}></div> {/* White line */}
              <p className='text-sm mb-10 align-center text-black'>Our work has a directive for positive impact on the lives of many.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <img
              src="/globe.png"
              alt="Image 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
<div className={`text-content text-black ${lora.className}`} style={{ ...textContentStyle, ...fadeInUp }}>
<h2 style={{ fontSize: '2rem', color: "black" }}>Highlights</h2>
              <div style={lineStyle}></div> {/* White line */}
              <p className='text-black'>This is some description for the second slide.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herosection;
