import React from 'react';
import { Star, Clock } from 'lucide-react';

const PythonDeveloper = () => {
  return (
    <main>
      {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-hidden">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 whitespace-nowrap">Главная</a>
            <span className="hidden sm:inline">›</span>
            <span className="sm:hidden">•</span>
            <a href="/courses" className="hover:text-gray-900 whitespace-nowrap">Каталог курсов</a>
            <span className="hidden sm:inline">›</span>
            <span className="sm:hidden">•</span>
            <a href="/courses/programming" className="hover:text-gray-900 whitespace-nowrap">Программирование</a>
            <span className="hidden sm:inline">›</span>
            <span className="sm:hidden">•</span>
            <span className="text-gray-400 whitespace-nowrap">Python-разработчик</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gray-900 py-8 sm:py-16 mb-8 sm:mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Payment Info */}
              <div className="text-white mb-8">
                <p className="text-lg">ПЕРВЫЙ ПЛАТЕЖ НА 2-ОЙ МЕСЯЦ</p>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8">
                    Профессия Python-разработчик
                  </h1>
                  <a
                    href="https://studoz.com"
                    className="w-full sm:w-auto inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Забронировать скидку
                  </a>
                </div>

                {/* Right Side Image/Code */}
                <div className="relative">
                  <div className="bg-purple-600 rounded-lg p-4 text-white text-sm font-mono mb-4">
                    <pre className="whitespace-pre-wrap">
                      def python_is_easy(*messages):
                          for message in messages:
                              if 'Python' in message:
                                  print(message)
                    </pre>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=1000"
                    alt="Python Developer"
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                {/* Rating Card */}
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold ml-2">4,7 из 5</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    рейтинг курса на основе 146'912 оценок
                  </p>
                </div>

                {/* Easy Entry Card */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold mb-2">Простой вход в профессию</h3>
                  <p className="text-sm text-gray-600">
                    Благодаря понятным инструментам разработки
                  </p>
                </div>

                {/* Employment Card */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold mb-2">Трудоустройство</h3>
                  <p className="text-sm text-gray-600">
                    Поможем найти работу — или вернём деньги
                  </p>
                </div>

                {/* Team Project Card */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold mb-2">Командный проект —</h3>
                  <p className="text-sm text-gray-600">
                    добавьте опыт совместной разработки в резюме
                  </p>
                </div>

                {/* Discount Card */}
                <div className="bg-yellow-400 rounded-lg p-4">
                  <h3 className="font-bold text-2xl mb-2">-55%</h3>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Скидка действует: 07:03:42</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Salary Section */}
        <section className="py-8 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16">
              Заработок будет расти вместе с опытом
            </h2>
            <div className="relative">
              <div className="flex items-center mb-4">
                <img src="https://hh.kz/favicon.ico" alt="hh.kz" className="w-8 h-8 mr-2" />
                <span className="text-gray-600">по данным hh.kz</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Junior */}
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold mb-4">500 000 ₸</div>
                  <div className="flex justify-between text-gray-600">
                    <span>Junior</span>
                    <span>После курса</span>
                  </div>
                </div>
                {/* Middle */}
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold mb-4">800 000 ₸</div>
                  <div className="flex justify-between text-gray-600">
                    <span>Middle</span>
                    <span>1-5 лет</span>
                  </div>
                </div>
                {/* Senior */}
                <div className="bg-white p-8 rounded-xl shadow-sm relative">
                  <div className="text-4xl font-bold mb-4">1 200 000 ₸</div>
                  <div className="flex justify-between text-gray-600">
                    <span>Senior</span>
                    <span>5+ лет</span>
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

        {/* Python Info Section */}
        <section className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                  Python — востребованный язык, который просто освоить новичку
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Самый популярный в мире</h3>
                    <p className="text-gray-600">
                      Python занимает 1-е место в рейтинге популярности языков программирования TIOBE.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Используют везде</h3>
                    <p className="text-gray-600">
                      От веб-разработки до искусственного интеллекта - Python применяется во всех сферах IT.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Легко изучать с нуля</h3>
                    <p className="text-gray-600">
                      Простой синтаксис и понятная структура делают Python идеальным для начинающих.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Программистов на Python ищут топовые компании</h3>
                    <p className="text-gray-600">
                      Высокий спрос на Python-разработчиков в крупнейших IT-компаниях мира.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000"
                  alt="Python Code Example"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default PythonDeveloper;