import React from 'react';
import { BookOpen, GraduationCap, Users2, Video, MessageCircle, Award, Clock, Laptop } from 'lucide-react';

const LearningPortal = () => {
  const features = [
    {
      icon: <Video className="w-12 h-12 text-indigo-600" />,
      title: 'Видеолекции',
      description: 'Качественные видеоматериалы от экспертов'
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-pink-600" />,
      title: 'Онлайн консультации',
      description: 'Постоянная поддержка преподавателей'
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: 'Сертификация',
      description: 'Официальный документ по окончании'
    },
    {
      icon: <Clock className="w-12 h-12 text-green-600" />,
      title: '24/7 доступ',
      description: 'Учитесь в удобное время'
    }
  ];

  const courses = [
    {
      icon: <Laptop className="w-8 h-8 text-white" />,
      title: 'Программирование',
      count: '25 курсов',
      color: 'bg-blue-600'
    },
    {
      icon: <Users2 className="w-8 h-8 text-white" />,
      title: 'Управление',
      count: '18 курсов',
      color: 'bg-purple-600'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: 'Маркетинг',
      count: '20 курсов',
      color: 'bg-red-600'
    }
  ];

  return (
    <main>
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Учебный портал Studoz
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Современная платформа для эффективного онлайн обучения
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://studoz.com"
                  className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Начать обучение
                </a>
                <a
                  href="#features"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Возможности учебного портала
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Направления обучения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className={`${course.color} p-6 rounded-xl text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    {course.icon}
                    <span className="text-sm font-medium">{course.count}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <GraduationCap className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                О нашем учебном портале
              </h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p>
                  Учебный портал Studoz – это современная образовательная платформа, 
                  которая предоставляет доступ к качественному онлайн образованию. 
                  Мы объединяем лучших преподавателей и современные технологии обучения.
                </p>
                <p>
                  На нашем портале вы найдете разнообразные курсы, интерактивные материалы 
                  и возможность получить персональные консультации от экспертов. Учитесь 
                  в своем темпе и достигайте новых высот в карьере.
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default LearningPortal;