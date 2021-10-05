import React from 'react';
import Image from 'next/image';
import styles from 'styles/Services.module.css';
import { Card } from 'antd';

export const Providers = (props: any) => {
  return (
    <section className="providers section" id="providers">
      <div className="providers__container">
        <div className="providers__text bd-grid">
          <h1 className="section-title text-center  ">PROVIDERS</h1>
          <span className="text-3xl tx-center mb-6">
            We work with thousands of the world’s
            <br />
            leading brands
          </span>
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
          <p className="">
            Checkmate... Yes, Yes, without the oops! Hey, you know how I'm, like, always trying to save the planet?
            Here's my chance. Jaguar shark! So tell me - does it really exist? God creates dinosaurs. God destroys
            dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.
          </p>
        </div>
      </div>
    </section>
  );
};
