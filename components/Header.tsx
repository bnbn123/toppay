import React from 'react';
import staticData from 'static/assets/data.json';
import Image from 'next/image';
import siteLogo from 'public/assets/img/toppay-logo.png';
import { DrawerMenu } from './Menu';
import { Form, Modal } from 'antd';
import { ContactFormValueProp } from 'types/form';
import ContactForm from './ContactForm';

export const HeaderCustom = (props: any) => {
  const navItems: string[] = staticData.NAV_BAR_ITEMS;
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const menuItem = navItems.map((item, index) => {
    const key = index + 1;
    const href = `#${item.toLowerCase().replace(' ', '_')}`;

    return (
      <li key={key} className="nav__item">
        <a href={href} className="nav__link">
          {item}
        </a>
      </li>
    );
  });

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
  const [form] = Form.useForm<ContactFormValueProp>();
  function onSubmit(params: ContactFormValueProp) {
    console.log('SUbmited');
  }
  return (
    <div className="">
      <header className="l-header">
        <nav className="nav">
          <div className="mt-2 w-1/3 md:w-max">
            {/* find me in styles.css */}
            <Image src={siteLogo} alt="logo" className="nav__logo" />
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">{menuItem}</ul>
          </div>
          <div className="nav__menu" id="nav-menu" onClick={showModal}>
            <a href="#" className="btn btn--white btn--animated">
              Get Started
            </a>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu" />
          </div>
          <DrawerMenu wrapperClassName="md:hidden mb-2" drawerClassName="list-none" menuItems={menuItem} />
        </nav>
        <div className="nav__text-box">
          <h1 className="heading-primary">
            <span className="text-2xl md:text-5xl heading-primary--main">the preferred payment</span>
            <span className="text-2xl md:text-5xl heading-primary--main">processing company</span>
            <span className="text-xs md:text-2xl heading-primary--sub">We have the solution for every businesses</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated" onClick={showModal}>
            Get Started
          </a>
        </div>
      </header>
      <div className="h-96 w-96 relative md:hidden  bd-grid image-container ">
        <Image
          className="toppay-device"
          src="/assets/img/toppay-hero-device.png"
          alt="toppay-device"
          objectFit="cover" // change to suit your needs
          layout="fill"
        ></Image>
      </div>
      <Modal
        title="Contact Info"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        bodyStyle={{ padding: '10px' }}
        footer={null}
      >
        <ContactForm form={form} onFinish={onSubmit} />
      </Modal>
    </div>
  );
};
