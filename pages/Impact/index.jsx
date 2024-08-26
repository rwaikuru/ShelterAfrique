import React from 'react';
import { useState, useEffect } from 'react';

export default function Impact() {
  const [jobsCreated, setJobsCreated] = useState(0);
  const [projectsFunded, setProjectsFunded] = useState(0);
  const [peopleServed, setPeopleServed] = useState(0);

  const finalNumbers = {
    jobsCreated: 90000,
    projectsFunded: 1000,
    peopleServed: 2300000,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setJobsCreated(Math.floor(Math.random() * 100000));
      setProjectsFunded(Math.floor(Math.random() * 2000));
      setPeopleServed(Math.floor(Math.random() * 3000000));
    }, 100); // Slow down the number change by increasing the interval

    setTimeout(() => {
      clearInterval(interval);
      setJobsCreated(finalNumbers.jobsCreated);
      setProjectsFunded(finalNumbers.projectsFunded);
      setPeopleServed(finalNumbers.peopleServed);
    }, 2000); // Extend the duration to 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-gray-900">Our Impact</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-4xl font-bold text-[#054A91]">
              {jobsCreated.toLocaleString()}+
            </p>
            <p className="mt-2 text-lg font-medium text-gray-700">Jobs created</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-4xl font-bold text-[#054A91]">
              {projectsFunded.toLocaleString()}+
            </p>
            <p className="mt-2 text-lg font-medium text-gray-700">Impacted Beneficiaries</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-4xl font-bold text-[#054A91]">
              {peopleServed.toLocaleString()}+
            </p>
            <p className="mt-2 text-lg font-medium text-gray-700">Housing Units Delivered</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
