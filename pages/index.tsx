import { Promotions } from 'components/Carousel';
import { Contact } from 'components/Contact';
import { Footer } from 'components/Footer';
import { HeaderCustom } from 'components/Header';
import { Providers } from 'components/Providers';
import { Services } from 'components/Services';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      {/* Header Section */}
      <HeaderCustom />

      <main className="l-main">
        {/*===== HOME =====*/}
        {/* <Hero /> */}
        {/*===== SERVICES =====*/}
        <Services />
        {/*===== PROMOTIONS =====*/}
        <Promotions />
        {/*===== PROVISER =====*/}
        <Providers />
        {/*===== CONTACT =====*/}
        <Contact />
      </main>
      {/*===== FOOTER =====*/}
      <Footer />
    </>
  );
};

export default Home;
