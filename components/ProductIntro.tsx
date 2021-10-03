import Image from 'next/image';

export const ProductIntro = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <img
        className="h-full md:h-1/2 w-full toppay-bng  absolute"
        src="/assets/img/Background.svg"
        alt="toppay-device"
        objectFit="cover" // change to suit your needs
        layout="fill"
      ></img>

      <div className="mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center z-20">
          <span className="text-xs md:text-2xl heading-primary--sub text-white">lorem ipsum</span>
          <span className="text-2xl md:text-7xl heading-primary--main text-white">PRODUCT </span>
          <span className="text-xs md:text-2xl heading-primary--sub text-white">lorem ipsum</span>
        </div>
      </div>
    </div>
  );
};
