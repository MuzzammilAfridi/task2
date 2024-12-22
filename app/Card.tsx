import React from 'react'

const Card = () => {
    const discoverCard = [
        {
            img : './heart.png',
            h : 'Personalized Wellness',
            p: ' treatments made just for you based on your individual doshas, (body type)'
        },
        {
            img : './focus.png',
            h : 'Focus on prevention',
            p: ' Stop problems even before they start.'
        },
        {
            img : './mind.png',
            h : 'Mind-Body Connection',
            p: ' Keep your mind and body in sync for a happy life.'
        },
        {
            img : './heal.png',
            h : 'Holistic Healing',
            p: ' Fix the root problem for long-lasting health.'
        },
        {
            img : './remedi.png',
            h : 'Natural Remedies',
            p: 'Using herbs and natural therapies for healing.'
        },
        {
            img : './imunity.png',
            h : 'Boosting immunity',
            p: ' Fix the root problem for long-lasting health.'
        },
    ]
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">

        {discoverCard.map((elem, idx)=>(
            <div className="w-[40vw] rounded-lg flex gap- flex-col pt-4 items-center h-[214px] bg-white border border-[#E4E4E4]">
            <img className='w-[63px] h-[59px]' src={elem.img} alt="img" />
            <h3 className='text-[15px] mt-3 font-bold leading-[19.32px] text-center'>{elem.h}</h3>
            <p className='text-[13px] font-medium text-center px-2 mt-2 text-[#6D6B6B]'> {elem.p}</p>
        </div>
        ))}
      
    </div>
  )
}

export default Card
