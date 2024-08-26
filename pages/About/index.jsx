import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-300 to-blue-900 text-white py-16 ml-10 mr-10 rounded-xl">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-teal-100 text-sm font-semibold">
            SHELTER AFRIQUE
          </h2>
          <h2 className="text-teal-100 text-sm font-semibold">
            VIEW OUR HISTORY →
          </h2>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-left mb-16">
         Explore our Organization
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
            <Image 
             src="/wired-outline-63-home.gif"
             width={50}
             height={50}

             />
            </div>
            <h3 className="text-xl font-semibold mb-4">Annual Reports</h3>
            <p>
            Download presentations of Shelter Afrique annual results for the past year and previous years.
            </p>
            <h2 className="text-teal-900 text-sm font-semibold mt-5">
            Learn more →
          </h2>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
             <Image 
             src="/wired-outline-63-home.gif"
             width={50}
             height={50}

             />
            </div>
            <h3 className="text-xl font-semibold mb-4">
             News and Reports
            </h3>
            <p>
              Catch up on articles by shelter afriques events.
            </p>
            <h2 className="text-teal-900 text-sm font-semibold mt-5">
            Learn more →
          </h2>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
            <Image 
             src="/wired-outline-63-home.gif"
             width={50}
             height={50}

             />
            </div>
            <h3 className="text-xl font-semibold mb-4">
             Member Countries
            </h3>
            <p>
              Get to see the Countries in partnership with shelterafrique
            </p>
            <h2 className="text-teal-900 text-sm font-semibold mt-5">
            Learn more →
          </h2>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
            <Image 
             src="/wired-outline-63-home.gif"
             width={50}
             height={50}

             />
            </div>
            <h3 className="text-xl text-blue-900 font-semibold mb-4">
              Newsletters
            </h3>
            <p>
              get to download newsletters by shelterafrique
            </p>
            <h2 className="text-teal-900 text-sm font-semibold mt-5">
            Learn more →
          </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
