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

    <div className="sm:flex">
   {featureData.map((elem, idx)=>(
     <span key={idx} className=' border-b sm:border-r sm:border-b-0  flex gap-5 sm:gap-2 px-3 items-center h-[122px] mx-auto w-[90vw] sm:w-[23vw]'>
     <img className='sm:relative sm:right-6' src={elem.img} alt="img" />
     <p className='text-[18px] 
      leading-[25px] text-[#3A643B] font-bold'>{elem.text}</p>
 </span>
   ))}
        </div>
  )
}

export default Feature
