import React from "react";

export default function Management() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-950 to-indigo-700">
      {/* Transparent Card */}
      <div className="relative z-10 max-w-full mt-5 mx-auto ml-5 mr-5 bg-white/10 rounded-xl px-8 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-teal-400 uppercase tracking-wider">Management</h2>
          <a href="#" className="text-teal-400 text-sm uppercase tracking-wide">
            See All Leaders &rarr;
          </a>
        </div>
        <p className="text-white text-4xl font-light">
          Shelter Afrique's Board shares the responsibility of directing the institution's strategic goals, and the implementation of the same by the rest of the organisation.
        </p>
      </div>

      {/* Job Cards */}
      <div className="relative z-20 flex overflow-x-auto hide-scrollbar snap-x snap-mandatory w-full px-4 pb-24 pt-8">
        {[
          "Ben",
          "Regina",
          "Aliza",
          "Steve",
          "Guilherme",
          "Xavier",
        ].map((name, index) => (
          <div
            key={index}
            className="relative snap-start w-full shrink-0 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-4 mb-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-white opacity-50 z-10"></div>
            <img
              src={`/${name.toLowerCase()}.jpg`}
              alt={name}
              className="w-full h-48 object-cover z-0"
            />
            <div className="relative p-4 z-20">
              <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>
              <p className="text-gray-600">Position | Location</p>
              <p className="mt-2 text-gray-600 text-sm">
                A brief description about the individual's experience or role.
              </p>
              <a href="#" className="text-teal-500 mt-4 block">
                Meet {name} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Bottom Space */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-r from-blue-950 to-indigo-700"></div>
    </section>
  );
}
