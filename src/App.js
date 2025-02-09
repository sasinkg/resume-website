import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

const sections = [
  { id: 'experience', component: <Experience /> },
  { id: 'education', component: <Education /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects', component: <Projects /> }
];

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleSections, setVisibleSections] = useState([sections[0]]);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure correct value on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 1024) return; // Enable infinite scroll only on smaller screens

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const nextIndex = visibleSections.length;
          if (nextIndex < sections.length) {
            setVisibleSections(prev => [...prev, sections[nextIndex]]);
          }
        }
      });
    }, { threshold: 0.5 });

    const lastElement = document.querySelector('.infinite-scroll-trigger');
    if (lastElement) observerRef.current.observe(lastElement);

    return () => observerRef.current?.disconnect();
  }, [visibleSections, windowWidth]);

  return (
    <div className="app min-h-screen">
      {windowWidth > 1024 ? (
    <div className="app">
      <div className="left-column">
        <Header />
        <Skills />
      </div>
      <div className="middle-column">
        <Experience />
      </div>
      <div className="right-column">
        <Education />
        <Projects />
      </div>
    </div>
      ) : (
        <div className="mobile-layout flex flex-col items-center min-h-screen">
          <Header />
          <section className="about-me w-full p-5 bg-[#2a2a2a] rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-[#4dabf7]">About Me</h2>
            <p className="text-[#a0a0a0]">Building robust and efficient solutions for the future.</p>
          </section>
          {visibleSections.map((section) => (
            <div key={section.id} className="w-full p-5 bg-[#2a2a2a] rounded-lg shadow-lg mt-5">
              {section.component}
            </div>
          ))}
          <div className="infinite-scroll-trigger" style={{ height: '50px' }}></div>
        </div>
      )}
    </div>
  );
}

export default App;
