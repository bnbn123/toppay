import React from 'react';
import { Form, FormInstance, Input } from 'antd';
import { ContactFormProps } from 'types/form';
const { TextArea } = Input;

export default function ContactForm({ form, onFinish }: ContactFormProps) {
  return (
    <Form form={form} className="contact__form" onFinish={onFinish}>
      <div className="contact__inputs">
        <Input name="name" type="text" placeholder="Name" className="contact__input" />
        <Input name="tel" type="tel" placeholder="Phone" className="contact__input" />
      </div>
      <Input name="mail" type="mail" placeholder="Email" className="contact__input" />
      <TextArea cols={0} rows={10} className="contact__input" defaultValue={''} />
      <button name="text" type="submit" className="w-full md:w-1/3 contact__button btn btn--white btn--animated mt-3">
        Confirm
      </button>
    </Form>
  );
}
