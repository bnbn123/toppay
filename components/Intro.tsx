import Image from 'next/image';

export const Intro = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <img
        className="h-full md:h-3/4 w-full toppay-bng object-none md:object-fill absolute"
        src="/assets/img/toppay-background.png"
        alt="toppay-device"
      ></img>

      <div className="mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center z-20">
          <span className="text-2xl md:text-5xl heading-primary--main text-white">We will exceed your </span>
          <span className="text-2xl md:text-5xl heading-primary--main text-white">Expectations</span>
          <span className="text-xs md:text-2xl heading-primary--sub text-white">
            We have the solution for every businesses
          </span>
        </div>
        <a href="#contact" className="btn btn--white btn--animated mt-12">
          Get Started
        </a>
      </div>

      <img
        className="md:absolute md:bottom-0 w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/6 toppay-device z-20 mt-14"
        src="/assets/img/toppay-hero-device.png"
        alt="toppay-device"
      ></img>
    </div>
  );
};
