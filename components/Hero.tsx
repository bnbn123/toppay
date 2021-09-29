import React from "react";
import Image from "next/image";
import siteHero from "public/assets/img/toppay-hero-product.svg";

export const Hero = (props: any) => {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <Image src={siteHero} alt="product" className="home__img" />
      </div>
    </section>
  );
};
