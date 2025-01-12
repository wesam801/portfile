import React, { useState } from 'react';
import './portfoloi.css';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Portfoloi = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">أحدث الأعمال</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          جميع الأعمال
        </span>
        <span className="work__item" onClick={() => filterItem('Creative')}>
          إبداعي
        </span>
        <span className="work__item" onClick={() => filterItem('Art')}>
          فن
        </span>
        <span className="work__item" onClick={() => filterItem('Design')}>
          تصميم
        </span>
        <span className="work__item" onClick={() => filterItem('Branding')}>
          علامة تجارية
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="" className="work__button">
                <i className="icon-link work__button-icon">
                  <FontAwesomeIcon icon={faLink} />
                </i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfoloi;
