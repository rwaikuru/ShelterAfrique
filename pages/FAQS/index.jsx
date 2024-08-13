import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  { question: 'What is ShelterAfrique?', answer: 'ShelterAfrique is a Pan-African Real Estate Finance Institution.' },
  { question: 'How can I invest?', answer: 'You can invest by contacting our investment team via our contact page.' },
  { question: 'What projects do you support?', answer: 'We support a variety of housing and real estate projects across Africa.' },
  { question: 'Where are you located?', answer: 'In Nairobi Kenya, Mamlaka Road.' },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center  bg-[#F3F4F1] mb-5">
      <div className="w-full max-w-6xl bg-[#ffffff] rounded-lg shadow-md p-6 flex">
        <div className="w-1/3 pr-4">
          <h2 className="text-4xl font-bold mb-6 text-black">FAQs</h2>
          <h3 className="text-sm text-black">Looking for Help?Here are our Most Frequently<br/> Asked Questions</h3>
        </div>
        <div className="w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
