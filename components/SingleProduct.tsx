import React from 'react';
import staticData from 'static/assets/data.json';
import Image from 'next/image';
import siteLogo from 'public/assets/img/toppay-logo.png';
import { Divider } from 'antd';

interface IProps {
  prodName?: string;
  prodSum?: string;
  prodDescription?: string;
  imgSrc?: string;
  rightSided?: boolean;
}
export const SingleProduct = ({ prodName, prodDescription, prodSum, imgSrc, rightSided = false }: IProps) => {
  return (
    <section className="relative flex flex-col items-center py-10 pb-20" id="">
      <img className="absolute top-0" src="assets/img/bg-services.png"></img>
      <div className="flex flex-col md:flex-row w-3/4  justify-evenly items-center">
        <div className={`mb-6 flex items-end md:flex w-full lg:w-2/6 z-10 ${rightSided && 'md:order-last'}`}>
          <img src={imgSrc} alt="product" className="object-contain" />
        </div>
        <div className="product-info md:w-1/3">
          <h1 className="product-title text-left text-5xl mb-6">{prodName}</h1>
          <span className="product-title text-3xl inline-block mb-6">{prodSum}</span>
          <p className="product-description font-normal font-DMSANS text-gray-400">{prodDescription}</p>
        </div>
      </div>
    </section>
  );
};
