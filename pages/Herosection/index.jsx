import React from 'react'
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import Mainnavbar from '@/components/navbar';

function Herosection() {
  return (
    <div className='hero'>
         <Mainnavbar/>
          <section className="grid grid-cols-2 h-screen items-center px-20 lg:px-40"> {/* Adjusted padding */}
        {/* Left Side Content */}
        <div> 
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            A Pan-African Real Estate  Finance Institution.
          </h1>
{/* 
          <h2 className="text-4xl lg:text-2xl font-semibold text-center mb-6">
            Finance Institution.
          </h2> */}

          <p className=" text-sm mx-10 lg:mx-20 mr-10 "> {/* Adjusted margins */}
            Your partner in building a thriving Africa,
            <br />
            one home, one community at a time.
          </p>
        </div>

        {/* Right Side Content */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4">

            {/* Main Card */}
            {/* <Card className="col-span-2 relative w-full h-[20rem]  bg-slate-100 text-white rounded-3xl mt-6 ">
              <CardBody className="absolute inset-0">
                <Image
                  src="/shelterafrique hero.png"
                  alt="shelter africa"
                  fill
                  className="object-cover rounded-3xl"
                />
              </CardBody>
            </Card> */}

            <div className="flex flex-col gap-4">
              {/* Smaller Card  */}
              {/* <Card className=" w-[10rem] h-[10rem] border-black border text-white rounded-2xl">
             
  
                <CardBody>
                <Image
                  src="/globe.png"
                  alt="shelter africa"
                  width={300}
                  height={200}
                  className="object-cover rounded-3xl"
                />
                </CardBody>
                
                
              </Card> */}

              {/* Smaller Card */}
              {/* <Card className="w-[13rem] h-[15rem] bg-[#95bab9] text-white rounded-2xl">
                <CardBody>
                Impacted beneficiaries
                127,525
                </CardBody>
                <CardBody className='mt-10 ml-2 align-bottom'>
                 Our Committment to the people of Africa
                </CardBody>
              </Card> */}
            </div>
          </div>
        </div>
      </section>
     
    </div>
  )
}

export default Herosection;