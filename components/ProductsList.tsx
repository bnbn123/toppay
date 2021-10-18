import React from 'react';
import Image from 'next/image';
import styles from 'styles/Services.module.css';
import { Card } from 'antd';
import { SingleProduct } from './SingleProduct';
import staticData from 'static/assets/data.json';
import Item from 'antd/lib/list/Item';
import { useTranslation } from 'next-i18next';

export const ProductList = (props: any) => {
  const { t } = useTranslation('common');

  const navItems = staticData.PRODUCTS;
  const productsItems = navItems.map((item, index) => {
    console.log(t(item.prodName));

    return (
      <section className="relative flex flex-col items-center py-10 pb-20" id="">
        <img className="absolute top-0" src="assets/img/bg-services.png"></img>
        <div className="flex flex-col md:flex-row w-3/4  justify-evenly items-center">
          <div className={`mb-6 flex items-end md:flex w-full lg:w-2/6 z-10 ${item.right && 'md:order-last'}`}>
            <img src={item.imgSrc} alt="product" className="object-contain" />
          </div>
          <div className="product-info md:w-1/3">
            <h1 className="product-title text-left text-4xl mb-5">{t(item.prodName)}</h1>
            <span className="product-title text-xl inline-block mb-5">{t(item.prodSum)}</span>
            <p className="product-description font-normal font-DMSANS text-gray-400">{t(item.prodDescription)}</p>
          </div>
        </div>
      </section>
    );
  });

  return (
    <section className="product" id="product">
      <div className="product__container">{productsItems}</div>
    </section>
  );
};
