import React from 'react'

const Story = () => {
  return (
    <div className='flex gap-5 px-3 min-w-fit'>
        <div className="border-2 mt-8 sm:h-[371px] w-[85vw] sm:w-[280px] pb-8 mx-auto overflow-hidden rounded-[20px] bg-[#FFFFFF] shadow-lg">
            <div className="w-[90vw] h-[55px]  bg-[#F5F3FC] ">
            <p className='font-bold leading-[55px] ml-5'>Consulted for Skin</p>
            </div>
            {/* Profile */}
            <span className='flex  items-center justify-between pr-5'>
                <span className='flex items-center '>
                <img src="./chat.svg" alt="img" />
                <span>
                <p className='font-medium  leading-[23px]'>Sophie Moore</p>
                <p className='text-[#414141] text-[15px]'>Chennai</p>
                </span>
                </span>
                <p className='text-[#414141] text-[15px]'>17/02/24</p>
            </span>

            <p className='my-5 ml-5'>Rating</p>

            {/* Feedback */}
            <span >
               <p className='text-[20px] ml-5 font-bold text-[#333333] leading-[22px] my-5'>"One of a kind service"</p>
               <p className='leading-[30px] ml-5 sm:ml-3 sm:pr-8 pb-5 w-[308px] text-[#555555]'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p> 
               </span>
        </div>
      
    </div>
  )
}

export default Story
