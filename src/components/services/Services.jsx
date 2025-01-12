import React from 'react';
import './services.css';
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">الخدمات</h2>
      <div className="">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🌐
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                تطوير مواقع الويب
              </h3>
              <p className="text-gray-600">إنشاء مواقع متجاوبة وتفاعلية. </p>
            </div>
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🔍
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                تحسين محركات البحث
              </h3>
              <p className="text-gray-600">
                تعزيز ظهور موقعك على محركات البحث لزيادة الزيارات.
              </p>
            </div>
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🎨
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                تصميم جرافيك
              </h3>
              <br />
              <p className="text-gray-600">
                إنشاء تصاميم جذابة ومحتوى بصري يلفت الانتباه.
              </p>
            </div>
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                📈
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                التسويق الرقمي
              </h3>
              <br />
              <p className="text-gray-600">
                استراتيجيات لتعزيز وجودك على الإنترنت وزيادة الوصول.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
