import React from 'react'
import Story from './Story'
import Carousel from './Crousel'

const Stories = () => {
  return (
    <div className='h-[680px] pt-10 w-screen bg-[#FFF7E2]'>
      <h2 className='w-[275px] mx-auto font-bold text-[32px] text-center leading-[41.22px] text-[#3A643B]'>Stories from our valued customers!</h2>

      {/* <Story/> */}
      <Carousel/>
    </div>
  )
}

export default Stories
