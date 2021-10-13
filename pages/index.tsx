import { Promotions } from 'components/Carousel';
import { Contact } from 'components/Contact';
import { Footer } from 'components/Footer';
import { HeaderCustom } from 'components/Header';
import { Intro } from 'components/Intro';
import { Providers } from 'components/Providers';
import { Services } from 'components/Services';
import type { NextPage } from 'next';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <HeaderCustom />
      <Intro />
      <div className="w-screen">
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
      </div>
      {/*===== FOOTER =====*/}
      <Footer />
    </div>
  );
};
interface LocaleProps {
  locale: string;
}

export async function getStaticProps({ locale }: LocaleProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
