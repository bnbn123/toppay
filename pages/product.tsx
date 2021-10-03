import { Promotions } from 'components/Carousel';
import { Contact } from 'components/Contact';
import { Footer } from 'components/Footer';
import { HeaderCustom } from 'components/Header';
import { Hero } from 'components/Hero';
import { Intro } from 'components/Intro';
import { ProductIntro } from 'components/ProductIntro';
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
      <ProductIntro />

      <div className="l-main">
        <ProductList />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Product;
