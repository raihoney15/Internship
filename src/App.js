import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ModulePage from './Components/ModulePage';
import InstructorPage from './Components/InstructorPage';
import Header from './Components/Header';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulePage />} />
          <Route path="/instructor" element={<InstructorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
