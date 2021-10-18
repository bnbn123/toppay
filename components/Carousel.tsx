import React, { CSSProperties } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Carousel } from 'antd';
import { useTranslation } from 'next-i18next';
import { useWindowSize } from 'hooks/useWindowSize';

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
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364e790',
};

export const Promotions = () => {
  const { t } = useTranslation('common');
  const { isMobile } = useWindowSize();

  return (
    <section className="promotions section flex flex-col items-center" id="promotions">
      <div className="promotions__container w-3/4 ">
        <div className="promotions__text">
          <h1 className="section-title text-center text-white ">{t('promotions_title')}</h1>
          <span className="text-3xl text-white">{t('promotions_description_1')}</span>
          <p className="mt-3 px-3">{t('promotions_description_2')} </p>
        </div>
        <div className="promotions__carousel">
          <Carousel
            autoplay
            autoplaySpeed={3000}
            style={contentStyle}
            arrows
            prevArrow={<SamplePrevArrow />}
            nextArrow={<SampleNextArrow />}
          >
            <div className="h-full text-center">
              {isMobile ? (
                <img className="w-full" src="/assets/img/mb_promotions_1.png" alt="" />
              ) : (
                <img className="w-full" src="/assets/img/promotions_1.png" alt="" />
              )}
            </div>
            <div>
              {isMobile ? (
                <img className="w-full" src="/assets/img/mb_promotions_2.png" alt="" />
              ) : (
                <img className="w-full" src="/assets/img/promotions_2.png" alt="" />
              )}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
