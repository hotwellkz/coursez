import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">О нас</h3>
            <p className="text-gray-400 mb-4">
              Мы предоставляем качественное онлайн образование в Алматы с 2020 года.
              Более 1000 выпускников уже успешно работают по новой специальности.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Курсы</h3>
            <ul className="space-y-2">
              <li><Link to="/kazakhstan" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>Онлайн курсы в Казахстане</Link></li>
              <li><Link to="/distance-learning" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>Дистанционное обучение</Link></li>
              <li><Link to="/learning-portal" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>Учебный портал</Link></li>
              <li><Link to="/python-developer" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>Python-разработчик</Link></li>
              <li><Link to="/business-analyst" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>Бизнес-аналитик</Link></li>
              <li><Link to="/project-manager" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>Менеджер проектов</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Онлайн курсы Алматы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;