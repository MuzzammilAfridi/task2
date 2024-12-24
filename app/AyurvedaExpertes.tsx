import React from 'react'
import Carousel from './Crousel'
import ExpertCarousel from './ExpertCroudel'

const AyurvedaExpertes = () => {
  return (
    <div className='h-[680px] pt-10 w-screen bg-white'>
    <h2 className='w-[275px] mx-auto font-bold text-[32px] text-center leading-[41.22px] text-[#3A643B]'>Meet our Ayurveda experts </h2>

    {/* <Story/> */}
    <ExpertCarousel/>
  </div>
  )
}

export default AyurvedaExpertes
