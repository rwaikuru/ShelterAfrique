// import React, { useState, useEffect } from 'react';

// const HighlightsSection = () => {
//   const [counts, setCounts] = useState({
//     housingUnits: 25505,
//     impactedBeneficiaries: 127525,
//     estimatedJobs: 178536,
//   });

//   useEffect(() => {
//     const animateCounts = () => {
//       const intervals = {};

//       const animate = (key) => {
//         const targetValue = counts[key];
//         let currentValue = 0;

//         const interval = setInterval(() => {
//           const increment = Math.min(Math.floor(Math.random() * 100), targetValue - currentValue);
//           currentValue += increment;
//           setCounts((prevCounts) => ({ ...prevCounts, [key]: currentValue }));

//           if (currentValue >= targetValue) {
//             clearInterval(interval);
//             delete intervals[key];
//           }
//         }, 10);

//         intervals[key] = interval;
//       };

//       Object.keys(counts).forEach(animate);

      
//       setTimeout(() => {
//         Object.values(intervals).forEach(clearInterval);
//       }, 3000);
//     };

//     animateCounts();
//   }, [counts]);

//   return (
//     <section className="mb-10 bg-gray-100 py-8">
//        <section className="mb-10 bg-gray-100 py-8">
//       <div className="flex justify-around items-center">
//         <div className="text-center">
//           <h2 className="text-4xl font-serif text-blue-900">{counts.housingUnits}</h2>
//           <p className="text-lg font-serif mb-10 text-gray-700">Housing units delivered</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-4xl font-serif text-blue-900">{counts.impactedBeneficiaries}</h2>
//           <p className="text-lg font-serif mb-10 text-gray-700">Impacted Beneficiaries</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-4xl font-serif text-blue-900">{counts.estimatedJobs}</h2>
//           <p className="text-lg font-serif mb-10 text-gray-700">Estimated Jobs Created</p>
//         </div>
//       </div>
//     </section>

//       <div>
//     <hr className="w-full border-t-2 border-blue-950 mt-8" />

//     </div>
//     </section>
//   );
// };

// export default HighlightsSection;