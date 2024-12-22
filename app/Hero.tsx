import React from 'react';

const Hero = () => {
  return (
    <div
      className="h-[calc(100vh-100px)] bg-cover bg-center relative"
      style={{
        backgroundImage: `url('./mobile-hero.jpg')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex pt-32 flex-col h-full leading-[33.6px] text-white">
        <p className='leading-[16px] px-5 text-[16px] text-[#FFF7E2] my-7'>Namaste, Welcome to Amrutam </p>

        <h1 className="text-[24px] px-5 font-bold ">Step into Holistic Healing <br /> with Ayurveda <br /> Book Consultation with <br />certified Experts. </h1>
      
       <p className='text-[14px] leading-[19.6px] font-medium text-[#C9C9C9] px-5 my-5'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>

       <button className='text-[14px] font-medium leading-[13.14px] bg-[#3A643B] rounded-[10px] h-[50px] mt-10 w-[214px] ml-5'>Book an Appointment</button>
      </div>
    </div>
  );
};

export default Hero;
