import Image from 'next/image';

export const ProductIntro = () => {
  return (
    <div className="relative flex flex-col items-center">
      <img
        className="h-full w-full toppay-bng object-cover absolute"
        src="/assets/img/Background.svg"
        alt="toppay-device"
      ></img>

      <div className="py-32 flex flex-col items-center">
        <div className="flex flex-col items-center z-20">
          <span className="text-xs md:text-2xl heading-primary--sub text-white">lorem ipsum</span>
          <span className="text-2xl md:text-6xl font-bold text-white font-DMSANS">PRODUCTS </span>
          <span className="text-xs md:text-2xl heading-primary--sub text-white">lorem ipsum</span>
        </div>
      </div>
    </div>
  );
};
