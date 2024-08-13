import React from 'react';

function Impact() {
  return (
    <div className="w-full mt-10 px-6 bg-[#ffffff]">
    
      <div className="text-center mb-10">
        <h2 className='text-3xl font-bold text-black'>
          Our Commitment to the People of Africa
        </h2>
      </div>
     
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">25,505</p>
              <p className="text-base font-normal mt-2">Housing units delivered</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">127,525</p>
              <p className="text-base font-normal mt-2">Impacted beneficiaries</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">178,536</p>
              <p className="text-base font-normal mt-2">Jobs Created Estimated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
