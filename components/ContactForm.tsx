import React from 'react';
import { Form, FormInstance, Input } from 'antd';
import { ContactFormProps } from 'types/form';
const { TextArea } = Input;

export default function ContactForm({ form, onFinish }: ContactFormProps) {
  return (
    <Form form={form} className="contact__form" onFinish={onFinish}>
      <div className="contact__inputs">
        <Form.Item name="name">
          <Input type="text" placeholder="Name" className="contact__input" />
        </Form.Item>
        <Form.Item name="tel">
          <Input type="tel" placeholder="Phone" className="contact__input" />
        </Form.Item>
      </div>
      <Form.Item name="mail">
        <Input type="mail" placeholder="Email" className="contact__input" />
      </Form.Item>
      <Form.Item name="message">
        <TextArea cols={0} rows={3} className="contact__input" placeholder="Message" />
      </Form.Item>
      <button name="text" type="submit" className="w-full md:w-1/3 contact__button btn btn--white btn--animated mt-3">
        Confirm
      </button>
    </Form>
  );
}
