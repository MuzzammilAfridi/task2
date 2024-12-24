import React from 'react'
import Card from './Card'

const Discover = () => {
  return (

<div className="">

    <div className='mt-9 sm:hidden block pb-5'>
        <div className="">
            <h2 className='text-[#3A643B] text-center text-[36px] font-bold'>Discover Ayurveda’s magic with us</h2>

            <p className='text-[14px] sm:w-[671px] sm:text-center sm:mx-auto text-[#666666] mt-6 text-center px-7'>Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, 
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




    <section className="bg-white hidden sm:block  py-12">
      <div className="w-fit mx-auto  ">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700">
            Discover Ayurveda’s Magic With Us
          </h2>
          <p className="text-[#666666] text-center leading-[28px] text-[20px] w-[671px] mx-auto mt-4">
            Ayurvedic treatment aims to balance your body and mind, bringing
            harmony and vitality. It’s like a journey to better health using
            ancient wisdom, a totally effective approach for a better life.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap justify-between px-4     items-center">
          {/* Left Side */}
          <div className="w-[30vw] relative right-24  flex flex-col  space-y-6">
            <div className="flex w-[349px] ml-10 mb-4  items-center">

              <div className="  ">
                <h3 className="font-bold text-gray-800">Personalized Wellness</h3>
                <p className="text-gray-600">
                  Get treatments made just for you based on your individual
                  doshas (body type).
                </p>
              
              </div>

              <div className="">
                <img className='h-[100px] w-[100px] object-contain' src="./heart.png" alt="img" />
              </div>

            </div>
            <div className="flex items-center">
              
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">Focus on Prevention</h3>
                <p className="text-gray-600">
                  Stop problems even before they start.
                </p>
              </div>

             
            
              <div >
                <img className='h-[100px] object-contain ml-4 w-[60px]' src="./focus.png" alt="img" />
              </div>

            </div>

            <div className="flex ml-10 relative   items-center">
             
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">Mind-Body Connection</h3>
                <p className="text-gray-600">
                  Keep your mind and body in sync for a happy life.
                </p>
              </div>


              <div className="">
                <img className='h-[100px] object-contain w-[60px] ml-4' src="./mind.png" alt="img" />
              </div>

            </div>
          </div>

          {/* Center Image */}
          <div className="w-[20vw]  flex justify-center my-8 md:my-0">
            <div className="relative">



            <div className="relative flex w-[35vw] justify-center items-center">
  {/* Background Image */}
  <img
    className="absolute w-[600px] h-auto object-cover rounded-full"
    src="./disBack.png"
    alt="Background Image"
  />
  {/* Foreground Image */}
  <img
    className="relative w-[600px] h-[600px] object-cover rounded-full"
    src="./disLady.png"
    alt="Foreground Image"
  />
</div>


              {/* <Image
                src="/ayurveda-meditation.png" // Replace with your image path
                alt="Ayurveda Meditation"
                width={250}
                height={250}
                className="rounded-full"
              /> */}
              {/* <div className="absolute inset-0 flex justify-center items-center"> */}
                {/* <Image
                  src="/mandala-pattern.png" // Replace with your mandala pattern
                  alt="Mandala Pattern"
                  width={300}
                  height={300}
                  className="absolute -z-10 opacity-50"
                /> */}
              {/* </div> */}
            </div>
          </div>

          {/* Right Side */}
          <div className=" bg-white relative left-24  h-full min-h-[400px] w-[30vw]  pt-10  flex flex-col space-y-6">
            <div className="flex w-[300px] mb-5 items-center">
              <div className=" bg-purple-100 flex  items-center rounded-full">
              <img className='h-auto object-contain' src="./heal.png" alt="img" />

              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">Holistic Healing</h3>
                <p className="text-gray-600">
                  Fix the root problem for long-lasting health.
                </p>
              </div>
            </div>
            <div className="flex ml-10  w-[300px] items-center">
            <div className=" bg-purple-100 flex  items-center rounded-full">
              <img className='h-auto object-contain' src="./remedi.png" alt="img" />

              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">Natural Remedies</h3>
                <p className="text-gray-600">
                  Using herbs and natural therapies for healing.
                </p>
              </div>
            </div>
            <div className="flex relative top-6 w-[300px] items-center">
            <div className=" bg-purple-100 flex  items-center rounded-full">
              <img className='h-auto object-contain' src="./imunity.png" alt="img" />

              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">Boosting Immunity</h3>
                <p className="text-gray-600">
                  Stay strong and healthy for life, not just for today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




    </div>
  )
}

export default Discover
