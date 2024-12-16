import React from 'react';
import { Briefcase, BookOpen, Users, CreditCard } from 'lucide-react';

const MoneyBack = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-gray-800" />,
      title: "Учитесь у лучших:",
      description: "над уроками работают эксперты из ведущих IT-компаний"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-gray-800" />,
      title: "Практикуйтесь с первых модулей —",
      description: "на тренажерах и заданиях по реальным брифам от клиентов"
    },
    {
      icon: <Users className="w-8 h-8 text-gray-800" />,
      title: "Повысьте шансы на оффер:",
      description: "участвуйте в программе трудоустройства от Центра карьеры"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-gray-800" />,
      title: "Инвестируйте в учебу выгодно:",
      description: "платите сразу и получайте скидку или возьмите беспроцентную рассрочку"
    }
  ];

  return (
    <section className="py-16 bg-lime-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">
          Вернем деньги, если не найдете работу через полгода
        </h2>
        <p className="text-xl mb-12">
          Почему мы так говорим? Потому что уверены в знаниях и навыках, которые мы даем.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyBack;