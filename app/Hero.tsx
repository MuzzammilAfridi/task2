const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] relative">
      <div
        className="bg-cover bg-center absolute inset-0 lg:hidden"
        style={{
          backgroundImage: `url('/mobile-hero.jpg')`,
        }}
      ></div>
      <div
        className="bg-cover bg-center absolute  object-cover   inset-0  transform scale-x-[-1] hidden lg:block"
        style={{
          backgroundImage: `url('/desktop-img.jpg')`,
          backgroundSize : 'contain',
          backgroundRepeat : 'no-repeat',
          backgroundPosition : 'left'

        }}
        
      >
        <img className="scale-x-[-1] h-[calc(100vh-100px)] w-screen" src="./trans.png" alt="img" />
      </div>

      {/* Overlay */}
      <div className="absolute sm:w-[56.4vw] inset-0 bg-[#861a18] bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex pt-32 sm:pt-2 flex-col h-full leading-[33.6px] text-white">
        <p className="leading-[16px] px-5 text-[16px] text-[#FFF7E2] my-7 sm:my-3">
          Namaste, Welcome to Amrutam
        </p>

        <h1 className="text-[24px] w-[326px] px-5 font-bold sm:w-[906px] sm:leading-[67.2px] sm:text-[43px]">
          Step into Holistic Healing  with Ayurveda <br /> Book Consultation with 
          certified Experts.
        </h1>

        <p className="text-[14px] leading-[19.6px] font-medium text-[#C9C9C9] px-5 my-5 sm:w-[788px]">
          Dive into the world of Ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.
        </p>

        <button className="text-[14px] font-medium leading-[13.14px] bg-[#3A643B] rounded-[10px] h-[50px] mt-10 w-[214px] ml-5">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
