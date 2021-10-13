import React from 'react';
import { useTranslation } from 'next-i18next';

interface IProps {
  prodName?: string;
  prodSum?: string;
  prodDescription?: string;
  imgSrc?: string;
  rightSided?: boolean;
}
export const SingleProduct = ({ prodName, prodDescription, prodSum, imgSrc, rightSided = false }: IProps) => {
  const { t } = useTranslation('common');
  let productName = prodName && t(prodName);
  let productSummary = prodSum && t(prodSum);
  let productDescription = prodDescription && t(prodDescription);
  return (
    <section className="relative flex flex-col items-center py-10 pb-20" id="">
      <img className="absolute top-0" src="assets/img/bg-services.png"></img>
      <div className="flex flex-col md:flex-row w-3/4  justify-evenly items-center">
        <div className={`mb-6 flex items-end md:flex w-full lg:w-2/6 z-10 ${rightSided && 'md:order-last'}`}>
          <img src={imgSrc} alt="product" className="object-contain" />
        </div>
        <div className="product-info md:w-1/3">
          <h1 className="product-title text-left text-5xl mb-6">{productName}</h1>
          <span className="product-title text-3xl inline-block mb-6">{productSummary}</span>
          <p className="product-description font-normal font-DMSANS text-gray-400">{productDescription}</p>
        </div>
      </div>
    </section>
  );
};
