import React from 'react'

const Feature = () => {
    const featureData = [
        {
            img:'./chat.svg',
            text : 'convenient online & In-clinic consultations'
            
        },
        {
            img:'./secure.png',
            text : 'Safe and effective treatment'
            
        },
        {
            img:'./exper.png',
            text : 'Experienced Ayurvedic Practitioners'
            
        },
        {
            img:'./personal.png',
            text : 'personalized Treatment Plans & Guidance'
            
        }
    ]
  return (

    <div className="">
   {featureData.map((elem, idx)=>(
     <span key={idx} className=' border-b flex gap-5 px-3 items-center h-[122px] mx-auto w-[90vw] '>
     <img src={elem.img} alt="img" />
     <p className='text-[18px] leading-[25px] text-[#3A643B] font-bold'>{elem.text}</p>
 </span>
   ))}
        </div>
  )
}

export default Feature
