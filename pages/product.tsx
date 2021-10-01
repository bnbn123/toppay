import { Promotions } from 'components/Carousel';
import { Contact } from 'components/Contact';
import { HeaderCustom } from 'components/Header';
import { Hero } from 'components/Hero';
import { ProductList } from 'components/ProductsList';
import { Providers } from 'components/Providers';
import { Services } from 'components/Services';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';

const Product: NextPage = () => {
  return (
    <>
      <HeaderCustom />
      <main className="l-main">
        <ProductList />
      </main>
    </>
  );
};

export default Product;
