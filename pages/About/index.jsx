import { Card, CardBody } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="flex justify-center mt-20 mb-20 mx-10">
      <Card className='bg-[#ffffff] w-full md:w-[75rem] h-[29rem] rounded-lg border-black'>
        <CardBody className="overflow-hidden rounded-lg flex flex-col md:flex-row p-6">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center pr-6">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-lg font-normal mb-4">
            Shelter Afrique is the only pan-African finance institution that exclusively supports the development of the housing and real estate sector in Africa.
            </p>
            <p className="text-lg font-light">

We believe that as we build houses, We build families and nations. This is our commitment to the people of Africa

            </p>
            <button className="px-6 py-2 w-[150px] mt-5 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Read More
</button>
          </div>

          {/* Image Content */}
          <div className="flex-1">
            <Image
              src="/modernhouses.jpg"
              alt="shelter africa"
              width={75 * 16} // Assuming 16:9 aspect ratio
              height={75 * 9}  // Assuming 16:9 aspect ratio
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default About;
