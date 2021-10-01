import React from 'react';
import Image from 'next/image';
import siteHero from 'public/assets/img/toppay-hero-product.svg';
import { Form, Input } from 'antd';
import ContactForm from './ContactForm';
import { ContactFormValueProp } from 'types/form';

const { TextArea } = Input;

export const Contact = (props: any) => {
  const [form] = Form.useForm<ContactFormValueProp>();
  function onSubmit(params: ContactFormValueProp) {
    console.log('SUbmited');
  }
  return (
    <section className="contact section" id="contact">
      <div className="contact__container bd-grid">
        <div className="form-title-container">
          <h1 className="section-title text-left text-white ">START WITH US</h1>
          <span className="text-3xl text-contact__form mb-3">Free Consultant</span>
          <span className="text-contact__form mb-6">
            We know the best solution for all of your business
            <br /> ideas and we can help you solve all business problems
          </span>{' '}
          <ContactForm form={form} onFinish={onSubmit} />
        </div>
        <div className="flex justify-end">
          <Image src={siteHero} alt="product" className="home__img" />
        </div>
      </div>
    </section>
  );
};
