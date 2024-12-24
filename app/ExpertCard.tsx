import React from 'react'

const ExpertCard = () => {
  return (
    <div className="flex  justify-center items-center   ">
    <div className="w-[295px] relative h-[446px] bg-[#FFF7E2] mx-auto   bg-cream rounded-[40px] overflow-hidden shadow-lg border">
      {/* Profile Image */}
      <div className="flex pt-6 justify-center">
        <div className="w-[150px] h-[150px] rounded-full border-24 overflow-hidden border-gray-300">
         

        <img className='w-full h-full object-cover' src="./profile.png" alt="img" />

        

         
        </div>
      </div>

      {/* Doctor Details */}
      <div className="text-center mt-4">
        <h2 className="text-[20px] leading-[24px] font-semibold mt-5 text-gray-800">
          Dr. Vaishali Sharma
        </h2>
        <p className="text-[15px] text-[#838383] mt-3">
          Ayurveda Practitioner (BAMS, MD)
        </p>
      </div>

      {/* Rating */}
      <div className="flex relative bottom-[105px] justify-center items-center mt-3">
        <span className="flex items-center px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
          4.5
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-1 text-yellow-400"
          >
            <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 5.797 1.4 8.174L12 18.897l-7.334 3.853 1.4-8.174L.133 9.209l8.2-1.193L12 .587z" />
          </svg>
        </span>
      </div>

      {/* Experience and Specialization */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700">
          <span className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1 text-green-500"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17.93c-4.41-.49-7.93-4.31-7.93-8.93 0-4.62 3.52-8.44 7.93-8.93v17.86z" />
            </svg>
            25 years of experience
          </span>
        </p>
        <p className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
          Skin Specialist
        </p>
      </div>

      {/* Book a Session Button */}
      <div className=" absolute bottom-0">
        <button className="w-[295px] h-[65px] bg-green-700 text-white text-sm font-medium rounded-b-lg  hover:bg-green-800">
          Book a session
        </button>
      </div>
    </div>
  </div>

    

    

  

  )
}

export default ExpertCard
