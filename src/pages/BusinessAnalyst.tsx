import React from 'react';
import { Star, Clock } from 'lucide-react';

const BusinessAnalyst = () => {
  return (
    <main>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-900">Главная</a>
          <span>›</span>
          <a href="/courses" className="hover:text-gray-900">Каталог курсов</a>
          <span>›</span>
          <a href="/courses/analytics" className="hover:text-gray-900">Аналитика</a>
          <span>›</span>
          <span className="text-gray-400">Профессия бизнес-аналитик</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-900 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Payment Info */}
            <div className="text-white mb-8">
              <p className="text-lg">ПЕРВЫЙ ПЛАТЕЖ НА 2-ОЙ МЕСЯЦ</p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Профессия бизнес-аналитик
                </h1>
                <a
                  href="https://studoz.com"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Записаться на курс
                </a>
              </div>

              {/* Right Side Analytics Dashboard */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                  alt="Business Analytics Dashboard"
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {/* Rating Card */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold ml-2">4,7</span>
                </div>
                <p className="text-sm text-gray-600">
                  рейтинг курса на «Отзовике», Tutortop и Irecommend на основании 29 433 отзывов
                </p>
              </div>

              {/* Employment Card */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">Трудоустройство</h3>
                <p className="text-sm text-gray-600">
                  Поможем найти работу — или вернём деньги
                </p>
              </div>

              {/* Course Content Card */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold mb-2">Содержание курса</h3>
                <p className="text-sm text-gray-600">
                  соответствует требованиям топовых работодателей
                </p>
              </div>

              {/* Discount Card */}
              <div className="bg-yellow-400 rounded-lg p-4">
                <h3 className="font-bold text-2xl mb-2">-55%</h3>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Скидка действует: 06:49:04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">
            Заработок будет расти вместе с опытом
          </h2>
          <div className="relative">
            <div className="flex items-center mb-4">
              <img src="https://hh.kz/favicon.ico" alt="hh.kz" className="w-8 h-8 mr-2" />
              <span className="text-gray-600">по данным hh.kz</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Junior */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold mb-4">450 000 ₸</div>
                <div className="flex justify-between text-gray-600">
                  <span>Junior</span>
                  <span>После курса</span>
                </div>
              </div>
              {/* Middle */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold mb-4">750 000 ₸</div>
                <div className="flex justify-between text-gray-600">
                  <span>Middle</span>
                  <span>1-3 года</span>
                </div>
              </div>
              {/* Senior */}
              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="text-4xl font-bold mb-4">1 100 000 ₸</div>
                <div className="flex justify-between text-gray-600">
                  <span>Senior</span>
                  <span>3+ года</span>
                </div>
                <div className="absolute -right-4 -bottom-4 w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                    <path d="M50 0 C 50 50, 100 50, 100 100 L 0 100 L 0 0 Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessAnalyst;