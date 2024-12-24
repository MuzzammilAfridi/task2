import React from 'react'

const Restore = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[592px] sm:h-[590px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('restore.jpg')" }}
    >
      <div className="bg-black h-full w-screen flex flex-col items-center justify-center bg-opacity-50 gap-8 text-center">
        <h1 className="text-[#FFF7E2] text-[32px] w-[246px] sm:w-[856px] leading-[41.22px] sm:leading-[82.43px] sm:text-[64px] text-center font-medium mb-4">Ready to restore harmony in your mind, body and spirit?</h1>
        
        <button className="w-[257px] h-[66px] rounded-[16px] bg-[#3A643B] text-[20px] font-medium text-white leading-[18.77px] transition">
        Book a consultation
        </button>
      </div>
    </div>
  )
}

export default Restore
