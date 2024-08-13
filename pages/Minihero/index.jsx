import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Card, CardBody, Image, Text} from '@nextui-org/react';

function Minihero() {

  const cardData = [
    
    {
      title: 'Annual Reports',
      description: 'View our annual reports',
      link: 'learnMoreAnnualReports',
      imageUrl: '/annualreports.jpg', // Replace with your image URL
    },
    {
      title: 'Member Countries',
      description: 'View our member countries',
      link: 'learnMoreMemberCountries',
      imageUrl: '/annual-report.jpg', // Replace with your image URL
    },
    {
      title: 'News and Events',
      description: 'View our latest news and events',
      link: 'learnMoreNewsEvents',
      imageUrl: '/media.jpg', // Replace with your image URL
    },
    {
      title: 'Newsletters',
      description: 'View our quarterly newsletters',
      link: 'learnMoreNewsletters',
      imageUrl: '/annualreports.jpg', // Replace with your image URLs
    },
    // ... Add more card data as needed
  ];

  const cardVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-wrap justify-between"> {/* Ensure all cards fit in a row */}
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/2 lg:w-1/4 overflow-hidden rounded-lg shadow-md"
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src={card.imageUrl}
            alt={card.title} // Add alt text for accessibility
            objectFit="cover" // Ensure image fills the card area
            width="100%" // Explicit width for responsiveness
            height="150px" // Adjust height based on your image aspect ratio
          />
          <Card>
          <CardBody css={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}> {/* Add semi-transparent background */}
            <p h4 className="text-blue-950 text-xl font-bold">{card.title}</p>
            <p className="text-black">{card.description}</p>
            <a href={`/${card.link}`} className="text-black hover:text-blue-600">
              Learn More
            </a>
          </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default Minihero;
