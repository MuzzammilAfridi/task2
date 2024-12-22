import React from 'react'
import Card from './Card'

const Discover = () => {
  return (
    <div className='mt-9 pb-5'>
        <div className="">
            <h2 className='text-[#3A643B] text-center text-[36px] font-bold'>Discover Ayurveda’s magic with us</h2>

            <p className='text-[14px] text-[#666666] mt-6 text-center px-7'>Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, 
            a totally effective approach for a better life. </p>
        </div>
        <div className="w-screen mt-8">
            <img className='h-[328px] mx-auto object-contain object-center' src="./discover.png" alt="img" />
        </div>


        {/* Cards */}
        <div >
            <Card/>
            
        </div>
      
    </div>
  )
}

export default Discover
