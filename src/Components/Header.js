import React, { useState } from 'react';
import './homePage.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <header className="header">   
          <div className="home-container">
      <div className="home-header">
        <h1>Data Scientist Program</h1>
 
      </div>
    </div>
      <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/modules">Modules</a></li>
          <li><a href="/instructor">Instructor</a></li>
        </ul>
      </nav>
      <div className={`header__menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    </div>
  );
};

export default Home;
