import React from 'react';
import './blog.css';
import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';
const Blog = () => {
  return (
    <section className="bolg container section" id="blog">
      <h2 className="section__title">أحدث المقالات</h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <apan className="blog__category">Reviews</apan>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              5 Best App Development Tool for Your Projects
            </h3>
            <div className="blog__meta">
              <span>09 February, 2023</span>
              <span className="blog__dot">.</span>
              <span>Ahmad</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <apan className="blog__category">Tutorial</apan>
            </a>
            <a href="#">
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              <span>22 March, 2023</span>
              <span className="blog__dot">.</span>
              <span>Ahmad</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <apan className="blog__category">Business</apan>
            </a>
            <a href="#">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              3 Things to Know about startup business
            </h3>
            <div className="blog__meta">
              <span>01 April, 2022</span>
              <span className="blog__dot">.</span>
              <span>Ahmad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
