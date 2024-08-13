import React from 'react';
import Image from 'next/image';
import Navbarmain from '@/components/Navbar';

function Herosection() {
  return (
    <div className='bg-[#3f4f1]'>
      <Navbarmain />

      {/* Image with Text Overlay */}
      <div className="relative h-screen overflow-hidden rounded-lg mx-5 mt-5">
        <Image
          src="/homepage.avif"
          alt="Background"
          layout="fill"
          className="absolute inset-0 z-0 rounded-lg object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-lg"></div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white">
          <div className="px-5 py-10">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">
              A Pan-African Real Estate
            </h1>
            <div className="flex flex-col lg:flex-row items-center mt-4">
              <Image
                src="/construction.png"
                alt="Start Image"
                width={80}
                height={80}
                className="mr-4 mb-4 lg:mb-0"
              />
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Finance Institution
              </h2>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center ml-4">
                <Image
                  src="/moneybag.png"
                  alt="End Image"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <p className="text-lg mt-8 max-w-2xl mx-auto">
              Shelter Afrique is the only Pan-African finance institution that exclusively supports the
              development of housing and urban development in Africa.
            </p>
            <button className="px-6 py-3 mt-8 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              View Tenders
            </button>
          </div>
        </div>
      </div>

      {/* Static Ticker */}
      <div className=" bg-[#F3F4F1] relative py-3">
        <div className=" flex items-center justify-center">
          <span className="px-4">Annual Reports</span>
          <span className="px-4">News and Events</span>
          <span className="px-4">Newsletters</span>
          <span className="px-4">Member Countries</span>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
