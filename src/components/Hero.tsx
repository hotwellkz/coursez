import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      title: 'Онлайн курсы в Алматы',
      subtitle: 'Скидки до 65% и до 5 курсов в подарок',
      bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070',
    },
    {
      title: 'Обучайтесь у профессионалов',
      subtitle: 'Более 100 экспертов-преподавателей',
      bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070',
    },
    {
      title: 'Учитесь в удобное время',
      subtitle: 'Доступ к курсам 24/7 из любой точки мира',
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070',
    },
  ];

  return (
    <section className="relative h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://studoz.com"
                      className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Начать обучение
                    </a>
                    <a
                      href="https://studoz.com"
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors shadow-lg"
                    >
                      Получить консультацию
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;