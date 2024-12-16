import React from 'react';
import CourseCard from './CourseCard';

const PopularCourses = () => {
  const courses = [
    {
      title: 'Python-разработчик',
      duration: '10 месяцев',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      isHot: true,
    },
    {
      title: 'Бизнес-аналитик',
      duration: '8 месяцев',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      isHot: true,
    },
    {
      title: 'DevOps-инженер PRO',
      duration: '12 месяцев',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      isHot: true,
    },
    {
      title: 'Дизайнер интерьеров',
      duration: '12 месяцев',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      isHot: true,
    }
  ];

  return (
    <section id="popular" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные курсы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;