import React from 'react';
import { Search, Laptop, Users2, GraduationCap } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Search className="w-12 h-12 text-blue-600" />
                </div>
                <div className="bg-red-100 p-4 rounded-xl">
                  <Laptop className="w-12 h-12 text-red-600" />
                </div>
                <div className="bg-green-100 p-4 rounded-xl">
                  <Users2 className="w-12 h-12 text-green-600" />
                </div>
                <div className="bg-purple-100 p-4 rounded-xl">
                  <GraduationCap className="w-12 h-12 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">
              Обучение онлайн профессиям в Алматы от Studoz
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Онлайн-обучение в Алматы — не миф, а реальность. Получить новую профессию, не заканчивая университет возможно. 
                Главное — выбрать подходящую специальность.
              </p>
              
              <p>
                Обучающие курсы Studoz — первый шаг к тому, чтобы стать специалистом. Программирование, дизайн, маркетинг, 
                управление и даже образовательные курсы по психологии — всё это собрано и упаковано в 
                интересные и понятные видеоуроки.
              </p>
              
              <p>
                Онлайн-обучение профессиям с нуля — визитная карточка Studoz. Мы поможем вам стать кем пожелаете в Алматы. 
                Чат с будущими коллегами, помощь личного куратора, обучение через практику — решение купить онлайн-курсы 
                может стать поворотной точкой, после которой всё изменится к лучшему. Курсы онлайн-обучения с сертификатом — 
                ваш билет в счастливое будущее.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;