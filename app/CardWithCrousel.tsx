'use client'
import React, { useState } from 'react';

const CarouselWithCards = () => {
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
    <div className="py-8">
      {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Ayurvedic Approach</h1> */}
      <div className="relative max-w-[1232px] mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex gap-5 pb-5 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full sm:w-[280px]   h-[315px] rounded-[20px] bg-[#FFF7E2] border-t-[5px] shadow-md border-[#3A643B] flex items-center  justify-center px-4">
                <div className=" flex items-center  justify-center flex-col gap-3  w-[90vw] rounded-lg p-6">
                    <span className='h-[90px] flex items-center justify-center  text-white w-[90px] rounded-full bg-[#3A643B]'>
                  <h2 className="text-[48px]  font-bold leading-[62px] text-center mb-2">
                    1
                  </h2>
                  </span>
                  <p className='text-[#3A643B] font-bold text-[24px] leading-[32px] text-center'>Make Appointment</p>
                  <p className="text-center text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
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

export default CarouselWithCards;
