import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Studoz</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#courses" className="hover:text-gray-200">Курсы</a>
            <a href="#advantages" className="hover:text-gray-200">Преимущества</a>
            <a href="#popular" className="hover:text-gray-200">Популярные курсы</a>
            <a href="#contact" className="hover:text-gray-200">Контакты</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#courses" className="hover:text-gray-200">Курсы</a>
              <a href="#advantages" className="hover:text-gray-200">Преимущества</a>
              <a href="#popular" className="hover:text-gray-200">Популярные курсы</a>
              <a href="#contact" className="hover:text-gray-200">Контакты</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;