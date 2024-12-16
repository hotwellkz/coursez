import React from 'react';
import { BookOpen, Monitor, Calendar, Award, Brain, Target, Rocket, Shield } from 'lucide-react';

const DistanceLearning = () => {
  const benefits = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: 'Учитесь где угодно',
      description: 'Доступ к курсам с любого устройства 24/7'
    },
    {
      icon: <Calendar className="w-12 h-12 text-green-600" />,
      title: 'Гибкий график',
      description: 'Планируйте обучение под свой распорядок дня'
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-600" />,
      title: 'Индивидуальный темп',
      description: 'Осваивайте материал в комфортном для вас темпе'
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: 'Практические навыки',
      description: 'Работа над реальными проектами с обратной связью'
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-16 h-16 text-blue-600" />,
      title: 'Современные методики',
      description: 'Интерактивные материалы, видеоуроки и практические задания'
    },
    {
      icon: <Rocket className="w-16 h-16 text-green-600" />,
      title: 'Быстрый старт карьеры',
      description: 'Помощь в трудоустройстве и составлении портфолио'
    },
    {
      icon: <Shield className="w-16 h-16 text-purple-600" />,
      title: 'Гарантия качества',
      description: 'Сертификат об окончании курса и поддержка кураторов'
    }
  ];

  return (
    <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Дистанционное обучение
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Получите качественное образование не выходя из дома
              </p>
              <a
                href="https://studoz.com"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Начать обучение
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Преимущества дистанционного обучения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                О дистанционном обучении
              </h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p>
                  Дистанционное обучение – это современный формат образования, который 
                  позволяет получать знания и навыки удаленно. Благодаря передовым 
                  технологиям, вы можете учиться у лучших преподавателей, не выходя из дома.
                </p>
                <p>
                  Наша платформа предоставляет доступ к качественным образовательным 
                  материалам, интерактивным заданиям и персональной поддержке кураторов. 
                  Вы сможете учиться в удобном для вас темпе и в любое время.
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default DistanceLearning;