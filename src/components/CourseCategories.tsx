import React from 'react';
import { 
  Laptop, LineChart, Code, Palette, Users, Database, ShieldCheck, Briefcase,
  DollarSign, Building, TestTube, Bot, Terminal, Globe, Calculator, MessageSquare
} from 'lucide-react';

interface CategoryCardProps {
  title: string;
  duration: string;
  icon: React.ReactNode;
  bgColor: string;
  isHot?: boolean;
}

const CategoryCard = ({ title, duration, icon, bgColor, isHot }: CategoryCardProps) => (
  <a href="https://studoz.com" className={`block ${bgColor} rounded-lg p-6 transition-transform hover:scale-105`}>
    <div className="flex justify-between items-start">
      <div>
        <div className="text-sm mb-2">Профессия</div>
        {isHot && (
          <div className="inline-block bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs font-medium mb-2">
            Хит продаж
          </div>
        )}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="text-sm opacity-80">{duration} мес</div>
      </div>
      <div className="w-12 h-12">{icon}</div>
    </div>
  </a>
);

const CourseCategories = () => {
  const categories = [
    {
      title: 'Python-разработчик',
      duration: '10',
      icon: <Code className="w-full h-full" />,
      bgColor: 'bg-blue-100',
      isHot: true,
    },
    {
      title: 'Бизнес-аналитик',
      duration: '8',
      icon: <LineChart className="w-full h-full" />,
      bgColor: 'bg-sky-100',
      isHot: true,
    },
    {
      title: 'DevOps-инженер PRO',
      duration: '12',
      icon: <Database className="w-full h-full" />,
      bgColor: 'bg-purple-100',
      isHot: true,
    },
    {
      title: 'Менеджер проектов',
      duration: '6',
      icon: <Briefcase className="w-full h-full" />,
      bgColor: 'bg-gray-100',
      isHot: true,
    },
    {
      title: 'Data Scientist',
      duration: '12',
      icon: <Database className="w-full h-full" />,
      bgColor: 'bg-cyan-100',
      isHot: true,
    },
    {
      title: 'Дизайнер интерьеров',
      duration: '12',
      icon: <Palette className="w-full h-full" />,
      bgColor: 'bg-gray-200',
      isHot: true,
    },
    {
      title: 'Продакт-менеджер',
      duration: '6',
      icon: <Users className="w-full h-full" />,
      bgColor: 'bg-blue-50',
      isHot: true,
    },
    {
      title: 'Дизайнер интерьеров и ландшафтной среды',
      duration: '14',
      icon: <Palette className="w-full h-full" />,
      bgColor: 'bg-green-50',
    },
    {
      title: 'Аналитик 1С',
      duration: '8',
      icon: <Calculator className="w-full h-full" />,
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Менеджер маркетплейсов: продвинутый курс и нуля',
      duration: '6',
      icon: <Globe className="w-full h-full" />,
      bgColor: 'bg-sky-50',
    },
    {
      title: 'Веб-дизайнер',
      duration: '12',
      icon: <Laptop className="w-full h-full" />,
      bgColor: 'bg-gray-100',
    },
    {
      title: 'Специалист по кибербезопасности',
      duration: '12',
      icon: <ShieldCheck className="w-full h-full" />,
      bgColor: 'bg-green-100',
    },
    {
      title: 'HR-бизнес-партнер',
      duration: '6',
      icon: <Users className="w-full h-full" />,
      bgColor: 'bg-emerald-100',
    },
    {
      title: 'Аналитик данных с нуля',
      duration: '8',
      icon: <LineChart className="w-full h-full" />,
      bgColor: 'bg-violet-50',
      isHot: true,
    },
    {
      title: 'Коммерческий иллюстратор',
      duration: '8',
      icon: <Palette className="w-full h-full" />,
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Дизайнер жилых и коммерческих интерьеров',
      duration: '14',
      icon: <Building className="w-full h-full" />,
      bgColor: 'bg-gray-50',
    },
    {
      title: 'Инженер по тестированию',
      duration: '8',
      icon: <TestTube className="w-full h-full" />,
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Бухгалтер',
      duration: '8',
      icon: <DollarSign className="w-full h-full" />,
      bgColor: 'bg-yellow-100',
      isHot: true,
    },
    {
      title: 'Data-аналитик',
      duration: '10',
      icon: <Database className="w-full h-full" />,
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Финансовый менеджер',
      duration: '8',
      icon: <DollarSign className="w-full h-full" />,
      bgColor: 'bg-blue-50',
      isHot: true,
    },
    {
      title: 'Фронтенд-разработчик',
      duration: '8',
      icon: <Code className="w-full h-full" />,
      bgColor: 'bg-indigo-50',
    },
    {
      title: 'SMM-специалист с нуля',
      duration: '4',
      icon: <MessageSquare className="w-full h-full" />,
      bgColor: 'bg-purple-50',
      isHot: true,
    },
    {
      title: 'Machine Learning Engineer',
      duration: '12',
      icon: <Bot className="w-full h-full" />,
      bgColor: 'bg-green-50',
      isHot: true,
    },
    {
      title: 'Топ-селлер на маркетплейсах',
      duration: '7',
      icon: <Globe className="w-full h-full" />,
      bgColor: 'bg-lime-50',
    },
    {
      title: 'Специалист по кибербезопасности',
      duration: '12',
      icon: <ShieldCheck className="w-full h-full" />,
      bgColor: 'bg-red-50',
    },
    {
      title: 'Интернет-маркетолог',
      duration: '12',
      icon: <Globe className="w-full h-full" />,
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Data Scientist с нуля до Junior',
      duration: '8',
      icon: <Database className="w-full h-full" />,
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Нейросети: практический курс',
      duration: '3',
      icon: <Bot className="w-full h-full" />,
      bgColor: 'bg-violet-50',
    },
    {
      title: 'Архитектор ПО',
      duration: '8',
      icon: <Terminal className="w-full h-full" />,
      bgColor: 'bg-gray-50',
    },
    {
      title: 'Операционный менеджер',
      duration: '6',
      icon: <Briefcase className="w-full h-full" />,
      bgColor: 'bg-green-50',
      isHot: true,
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Все онлайн-курсы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;