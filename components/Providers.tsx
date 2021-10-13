import React from 'react';
import Image from 'next/image';
import styles from 'styles/Services.module.css';
import { Card } from 'antd';
import { useTranslation } from 'next-i18next';

export const Providers = (props: any) => {
  const { t } = useTranslation('common');
  return (
    <section className="providers section" id="providers">
      <div className="providers__container">
        <div className="providers__text bd-grid">
          <h1 className="section-title text-center  ">{t('providers_title')}</h1>
          <span className="text-3xl" dangerouslySetInnerHTML={{ __html: t('providers_description_1') }}></span>
        </div>
        <div className="providers__container bd-grid grid">
          <div className="providers__content">
            <Image src="/assets/img/providers/1.svg" alt="" className="providers__img" width={145} height={55} />
          </div>
          <div className="providers__content">
            <Image src="/assets/img/providers/2.svg" alt="" className="providers__img" width={349} height={45} />
          </div>
        </div>
        <div className="providers__text bd-grid">
          <p className="">{t('providers_description_2')}</p>
        </div>
      </div>
    </section>
  );
};
