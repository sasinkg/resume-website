import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <div>
        <h3>Software Engineer | Boeing Co.</h3>
        <p>Java, React.js, Node.js, JavaScript, C/C++, Python, Git</p>
        <ul>
          <li>Automated release of Java, C#, and Python-based engineering applications using CI/CD pipelines.</li>
          <li>Enhanced web-based JavaScript React.js simulation apps with critical features.</li>
          <li>Engineered a full-stack Java solution to rectify timing issues in the Virtual Flight Deck.</li>
        </ul>
      </div>
      <div>
        <h3>Software Engineering Intern (Embedded Systems) | Garmin Int.</h3>
        <p>C/C++, Python, XML, Visual Studio, Vulkan API, Git</p>
        <ul>
          <li>Implemented and integrated the Vulkan-enabled IMG-BXS-4-64 Driver into the Garmin In-Flight Display 3.</li>
          <li>Developed a Python executable to sort functions in files, saving engineers 50% of their time.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;