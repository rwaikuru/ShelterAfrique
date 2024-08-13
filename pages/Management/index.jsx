"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/carousel";

export function Management() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 relative">
      <button className="absolute top-55 right-20 px-4 py-2 rounded-md border border-neutral-300 bg-blue-950 text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
       All Leaders
      </button>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
        Get to know our {" "}
        <span className="relative inline-block text-blue- mt-4">
          <span className="relative z-10 pr-6 text-4xl text-center ml-6 text-blue-500">
            Team
          </span>
          <span className="absolute inset-0 flex items-center justify-center -right-4 -bottom-2 rounded-full border-2 border-blue-500"></span>
        </span>
        <p className="text-sm font-normal text-center justify-center mt-7">Each of us brings to Shelter Afrique valuable experience and perspective that is core to the quality of operations <br/> and advancement of our mandate as we look to support our members and champion affordable housing for all Africans.</p>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              
            </span>{" "}
            Mr. Thierno-Habib Hann is the Chief Executive Officer of Shelter Afrique, the Pan-African institution for housing. He joined Shelter Afrique from the International Finance Corporation (IFC), where he served as the Asia/Pacific Lead for housing finance, based in Bangkok, Thailand.
          </p>
          <Image
            src="/businesslady.avif"
            alt="Business Lady"
            height="50"
            width="50"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto "
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "Mrs Beatrice Mburu",
    title: "Chief Finance Officer.",
    src: "/businesslady.avif",
    content: <DummyContent />,
  },
  {
    category: "Charles Kazuka",
    title: "Head of Human Capital.",
    src: "/businessman.jpg",
    content: <DummyContent />,
  },
  {
    category: "Juliette",
    title: "Chief Secretary",
    src: "/businesslady.avif",
    content: <DummyContent />,
  },
  {
    category: "Dr Mohammed",
    title: "Head of Policy&Research",
    src: "/businessman.jpg",
    content: <DummyContent />,
  },
  {
    category: "Mr Christopher",
    title: "Head of Credit and Operations",
    src: "/businessman.jpg",
    content: <DummyContent />,
  },
  {
    category: "Nissan",
    title: "Head of Communications and External Affairs",
    src: "/businesslady.avif",
    content: <DummyContent />,
  },
];

export default Management;
