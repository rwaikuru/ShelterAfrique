"use client";

import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function Partners() {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden py-8">
      <div className="w-full max-w-7xl text-center mb-8">
        <h1 className="text-3xl font-bold">Featured Partners</h1>
      </div>
      <InfiniteMovingCards items={images} direction="right" speed="slow" />
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

export default Partners;
