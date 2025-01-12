import React from 'react';
import './testimonials.css';
import Image1 from '../../assets/avatar-1.svg';
import Image2 from '../../assets/avatar-2.svg';
import Image3 from '../../assets/avatar-3.svg';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'عمار باريش',
    subtitle: 'مهندس برمجيات',
    comment:
      'خدمة ممتازة! لقد ساعدني أحمد في تحسين تجربة المستخدم على موقعي، والنتائج كانت مذهلة. أنا راضٍ تمامًا عن النتائج وسأستمر في العمل معه في المستقبل👍',
  },
  {
    id: 2,
    image: Image3,
    title: 'ابراهيم السعد',
    subtitle: 'رائد أعمال',
    comment:
      'أحمد هو مطور موهوب! قام بإنشاء تطبيق مخصص لاحتياجاتنا، وكان دائمًا متاحًا لتقديم الدعم والتوجيه. نحن ممتنون جدًا للعمل معه.',
  },
  {
    id: 3,
    image: Image2,
    title: 'جميل العلي',
    subtitle: 'متجر أدوات منزلية',
    comment:
      'لقد حصلت على نتائج رائعة بعد تحسين محركات البحث لموقعي بفضل أحمد. كانت استراتيجياته فعالة للغاية، وزادت نسبة الزيارات بشكل ملحوظ. شكرًا لك!',
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">العملاء & التقييمات</h2>
      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
