import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-500 py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl text-center">
        <h3 className="text-teal-300 text-sm font-semibold mb-2">
          WHAT WE DO
        </h3>
        <h1 className="text-3xl sm:text-4xl text-white font-bold mb-6">
          We are committed to improving the quality of life for people{" "}
          <span className="text-white">Throughout Africa.</span>
        </h1>

        {/* BentoGrid replacing the current cards */}
        <BentoGrid className="max-w-5xl mx-auto mb-4 grid-cols-4">
          <BentoGridItem
            title="Annual Reports"
            description="View our annual reports to learn about our organization's financial performance, activities, and accomplishments."
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">  
              </div>
            }
            icon={<IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-1"
          >
            <h2 className="text-teal-900 text-sm font-semibold ">
              Learn more →
            </h2>
          </BentoGridItem>

          <BentoGridItem
            title="Member Countries"
            description="Discover the countries that are part of our organization and understand their involvement"
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
            }
            icon={<IconFileBroken className="h-4 w-4 text-neutral-500" />}
          >
            <h2 className="text-teal-900 text-sm font-semibold">
              Learn more →
            </h2>
          </BentoGridItem>

          <BentoGridItem
            title="News and Reports"
            description="Stay updated with our latest news, announcements, and events"
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
            }
            icon={<IconSignature className="h-4 w-4 text-neutral-500" />}
          >
            <h2 className="text-teal-900 text-sm font-semibold ">
              Learn more →
            </h2>
          </BentoGridItem>

          <BentoGridItem
            title="Newsletters"
            description=" Read our quarterly newsletters for insights, updates, and highlights of our activities."
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
            }
            icon={<IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />}
          >
            <h2 className="text-teal-900 text-sm font-semibold ">
              Learn more →
            </h2>
          </BentoGridItem>
        </BentoGrid>

        {/* Action buttons */}
        {/* <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-black hover:text-white transition duration-200"
          >
            SEE OUR VALUES →
          </a>
          <a
            href="#"
            className="border border-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-black hover:text-white transition duration-200"
          >
            Our Strategy →
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
