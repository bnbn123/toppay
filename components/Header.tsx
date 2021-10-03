import React from 'react';
import staticData from 'static/assets/data.json';
import Image from 'next/image';
import siteLogo from 'public/assets/img/toppay-logo.png';
import { DrawerMenu } from './Menu';
import { Form, Modal } from 'antd';
import { ContactFormValueProp } from 'types/form';
import ContactForm from './ContactForm';
import Link from 'next/link';
export const HeaderCustom = (props: any) => {
  const navItems: string[] = staticData.NAV_BAR_ITEMS;
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const menuItem = navItems.map((item, index) => {
    const key = index + 1;
    let href = item.toLowerCase() === 'product' ? '/product' : `#${item.toLowerCase().replace(' ', '_')}`;

    switch (item.toLowerCase()) {
      case 'product':
        href = '/product';
        break;
      case 'home':
        href = '/';
        break;
      default:
        href = `#${item.toLowerCase().replace(' ', '_')}`;
        break;
    }

    return (
      <li key={key} className="px-2 nav__item">
        <Link href={href}>
          <a className="nav__link">{item}</a>
        </Link>
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
    <>
      <header className="absolute top-0 z-10 w-full px-2 py-3 l-header">
        <nav className="nav">
          <div className="mt-2 w-1/3 md:w-max">
            {/* find me in styles.css */}
            <img src={'/assets/img/toppay-logo.png'} alt="logo" className="object-contain nav__logo" />
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">{menuItem}</ul>
          </div>
          <div className="nav__menu" id="nav-menu">
            <a href="#contact" className="btn btn--white btn--animated">
              Get Started
            </a>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="text-white bx bx-menu" />
          </div>
          <DrawerMenu wrapperClassName="md:hidden mb-2" drawerClassName="list-none" menuItems={menuItem} />
        </nav>
      </header>
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
    </>
  );
};
