import React from 'react';
import Image from 'next/image';
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
    <section className="contact flex justify-center" id="contact">
      <div className="flex flex-row w-3/4 justify-between">
        <div className="py-6 flex flex-col justify-center">
          <h1 className="section-title text-left text-white ">START WITH US</h1>
          <span className="text-3xl text-contact__form mb-3">Free Consultant</span>
          <span className="text-contact__form mb-6">
            We know the best solution for all of your business
            <br /> ideas and we can help you solve all business problems
          </span>{' '}
          <ContactForm form={form} onFinish={onSubmit} />
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
