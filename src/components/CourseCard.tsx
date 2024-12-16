import React from 'react';
import { Clock } from 'lucide-react';

interface CourseCardProps {
  title: string;
  duration: string;
  image: string;
  isHot?: boolean;
}

const CourseCard = ({ title, duration, image, isHot }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {isHot && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
            Хит продаж
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex items-center text-gray-600">
          <Clock className="w-5 h-5 mr-2" />
          <span>{duration}</span>
        </div>
        <div className="space-y-2 mt-4">
          <a
            href="https://studoz.com"
            className="block text-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Подробнее о курсе
          </a>
          <a
            href="https://studoz.com"
            className="block text-center border-2 border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;