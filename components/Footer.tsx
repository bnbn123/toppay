import React, { useState } from 'react';
import staticData from 'static/assets/data.json';
import Image from 'next/image';
import siteLogo from 'public/assets/img/toppay-logo-white.png';
import { Divider } from 'antd';
import { Select } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { getStaticProps } from 'pages';

const { Option } = Select;
export const Footer = (props: any) => {
  const { t } = useTranslation('common');
  const navItems: string[] = staticData.NAV_BAR_ITEMS;
  const [lang, setLang] = useState<string>('en');
  const menuItem = navItems.map((item, index) => {
    const key = index + 1;
    const href = `#${item.toLowerCase().replace(' ', '_')}`;

    return (
      <li key={key} className="px-2 nav__item">
        <a href={href} className="nav__link">
          {t(item)}
        </a>
      </li>
    );
  });
  const router = useRouter();
  const { locale } = router;
  console.log('🚀 ~ file: Footer.tsx ~ line 31 ~ Footer ~ locale', locale);

  function onLangChange(value: string) {
    setLang(value);
    console.log(value);
  }
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
            <div className="intl">
              &copy;2021 company
              <>
                <Select value={lang} style={{ width: 120, marginLeft: '10px' }} onChange={onLangChange}>
                  <Option value="en">
                    <Link href="/" locale="en">
                      English
                    </Link>
                  </Option>
                  <Option value="vi">
                    <Link href="/" locale="vi">
                      Tiếng Việt
                    </Link>
                  </Option>
                </Select>
              </>
            </div>
          </div>
          <div className="right-footer-text">Terms of service</div>
        </div>
      </div>
    </footer>
  );
};
