import { Card, CardBody } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import AnimatedNumber from '../../components/ui/Animatednumber';

function About() {
  return (
    <div className="bg-[#FFF6E9] mt-10 rounded-lg h-screen flex items-center justify-center">
      <Card className='bg-transparent w-full md:w-[75rem] rounded-lg'>
        <CardBody className="overflow-hidden rounded-lg flex flex-col md:flex-row p-8 items-start space-y-8 md:space-y-0 md:space-x-8">

          {/* Left Side: Title */}
          <div className="relative flex flex-col w-full md:w-1/2 items-center md:items-start space-y-8">
            <h2 className="text-5xl font-bold mb-8">
              Building Africa's Future{" "}
              <span className="relative inline-block text-blue- mt-4">
                <span className="relative z-10 pr-6 text-4xl text-center ml-6 text-blue-500">
                  Together
                </span>
                <span className="absolute inset-0 flex items-center justify-center -right-4 -bottom-2 rounded-full border-2 border-blue-500"></span>
              </span>
            </h2>

            {/* Text below the title */}
            <p className="text-lg font-normal mb-2">
              Shelter Afrique is the only pan-African finance institution that exclusively supports the development of the housing and real estate sector in Africa.
            </p>
            {/* <p className="text-normal font-light mb-4">
              As the Company for Housing and Habitat in Africa, our work has a direct and positive impact on the lives of many by meeting the needs of the continent’s rapidly growing urban population.
            </p> */}

            <button className="px-6 py-2 w-[150px] bg-blue-950 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Read More
            </button>
          </div>

          {/* Right Side: GIF */}
          <div className="flex flex-col w-full md:w-1/2 items-center md:items-start mt-10 md:mt-0">
            <img src="/const.gif" alt="Descriptive text for the GIF" className="w-full md:w-3/4" />
          </div>

        </CardBody>
      </Card>
    </div>
  );
}

export default About;
