import React from 'react';
import staticData from 'static/assets/data.json';
import Image from 'next/image';
import siteLogo from 'public/assets/img/toppay-logo-white.png';
import { Divider } from 'antd';

export const Footer = (props: any) => {
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
    <footer className="w-screen footer section">
      <div className="footer__container">
        <nav className="nav bd-grid">
          <div className="">
            <Image src={siteLogo} alt="logo" className="nav__logo" width={120} height={36} />
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list mb-0">{menuItem}</ul>
          </div>
          <div className="footer__data">
            <h2 className="footer__title"></h2>
            <a href="#" className="footer__social">
              <img src="Facebook.svg" alt="" className=""></img>
            </a>
            <a href="#" className="footer__social">
              <img src="Instagram.svg" alt="" className=""></img>
            </a>
            <a href="#" className="footer__social">
              <img src="Twitter.svg" alt="" className=""></img>
            </a>
          </div>
        </nav>
        <hr className="bd-grid" style={{ color: 'white' }} />
        <div className="nav bd-grid">
          <div className="left-footer-text">
            <div className="intl">&copy;2021 company</div>
          </div>
          <div className="right-footer-text">Terms of service</div>
        </div>
      </div>
    </footer>
  );
};
