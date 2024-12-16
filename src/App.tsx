import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import KazakhstanCourses from './pages/KazakhstanCourses';
import DistanceLearning from './pages/DistanceLearning';
import LearningPortal from './pages/LearningPortal';
import PythonDeveloper from './pages/PythonDeveloper';
import BusinessAnalyst from './pages/BusinessAnalyst';
import ProjectManager from './pages/ProjectManager';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kazakhstan" element={<KazakhstanCourses />} />
          <Route path="/distance-learning" element={<DistanceLearning />} />
          <Route path="/learning-portal" element={<LearningPortal />} />
          <Route path="/python-developer" element={<PythonDeveloper />} />
          <Route path="/business-analyst" element={<BusinessAnalyst />} />
          <Route path="/project-manager" element={<ProjectManager />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
