import Image from "next/image";
import { Button } from "../ui/button";
import ParticlesBackground from "../ParticlesBackground";


const Hero = () => {
  return (
    <>
      <main className="w-full h-screen md:h-[500px] md:max-h-[800px] flex justify-center items-center">
        <div className="relative w-full h-full lg:max-w-7xl rounded-3xl animate-fadeIn">
          <div className="w-full h-full z-[3] flex flex-col items-start justify-center lg:justify-end p-4 lg:p-[3rem] gap-3 lg:gap-4">
            <h1 className="font-poppins text-white text-4xl lg:text-5xl font-bold">Ably Care ❤️ <br className="hidden md:block"/>We're for everyone</h1>
            <h2 className="font-poppins text-white font-bold"> we celebrate diversity and welcome everyone exactly as they are </h2>
            <p className="text-white text-xs font-extralight font-inter sm:w-[70%] lg:w-[50%]">
              At Ably Care, we understand that true care goes beyond assistance. It's about 
              building genuine connections and empowering you to live your life to the fullest. We 
              provide personalized home and disability support, crafted with empathy and 
              expertise. Discover a partner who truly cares. 
            </p>
            <Button className="bg-customAccent text-white hover:bg-complementary rounded-xl transition-all duration-300 ease-in-out">See More</Button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full lg:max-w-7xl rounded-3xl overflow-hidden z-[-1]">
            <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent z-[3]"></div>
            <div className="absolute w-full h-full z-[1]">
              <Image
                src="/images/HOMEPAGE/1. Header .png"
                alt="Ably Care Logo"
                fill
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute w-[205px] lg:w-[245px] h-[250px] lg:h-[300px] right-[-8px] bottom-0 z-10 scale-x-[-1]"> 
            <Image
              src={"/images/char-draft01.png"}
              alt="Ably Care Persona"
              fill
              className="absolute w-full h-full object-contain"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
