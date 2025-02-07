import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="left-column">
        <Header />
      </div>
      <div className="middle-column">
        <Experience />
      </div>
      <div className="right-column">
        <Education />
      </div>
    </div>
  );
}

export default App;