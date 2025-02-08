import React from 'react';
import boeingLogo from './images/boeing-logo.png'; // Adjust the path as needed
import garminLogo from './images/garmin-logo.png'; // Adjust the path as needed

const Experience = () => {
  return (
    <div className="experience">
      <h1>Work Experience</h1>
      <div>
        <h3>
          Software Engineer | Boeing Co.
        </h3>
        <h4>Software Engineer for Simulation and Tooling Applications for Boeing Commercial Airlines</h4>
        <ul>
          <li>Enhanced and redesigned various web-based JavaScript React.js (Javascript/Typescript) simulation apps by adding critical features such as a refresh to read simulation status, filtering development level simulations, error notifications, and many more features, ensuring seamless functionality and reliability.</li>
          <li>Implemented recursion based algorithms to optimize and automate simulation builds and efficiently use resources, cutting expenditure by 4%.</li>
          <li>Automated release of Java, C# and Python-based engineering applications using the Continuous Integration and Continuous Development (CI/CD) pipeline system to decrease the release process time from 2 days to 30 minutes.</li>
          <li>Engineered a full-stack Java solution, rectifying a crucial timing issue impacting 40% of buttons in the Virtual Flight Deck (VFD). Implemented an improved simulation communication package to accurately read button inputs in simulations, significantly enhancing system functionality and optimizing flight deck operations for improved efficiency and safety and cut response time from 1ms to 0.8ms.</li>
          <li>Leveraged Rust's memory safety and performance to create robust and efficient flight deck panel simulations. Developed several overhead and flight deck display panels for VFD on multiple Boeing Commercial Airplanes in Java and C++.</li>
          <li>Supported modern migration of previous repositories and websites from JIRA to Gitlab, and helped create tooling and documentation environments, to better coordination of system and organizational operations.</li>
          <li>Created specialized tools to enhance codebase maintenance and compliance, automating tasks like adding copyright control text to repositories, monitoring build successes across our app suite (consisting Java, C++, Python and Javascript applications), and detecting code coverage gaps to uphold quality and standards.</li>
          <li>Languages Used: Java, React.js, Node.js, JavaScript, C/C++, Python, Git</li>
        </ul>
      </div>
      <div>
        <h3>
          Software Engineer Intern (Embedded Systems)
        </h3>
        <h4>Software Engineering intern for the Avionics Displays Team</h4>
        <ul>
          <li>Implemented and integrated the new Vulkan enabled IMG-BXS-4-64 Driver into the Garmin In-Flight Display 3 (GIFD-3).</li>
          <li>Developed driver code algorithms to match Vulkan graphics standards.</li>
          <li>Successfully addressed and resolved 1500 coverage holes, enhancing the quality and reliability of the system during the graphics transition from OpenGL to the Vulkan API for FAA Certification.</li>
          <li>Worked with Vulkan API to port over the current testbench from OpenGL API.</li>
          <li>Designed and developed a graphical simulation and environment adhering to Vulkan API standards, showcasing expertise in graphics programming, and contributing to an immersive and visually engaging simulation experience.</li>
          <li>Developed a Python executable that efficiently sorted functions in files containing over a hundred functions, saving engineers 50% of their time on the project, streamlining organization and improving productivity and project workflow.</li>
          <li>Languages Used: C/C++, Python, XML, Visual Studio, Vulkan API, Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;