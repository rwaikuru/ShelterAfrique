import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody } from '@nextui-org/react';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { IconClipboardCopy, IconFileBroken, IconSignature } from '@tabler/icons-react';

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#F3F4F1] rounded-lg ml-5 mr-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-[#FFFFFF] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="absolute top-2 right-2 rounded-full bg-gray-200 p-2">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-gray-600" />
      </div>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

const SkeletonOne = () => <div className="skeleton skeleton-one" />;
const SkeletonTwo = () => <div className="skeleton skeleton-two" />;
const SkeletonThree = () => <div className="skeleton skeleton-three" />;
const SkeletonFour = () => <div className="skeleton skeleton-four" />;

function Projects() {
  const router = useRouter();
  const [viewAll, setViewAll] = useState(false);

  const handleRedirect = (url) => {
    router.push(url);
  };

  const toggleView = (option) => {
    setViewAll(option === 'all');
  };

  const regionItems = [
    {
      title: "Residential",
      description: "residential housing by shelter afrique",
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mortgage Finance",
      description: "mortgage finance by shelter afrique",
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Commercial",
      description: "commercials financed by shelter afrique",
      header: <SkeletonThree />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mixed Use",
      description: "Mixed use financed by shelter afrique",
      header: <SkeletonFour />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    }
  ];

  const allItems = [
    {
      title: "Eastern Africa",
      description: "About eastern africa projects.",
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Western Africa",
      description: "About eastern africa projects..",
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Northern Africa",
      description: "About eastern africa projects..",
      header: <SkeletonThree />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Central Africa",
      description: "About eastern africa projects..",
      header: <SkeletonFour />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    }
  ];

  return (
    <div className="  h-screen bg-[#F3F4F1] p-10 border-t-2 flex flex-col items-center rounded-t-3xl border-b-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Projects Financed</h1>
        <h2 className="text-lg mt-2">
          We’ve been supporting businesses in Africa since 1995. Below are the success stories of what we have accomplished so far.
        </h2>
      </div>
      <div className="relative w-full mb-8 flex justify-center">
        <div className="relative flex items-center">
          <div className="flex items-center justify-center rounded-full border-2 border-gray-300 p-1 bg-white">
            <button
              onClick={() => toggleView('regions')}
              className={`px-6 py-2 rounded-full ${!viewAll ? 'bg-[#ffffff] text-black' : 'bg-gray-300 text-black'}`}
            >
              View with Regions
            </button>
            <button
              onClick={() => toggleView('all')}
              className={`px-6 py-2 rounded-full ${viewAll ? 'bg-[#ffffff] text-black' : 'bg-gray-300 text-black'}`}
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-hidden mb-8">
        <BentoGrid>
          <AnimatePresence>
            {(viewAll ? allItems : regionItems).slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <BentoGridItem
                  className={item.className}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </BentoGrid>
      </div>
      <button className="px-6 py-2 bg-blue-950 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-auto mx-auto align-middle justify-center">
        Explore More
      </button>
    </div>
  );
}

export default Projects;
