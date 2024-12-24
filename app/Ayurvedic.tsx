import React from 'react'
import Box from './Box'

const Ayurvedic = () => {
  return (
    <div className='pb-8 flex flex-col items-center justify-center h-fit sm:h-[876px] bg-[#FFF7E2]'>
      <div className="">
        <p className='text-[48px] leading-[61.82px] text-center font-bold text-[#3A643B] mb-8'>What sets Ayurvedic consultations apart?</p>

{/* Container */}
        <div className="py-5  flex sm:flex-row flex-col gap-5">
          {/* Individual box */}
          <div className="bg-white sm:w-[40vw] border rounded-[20px] border-[#3A643B] border-t-[5px]  flex-col flex items-center justify-center h-[286px]">
            <h2 className='text-[#3A643B] text-center sm:leading-[50.88px] sm:text-[32px]'>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h2>
            <p className='sm:w-[443px] sm:text-[18px] text-[#3A643B] sm:leading-[23.18px] text-center'>[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>
          </div>

          {/* Image */}
          <img className='sm:w-[25vw] w-[93vw] h-[285px] mx-auto sm:mx-0 sm:h-[285px] object-cover rounded-[20px]' src="./hair.jpg" alt="img" />

          <Box/>
        </div>

        <div className="flex justify-center flex-col sm:flex-row gap-4 ">
          <div className="hidden sm:block">
          <Box/>
          </div>
          <img className='sm:w-[20vw] w-[93vw] h-[285px] sm:h-[285px] mx-auto sm:mx-0 object-cover rounded-[20px]' src="./remImg.png" alt="img" />


          <Box/>


 <img className='sm:w-[20vw] sm:h-[285px] w-[93vw] h-[285px] mx-auto sm:mx-0 object-cover rounded-[20px]' src="./lady.jpg" alt="img" />
        </div>
      </div>
      
    </div>
  )
}

export default Ayurvedic
