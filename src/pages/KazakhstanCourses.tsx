import React from 'react';
import { GraduationCap, Award, Clock, Users2, MapPin, Laptop } from 'lucide-react';

const KazakhstanCourses = () => {
  const cities = [
    'Алматы', 'Астана', 'Шымкент', 'Караганда', 
    'Актобе', 'Тараз', 'Павлодар', 'Усть-Каменогорск'
  ];

  const advantages = [
    {
      icon: <Laptop className="w-12 h-12 text-red-600" />,
      title: 'Доступность обучения',
      description: 'Учитесь из любого города Казахстана в удобное время'
    },
    {
      icon: <Users2 className="w-12 h-12 text-red-600" />,
      title: 'Опытные преподаватели',
      description: 'Эксперты с опытом работы в ведущих компаниях'
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: 'Гибкий график',
      description: 'Обучайтесь в своем темпе, совмещая с работой'
    },
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: 'Признанный сертификат',
      description: 'Получите документ, ценный для работодателей'
    }
  ];

  return (
    <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Онлайн курсы в Казахстане
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Получите востребованную профессию и начните карьеру в любом городе Казахстана
              </p>
              <a
                href="https://studoz.com"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Начать обучение
              </a>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Обучаем студентов по всему Казахстану
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Преимущества онлайн обучения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <GraduationCap className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Качественное онлайн образование в Казахстане
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Онлайн обучение становится всё более популярным в Казахстане. 
                  Это отличная возможность получить новую профессию или повысить 
                  квалификацию без отрыва от работы.
                </p>
                <p>
                  Наши курсы разработаны с учетом потребностей казахстанского рынка 
                  труда и международных стандартов качества образования.
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default KazakhstanCourses;