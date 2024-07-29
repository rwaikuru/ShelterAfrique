"use client";

import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function Partners() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div>
            <h1 className="text-3xl font-bold mb-5">Featured Partners</h1>
        </div>
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const images = [
  {
    src: "/partners/AFD-Logo.png",
    alt: "AFD Logo",
  },
  {
    src: "/partners/AfricaRe-Logo.png",
    alt: "AfricaRe Logo",
  },
  {
    src: "/partners/European-Investment-Bank-Logo.png",
    alt: "European Investment Bank Logo",
  },
  {
    src: "/partners/Excellence-In-Design-Logo.png",
    alt: "Excellence In Design Logo",
  },
  {
    src: "/partners/IUHF-Logo-Final.png",
    alt: "IUHF Logo",
  },
  {
    src: "/partners/Fonds-De-Solidarite-Africain-Logo.png",
    alt: "Fonds De Solidarite Africain Logo",
  },
];
