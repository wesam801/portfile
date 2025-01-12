import React from 'react';
import Header from './Header';
import bg_hero from '../../assets/bg_hero.jpeg'
import Bg from './Bg';
const Home = () => {
  return (
    <>
    <div className="bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
      <Header />
      <section className="pt-8 lg:pt-32  mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-4xl mx-auto text-center text-2xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
            تطوير حلول ويب مبتكرة باستخدام تقنيات الذكاء الاصطناعي لتحقيق أفضل
            <span className="text-indigo-600"> النتائج</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            اطلب خدمات البرمجة الآن لتحسين موقعك الإلكتروني وتطوير حلول مبتكرة
            تناسب احتياجاتك
          </p>
          <a
            href="https://wa.me/4915211301829?text=Hello%20I%20need%20your%20services%20as%20a%20programmer."
            className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-green-500 border-2 border-transparent sm:w-auto rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 mb-5"
            role="button"
            target="_blank"
          >
            اطلب الآن
            <svg
              className="ml-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="flex justify-center">
            <img className='w-auto rounded-3xl'
              src="https://pagedone.io/asset/uploads/1691054543.png"
              alt="Dashboard image"
            />
          </div>
        </div>
        <Bg />
      </section>

      {/* <section className="pt-12  bg-sky-200 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-4xl lg:leading-tight">
              تطوير حلول ويب مبتكرة باستخدام تقنيات الذكاء الاصطناعي لتحقيق أفضل
              النتائج
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
              بخبرة واسعة في تطوير الويب، أقدم حلولًا مخصصة تلبي احتياجات عملك.
              تشمل خدماتي إنشاء مواقع ويب متجاوبة وسهلة الاستخدام، بالإضافة إلى
              أدوات مبتكرة تعتمد على الذكاء الاصطناعي لتعزيز تفاعل العملاء.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="https://wa.me/4915211301829?text=Hello%20I%20need%20your%20services%20as%20a%20programmer."
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-green-500 border-2 border-transparent sm:w-auto rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                role="button"
                target="_blank"
              >
                تواصل معنا فوراً عبر واتساب للحصول على حلول مخصصة لعملك!
              </a>
            </div>
          </div>
        </div>

        <div className="bg-sky-200 flex justify-center items-center mt-8">
          <div className="relative flex justify-center items-center">
            <div className="lg:max-w-4xl lg:mx-auto">
              <img
                className="px-0 "
                src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
                alt="AI Chatbot"
              />
            </div>
          </div>
        </div>
        <Bg/>
      </section> */}
      </div>
    </>
  );
};

export default Home;
