'use client'
import React, { useState } from 'react';
import Card from './Card';
import Story from './Story';
import ExpertCard from './ExpertCard';

const ExpertCarousel = () => {
  const cards = [
    { title: 'Card 1', description: 'You must make an appointment in advance, to choose the service and date.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    { title: 'Card 4', description: 'This is the fourth card.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="p-8">
      {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Ayurvedic Approach</h1> */}
      <div className="relative  max-w-[1232px] mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex gap-8 mx-auto w-[981px]   transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
           
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          <ExpertCard/>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? 'bg-[#3A643B]' : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertCarousel;
