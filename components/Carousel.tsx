import React, { CSSProperties } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Image from 'next/image';

interface IArrowProps {
  type?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

// ...

const SampleNextArrow = ({ className, style, onClick }: IArrowProps) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715',
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = ({ className, style, onClick }: IArrowProps) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715',
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const contentStyle: CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

export const Promotions = () => {
  return (
    <section className="promotions section" id="promotions">
      <div className="promotions__container">
        <div className="promotions__text">
          <h1 className="section-title text-center text-white ">PROMOTIONS</h1>
          <span className="text-3xl text-white">Lorem IPsum sdasndasdas</span>
          <p className="mt-3 px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="promotions__carousel">
          <Carousel style={contentStyle} arrows prevArrow={<SamplePrevArrow />} nextArrow={<SampleNextArrow />}>
            <Image src="/assets/img/banner.svg" alt="" layout="fill" />
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
