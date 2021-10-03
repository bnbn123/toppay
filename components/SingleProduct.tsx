import React from 'react';
import staticData from 'static/assets/data.json';
import Image from 'next/image';
import siteLogo from 'public/assets/img/toppay-logo.png';
import { Divider } from 'antd';

interface IProps {
  prodName?: string;
  prodSum?: string;
  prodDescription?: string;
}
export const SingleProduct = ({ prodName, prodDescription, prodSum }: IProps) => {
  const navItems: string[] = staticData.NAV_BAR_ITEMS;

  const menuItem = navItems.map((item, index) => {
    const key = index + 1;
    const href = `#${item.toLowerCase().replace(' ', '_')}`;

    return (
      <li key={key} className="px-2 nav__item">
        <a href={href} className="nav__link">
          {item}
        </a>
      </li>
    );
  });

  return (
    <section className="contact section flex justify-center" id="contact">
      <div className="flex flex-row w-3/4 justify-between">
        <div className="form-title-container">
          <h1 className="section-title text-left text-white ">START WITH US</h1>
          <span className="text-3xl text-contact__form mb-3">Free Consultant</span>
          <span className="text-contact__form mb-6">
            We know the best solution for all of your business
            <br /> ideas and we can help you solve all business problems
          </span>{' '}
        </div>
        <div className="flex items-end hidden md:flex w-2/5 lg:w-2/6">
          <img
            src="/assets/img/toppay-hero-device.png"
            alt="product"
            className="object-contain"
            style={{ height: 'fit-content' }}
          />
        </div>
      </div>
    </section>
  );
};
