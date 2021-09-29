import { Promotions } from "components/Carousel";
import { Contact } from "components/Contact";
import { HeaderCustom } from "components/Header";
import { Hero } from "components/Hero";
import { Services } from "components/Services";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      {/* Header Section */}
      <HeaderCustom />

      <main className="l-main">
        {/*===== HOME =====*/}
        <Hero />
        {/*===== SERVICES =====*/}
        <Services />
        {/*===== ABOUT =====*/}
        <Promotions />
        {/* <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about__container bd-grid">
            <div className="about__img">
              <img src="assets/img/perfil.png" alt />
            </div>
            <div>
              <h2 className="about__subtitle">I'am Jhon Doe</h2>
              <span className="about__profession">Web designer</span>
              <p className="about__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci consectetur, architecto quas fugiat, iste inventore
                facere repellendus delectus id, vitae blanditiis.
              </p>
              <div className="about__social">
                <a href="#" className="about__social-icon">
                  <i className="bx bxl-linkedin" />
                </a>
                <a href="#" className="about__social-icon">
                  <i className="bx bxl-github" />
                </a>
                <a href="#" className="about__social-icon">
                  <i className="bx bxl-dribbble" />
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/*===== SKILLS =====*/}
        {/* <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills__container bd-grid">
            <div className="skills__box">
              <h3 className="skills__subtitle">Development</h3>
              <span className="skills__name">Html</span>
              <span className="skills__name">Css</span>
              <span className="skills__name">Javascript</span>
              <span className="skills__name">Scss</span>
              <span className="skills__name">React</span>
              <span className="skills__name">Vue</span>
              <h3 className="skills__subtitle">Design</h3>
              <span className="skills__name">Figma</span>
              <span className="skills__name">Adobe XD</span>
              <span className="skills__name">Photoshop</span>
            </div>
            <div className="skills__img">
              <img src="assets/img/skill.jpg" alt />
            </div>
          </div>
        </section> */}

        {/*===== CONTACT =====*/}
        <Contact />
      </main>
      {/*===== FOOTER =====*/}
      <footer className="footer section">
        <div className="footer__container bd-grid">
          <div className="footer__data">
            <h2 className="footer__title">JHON DOE</h2>
            <p className="footer__text">
              Im Jhon Doe and this is my personal website
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__title">EXPLORE</h2>
            <ul>
              <li>
                <a href="#home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="footer__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#Contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__data">
            <h2 className="footer__title">FOLLOW</h2>
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
