import React from "react";
import staticData from "static/assets/data.json";
import Image from "next/image";
import siteLogo from "public/assets/img/toppay-logo.png";

export const HeaderCustom = (props: any) => {
  const navItems: string[] = staticData.NAV_BAR_ITEMS;

  const menuItem = navItems.map((item, index) => {
    const key = index + 1;
    const href = `#${item.toLowerCase().replace(" ", "_")}`;

    return (
      <li key={key} className="nav__item">
        <a href={href} className="nav__link">
          {item}
        </a>
      </li>
    );
  });

  return (
    <header className="l-header">
      <nav className="nav">
        <div className="">
          <Image src={siteLogo} alt="logo" className="nav__logo" />
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">{menuItem}</ul>
        </div>
        <div className="nav__menu" id="nav-menu">
          <a href="#" className="btn btn--white btn--animated">
            Get Started
          </a>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" />
        </div>
      </nav>
      <div className="nav__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">the preferred payment</span>
          <span className="heading-primary--main">processing company</span>
          <span className="heading-primary--sub">
            we have the solution for every businesses
          </span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Get Started
        </a>
      </div>
    </header>
  );
};
