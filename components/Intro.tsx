import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export const Intro = () => {
  const { t } = useTranslation('common');

  return (
    <div className="w-screen md:h-screen flex flex-col items-center mb-12">
      <img
        className="h-1/2 md:h-3/4 w-full toppay-bng object-cover md:object-fill absolute"
        src="/assets/img/toppay-background.png"
        alt="toppay-device"
      ></img>

      <div className="mt-24 md:mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center z-20 text-center ">
          <div
            className="text-3xl md:text-5xl heading-primary--main text-white font-bold font-"
            dangerouslySetInnerHTML={{ __html: t('introSlogan') }}
          ></div>
          <span className="text-xs md:text-2xl heading-primary--sub text-gray-200">{t('slogan')}</span>
        </div>
        <a
          href="#contact"
          className="text-center btn btn--white btn--animated mt-5 md:mt-12 w-5/12 md:w-1/3 py-2 px-3 md:py-4 md:px-12"
        >
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
