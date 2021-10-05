import React from 'react';
import Image from 'next/image';
import styles from 'styles/Services.module.css';
import { Card } from 'antd';
import { SingleProduct } from './SingleProduct';
import staticData from 'static/assets/data.json';
import Item from 'antd/lib/list/Item';

export const ProductList = (props: any) => {
  const navItems = staticData.PRODUCTS;
  const productsItem = navItems.map((item, index) => {
    return (
      <SingleProduct
        prodName={item.prodName}
        prodSum={item.prodSum}
        prodDescription={item.prodDescription}
        imgSrc={item.imgSrc}
        rightSided={item.right}
      />
    );
  });

  return (
    <section className="product section" id="product">
      <div className="product__container">{productsItem}</div>
    </section>
  );
};
