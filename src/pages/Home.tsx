import React from 'react';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import InfoSection from '../components/InfoSection';
import MoneyBack from '../components/MoneyBack';
import CourseCategories from '../components/CourseCategories';
import PopularCourses from '../components/PopularCourses';

const Home = () => {
  return (
    <main>
      <Hero />
      <Advantages />
      <InfoSection />
      <MoneyBack />
      <CourseCategories />
      <PopularCourses />
    </main>
  );
};

export default Home;