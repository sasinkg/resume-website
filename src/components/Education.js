import React from 'react';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div>
        <h3>B.S. in Electrical Engineering | Minor in Computer Science</h3>
        <p>University of Illinois, Urbana-Champaign - Grainger College of Engineering | GPA: 3.6</p>
      </div>
      <h2>Projects</h2>
      <div>
        <h3>“Early Bird” Alarm Clock | Hardware & Software</h3>
        <p>Designed, built, and programmed an alarm clock robot that runs away from the user when the alarm turns on.</p>
      </div>
      <div>
        <h3>Self-Driving Car | Hardware & Python</h3>
        <p>Designed a self-driving car with object avoidance and environment mapping features.</p>
      </div>
      <div>
        <h3>Superheterodyne AM Receiver | Hardware & Python</h3>
        <p>Constructed an AM radio receiver using analog and digital signal processing techniques.</p>
      </div>
    </div>
  );
};

export default Education;