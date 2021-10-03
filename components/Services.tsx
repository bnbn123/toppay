import React from 'react';
import Image from 'next/image';
import styles from 'styles/Services.module.css';
import { Card } from 'antd';
import { SERVICE_DATA } from 'const';

export const Services = (props: any) => {
  return (
    <section className="relative flex flex-col items-center py-10 pb-20" id="your_benefits">
      <img className="absolute top-0" src="assets/img/bg-services.png"></img>
      <div className="w-full px-2 md:w-3/4">
        <div className="flex flex-col mb-8">
          <h1 className="section-title">FEATURES</h1>
          <span className="text-3xl ">Our Services</span>
          <span className="text-3xl ">and Your Benefits</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICE_DATA.map((item, index) => {
            return (
              <Card hoverable key={index} className={`${styles.serviceCard} w-full services__img`}>
                <div className="py-2 md:py-8 flex flex-row md:flex-col items-center md:items-start">
                  <img src={`assets/img/icon/${item.icon}`} className="service__icon mr-2 md:mr-0" />
                  <div>
                    <div className="mt-2 md:mt-5 font-bold text-lg">{item.name}</div>
                    <div className="mt-1 md:mt-3 text-xs md:text-base  text-gray-400 font-normal">{item.desc}</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
