import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faMugHot,
  faUsers,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
const AboutBox = () => {
  return (
    <div className="about__boxes flex justify-center align-middle">
      <div className="about__box">
        <i className="about__icon">
          <FontAwesomeIcon icon={faFire} />
        </i>
        <div>
          <h3 className="about__title">56</h3>
          <span className="about__subtitle">
            المشروع مكتمل - تحقيق الأهداف بكفاءة واحترافية.
          </span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon">
          <FontAwesomeIcon icon={faUsers} />
        </i>
        <div>
          <h3 className="about__title">205</h3>
          <span className="about__subtitle">عملاء راضون</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon">
          <FontAwesomeIcon icon={faTrophy} />
        </i>
        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitle">الجوائز & التكريمات</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
