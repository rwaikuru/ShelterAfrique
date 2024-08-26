import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";

// Main Hero component
export default function Projects() {
  return (
    <div className="flex flex-col items-start">
      <div className="grid grid-cols-4 gap-4 w-full">
        <Card>
          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
          <CardTitle>Damn good card</CardTitle>
          <CardDescription>
            A card that showcases a set of tools that you use to create your
            product.
          </CardDescription>
        </Card>
        <Card>
          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
          <CardTitle>Another card</CardTitle>
          <CardDescription>
            Another description for another card showcasing different tools.
          </CardDescription>
        </Card>
        <Card>
          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
          <CardTitle>Third card</CardTitle>
          <CardDescription>
            A third card with its own description and tools.
          </CardDescription>
        </Card>
        <Card>
          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
          <CardTitle>Fourth card</CardTitle>
          <CardDescription>
            The fourth card in the row with more tools and information.
          </CardDescription>
        </Card>
      </div>
      <div className="mt-8 text-right">
        {/* Add any buttons or additional elements here */}
      </div>
    </div>
  );
}

// The Skeleton component animates the icons within the card
const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      { scale, transform },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      { scale, transform },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      { scale, transform },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      { scale, transform },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-4 overflow-hidden h-full relative flex items-center justify-center bg-white">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-10 w-10 circle-1">
          <img src="/africa image.svg" alt="Claude Logo" className="h-6 w-6" />
        </Container>
        <Container className="h-10 w-10 circle-2">
          <img src="/lease.svg" alt="Go Copilot" className="h-5 w-5" />
        </Container>
        <Container className="h-10 w-10 circle-3">
          <img src="/wired-outline-63-home.gif" alt="OpenAI Logo" className="h-6 w-6" />
        </Container>
        <Container className="h-10 w-10 circle-4">
          <img src="/system-solid-178-work.gif" alt="Meta Icon" className="h-5 w-5" />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

// Sparkles component creates a starry effect
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

// The Card component provides the card layout
export const Card = ({ className, children }) => {
  return (
    <div
      className={`max-w-xs w-full mx-auto p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-300 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group ${className}`}
    >
      {children}
    </div>
  );
};

// Title of the card
export const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={`text-md font-semibold text-black dark:text-white py-2 ${className}`}
    >
      {children}
    </h3>
  );
};

// Description of the card
export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={`text-xs font-normal text-black dark:text-neutral-400 max-w-sm ${className}`}
    >
      {children}
    </p>
  );
};

// Skeleton container within the card for animation effects
export const CardSkeletonContainer = ({ className, children, showGradient = true }) => {
  return (
    <div
      className={`h-[10rem] md:h-[15rem] rounded-xl z-40 ${className} ${showGradient && "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"}`}
    >
      {children}
    </div>
  );
};

// Container for individual icons within the Skeleton
const Container = ({ className, children }) => {
  return (
    <div
      className={`h-10 w-10 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] ${className}`}
    >
      {children}
    </div>
  );
};
