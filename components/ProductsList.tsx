import React from 'react';
import Image from 'next/image';
import styles from 'styles/Services.module.css';
import { Card } from 'antd';
import { SingleProduct } from './SingleProduct';

export const ProductList = (props: any) => {
  return (
    <section className="product section" id="product">
      <div className="product__container">
        <SingleProduct />
      </div>
    </section>
  );
};
