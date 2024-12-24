import React from 'react'
import CarouselWithCards from './CardWithCrousel'

const Approach = () => {
  return (
    <div className="p-8 ">
      <h1 className="text-center mx-auto leading-[41.22px] text-[32px] sm:text-[48px] text-[#3A643B] w-[261px] sm:w-screen sm:underline  font-bold mb-4">Our ayurvedic approach</h1>
      <p className="text-[16px] text-center leading-[20.61px] w-[302px] sm:w-[772px] sm:text-[20px] sm:leading-[25.76px] text-[#323232] mx-auto">
      At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
      </p>

      <CarouselWithCards/>
    </div>
  )
}

export default Approach
