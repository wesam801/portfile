import React from 'react';
import './sidebar.css';
import Logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faBriefcase,
  faGraduationCap,
  faLayerGroup,
  faBook,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home">
                  <FontAwesomeIcon icon={faHouse} />
                </i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-serv">
                  <FontAwesomeIcon icon={faBriefcase} />
                </i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-serv">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="icon-serv">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-serv">
                  <FontAwesomeIcon icon={faBook} />
                </i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-serv">
                  <FontAwesomeIcon icon={faAddressBook} />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2023 - 2024.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
