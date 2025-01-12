import React from 'react';
import './about.css';
import Image from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">نبذة عني</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              أنا أحمد باريش، مهندس برمجيات متخصص في تطوير الحلول الرقمية
              المبتكرة. أتمتع بخبرة غنية في تصميم وبناء الأنظمة والبرامج، مع
              مهارات متقدمة في تطوير الويب وتخصيص المنصات المختلفة. أسعى دائمًا
              لتقديم حلول فعالة تلبي احتياجات العملاء وتعزز من تجربتهم.
            </p>
            <a
              href={require('../../assets/ahmadbarish.pdf')}
              download="Ahmad_Barish.pdf"
              className="btn"
            >
              تحميل السيرة الذاتية
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">AI</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
