import React from "react";
import Image from "next/image";
import siteHero from "public/assets/img/toppay-hero-product.svg";
import { Card } from "antd";

export const Services = (props: any) => {
  return (
    <section className="services section" id="services">
      <span className="section-title bd-grid">Our Services</span>
      <span style={{ marginBottom: "3rem" }} className="section-title bd-grid">
        and Your Benefits
      </span>
      <div className="services__container bd-grid">
        <Card className="services__img" style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className="services__img" style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className="services__img" style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className="services__img" style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className="services__img" style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card className="services__img" style={{ width: 300 }}>
          <h2>Card title </h2>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </section>
  );
};
