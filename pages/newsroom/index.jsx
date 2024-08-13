import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Ensure you have this package installed
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Helper function to generate random reading times
const getRandomReadingTime = () => {
  const times = ["8 min read", "10 min read", "12 min read", "5 min read", "15 min read"];
  return times[Math.floor(Math.random() * times.length)];
};

// Helper function to generate random dates
const getRandomDate = () => {
  const dates = [
    "January 03, 2023",
    "February 15, 2023",
    "March 20, 2023",
    "April 05, 2023",
    "May 22, 2023"
  ];
  return dates[Math.floor(Math.random() * dates.length)];
};

const newsItems = [
  {
    title: "Breaking News 1",
    description: "Brief description of the news item goes here.",
    imageSrc: "/handhouse.avif",
    link: "/news1",
    icon: "/icon1.svg",
    date: getRandomDate(),
    readTime: getRandomReadingTime()
  },
  {
    title: "Breaking News 2",
    description: "Brief description of the news item goes here.",
    imageSrc: "/news2.jpg",
    link: "/news2",
    icon: "/icon2.svg",
    date: getRandomDate(),
    readTime: getRandomReadingTime()
  },
  {
    title: "Breaking News 3",
    description: "Brief description of the news item goes here.",
    imageSrc: "/news3.jpg",
    link: "/news3",
    icon: "/icon3.svg",
    date: getRandomDate(),
    readTime: getRandomReadingTime()
  },
  {
    title: "Breaking News 4",
    description: "Brief description of the news item goes here.",
    imageSrc: "/news4.jpg",
    link: "/news4",
    icon: "/icon4.svg",
    date: getRandomDate(),
    readTime: getRandomReadingTime()
  },
  {
    title: "Breaking News 5",
    description: "Brief description of the news item goes here.",
    imageSrc: "/news5.jpg",
    link: "/news5",
    icon: "/icon5.svg",
    date: getRandomDate(),
    readTime: getRandomReadingTime()
  },
  {
    title: "Breaking News 6",
    description: "Brief description of the news item goes here.",
    imageSrc: "/news6.jpg",
    link: "/news6",
    icon: "/icon6.svg",
    date: getRandomDate(),
    readTime: getRandomReadingTime()
  },
];

const Newsroom = () => {
  return (
    <section className="w-full py-10 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <a href="/all-news" className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            View All
          </a>
        </div>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          emulateTouch
          showStatus={false}
          swipeable
          showArrows
          dynamicHeight
          className="relative"
          centerMode
          centerSlidePercentage={33} // Shows 3 cards at a time
        >
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col max-w-xs mx-auto">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="object-cover w-full h-40" // Adjusted height
              />
              <div className="p-4 bg-white flex-1">
                <p className="text-gray-500 text-sm mb-2 text-center">{item.date}</p>
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-justify">{item.description}</p>
                <div className="flex justify-between items-center">
                  <a href={item.link} className="text-blue-500 underline hover:text-blue-700 text-sm">
                    Read More
                  </a>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Newsroom;
