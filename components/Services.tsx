import React from 'react';
import Image from 'next/image';
import styles from 'styles/Services.module.css';
import { Card } from 'antd';

export const Services = (props: any) => {
  return (
    <section className="services section" id="your_benefits">
      <h1 className="section-title bd-grid">FEATURES</h1>
      <span className="text-3xl bd-grid">Our Services</span>
      <span style={{ marginBottom: '3rem' }} className="text-3xl bd-grid">
        and Your Benefits
      </span>
      <div className="services__container bd-grid">
        <Card className={`${styles.serviceCard} services__img `} style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className={`${styles.serviceCard} services__img `} style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className={`${styles.serviceCard} services__img `} style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className={`${styles.serviceCard} services__img `} style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className={`${styles.serviceCard} services__img `} style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className={`${styles.serviceCard} services__img `} style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </section>
  );
};
