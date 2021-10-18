import { FormInstance } from 'antd';

export interface ContactFormProps {
  form?: FormInstance;
  onFinish?: (values: any) => void;
}

export interface ContactFormValueProp {
  name?: string;
  tel?: number;
  mail?: string;
  message?: string;
}
