import React from 'react';

const AmrutamApp = () => {
  return (
    <div className="w-screen sm:px-20 py-5 h-[1059px] sm:h-screen sm:flex bg-[#FFF7E2]">
      {/* Left Section */}
      <div className="sm:w-1/2 flex flex-col justify-center">
        <div>
          <h1 className="text-[32px] sm:text-[48px] sm:leading-[67.2px] text-[#3A643B] font-bold text-center sm:text-start">
            Amrutam Home App
          </h1>
          <p className="w-[260px] mx-auto sm:mx-0 text-[14px] leading-[18.03px] sm:leading-[21px] sm:text-start text-center mt-3">
            The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
          </p>
        </div>

        {/* Mobile Phone Image */}
        <div className="mt-5 sm:hidden w-screen flex items-center justify-center">
          <img
            className="w-[358px] h-[328px]"
            src="./mobile-phone.png"
            alt="Mobile Phone"
          />
        </div>

        {/* Get a Diet */}
        <div className="w-[82vw] px-2 py-3 mx-auto h-[379px]">
          <p className="text-[20px] leading-[28px] text-center sm:text-[32px] sm:leading-[44.8px] sm:w-[574px] sm:text-start font-medium">
            Get a diet & lifestyle consultation with ayurvedic experts across the globe
          </p>
          <h1 className="text-[36px] mt-4 leading-[50.4px] font-bold">Get the App now</h1>
          <div className="sm:flex gap-4">
            {/* Play Store */}
            <img
              className="h-[80px] mx-auto sm:mx-0 my-5"
              src="./play-store.png"
              alt="Play Store"
            />
            {/* App Store */}
            <img
              className="h-[80px] mx-auto sm:mx-0 my-5"
              src="./app-store.png"
              alt="App Store"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-1/2 sm:flex hidden items-center justify-center">
        <img
          className="h-auto max-h-[500px] w-auto sm:w-[734px] object-contain"
          src="./deskt-phone.png"
          alt="App Store Preview"
        />
      </div>
    </div>
  );
};

export default AmrutamApp;
