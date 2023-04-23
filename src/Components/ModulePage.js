import React, { useState } from 'react';
import './modules.css';

const ModulePage = () => {
  const [activeTab, setActiveTab] = useState('topic');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="module-page-container">
      <div className="module-sidebar">
        <div className="module-sidebar-item" onClick={() => handleTabClick('topic')}>
          <div className={`module-sidebar-item-icon ${activeTab === 'topic' && 'active'}`}>T</div>
          <div className="module-sidebar-item-label">Topic 1</div>
        </div>
        <div className="module-sidebar-item" onClick={() => handleTabClick('quiz')}>
          <div className={`module-sidebar-item-icon ${activeTab === 'quiz' && 'active'}`}>Q</div>
          <div className="module-sidebar-item-label">Quiz 1</div>
        </div>
        <div className="module-sidebar-item" onClick={() => handleTabClick('assignment')}>
          <div className={`module-sidebar-item-icon ${activeTab === 'assignment' && 'active'}`}>A</div>
          <div className="module-sidebar-item-label">Assignment 1</div>
        </div>
      </div>
      <div className="module-content">
        {activeTab === 'topic' && (
          <div className="module-content-topic">
            <h2>Topic 1</h2>
            <p>Content for Topic 1 goes here</p>
          </div>
        )}
        {activeTab === 'quiz' && (
          <div className="module-content-quiz">
            <h2>Quiz 1</h2>
            <p>Questions for Quiz 1 go here</p>
          </div>
        )}
        {activeTab === 'assignment' && (
          <div className="module-content-assignment">
            <h2>Assignment 1</h2>
            <p>Instructions for Assignment 1 go here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
