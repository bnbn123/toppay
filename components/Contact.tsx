import React from "react";
import Image from "next/image";
import siteHero from "public/assets/img/toppay-hero-product.svg";

export const Contact = (props: any) => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container bd-grid">
        <div className="form-title-container">
          <span className="section-title text-contact__form">
            Free Consultant
          </span>
          <span className="  text-contact__form">
            We know the best solution for all of your business
          </span>{" "}
          <span
            style={{ marginBottom: "3rem" }}
            className=" text-contact__form"
          >
            ideas and we can help you solve all business problems
          </span>
          <form className="contact__form">
            <div className="contact__inputs">
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="contact__input"
              />
            </div>
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea
              cols={0}
              rows={10}
              className="contact__input"
              defaultValue={""}
            />
            <button
              type="submit"
              className="contact__button btn btn--white btn--animated"
            >
              Confirm
            </button>
          </form>
        </div>
        <div className="contact__info">
          <Image src={siteHero} alt="product" className="home__img" />
        </div>
      </div>
    </section>
  );
};
