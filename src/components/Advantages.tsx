import React from 'react';
import { Award, Clock, Monitor, Users } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <Monitor className="w-12 h-12 text-red-600" />,
      title: 'Онлайн обучение',
      description: 'Учитесь в удобное время из любой точки мира'
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: 'Опытные преподаватели',
      description: 'Практикующие специалисты с реальным опытом'
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: 'Гибкий график',
      description: 'Занимайтесь в удобное для вас время'
    },
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: 'Сертификат',
      description: 'Получите подтверждение своих навыков'
    }
  ];

  return (
    <section id="advantages" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
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
  );
};

export default Advantages;