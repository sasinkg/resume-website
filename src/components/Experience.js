import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const categories = {
    "Software Engineer | Boeing Co.": [
      "Enhanced and redesigned various web-based JavaScript React.js (Javascript/Typescript) simulation apps by adding critical features such as a refresh to read simulation status, filtering development level simulations, error notifications, and many more features, ensuring seamless functionality and reliability.", 
      "Implemented recursion based algorithms to optimize and automate simulation builds and efficiently use resources, cutting expenditure by 4%.", 
      "Automated release of Java, C# and Python-based engineering applications using the Continuous Integration and Continuous Development (CI/CD) pipeline system to decrease the release process time from 2 days to 30 minutes.", 
      "Engineered a full-stack Java solution, rectifying a crucial timing issue impacting 40% of buttons in the Virtual Flight Deck (VFD). Implemented an improved simulation communication package to accurately read button inputs in simulations, significantly enhancing system functionality and optimizing flight deck operations for improved efficiency and safety and cut response time from 1ms to 0.8ms.", 
      "Leveraged Rust's memory safety and performance to create robust and efficient flight deck panel simulations. Developed several overhead and flight deck display panels for VFD on multiple Boeing Commercial Airplanes in Java and C++.", 
      "Supported modern migration of previous repositories and websites from JIRA to Gitlab, and helped create tooling and documentation environments, to better coordination of system and organizational operations.", 
      "Created specialized tools to enhance codebase maintenance and compliance, automating tasks like adding copyright control text to repositories, monitoring build successes across our app suite (consisting Java, C++, Python and Javascript applications), and detecting code coverage gaps to uphold quality and standards.", 
      "Languages Used: Java, React.js, Node.js, JavaScript, C/C++, Python, Git"

    ],
    "Software Engineer Intern | Garmin Int.": [
      "Implemented and integrated the new Vulkan enabled IMG-BXS-4-64 Driver into the Garmin In-Flight Display 3 (GIFD-3).", 
      "Developed driver code algorithms to match Vulkan graphics standards.", 
      "Successfully addressed and resolved 1500 coverage holes, enhancing the quality and reliability of the system during the graphics transition from OpenGL to the Vulkan API for FAA Certification.", 
      "Worked with Vulkan API to port over the current testbench from OpenGL API.", 
      "Designed and developed a graphical simulation and environment adhering to Vulkan API standards, showcasing expertise in graphics programming, and contributing to an immersive and visually engaging simulation experience.", 
      "Developed a Python executable that efficiently sorted functions in files containing over a hundred functions, saving engineers 50% of their time on the project, streamlining organization and improving productivity and project workflow.", 
      "Languages Used: C/C++, Python, XML, Visual Studio, Vulkan API, Git"
    ],
    "Independent Graphic Designer": [
      "Implemented and integrated the new Vulkan enabled IMG-BXS-4-64 Driver into the Garmin In-Flight Display 3 (GIFD-3).", 
      "Developed driver code algorithms to match Vulkan graphics standards.", 
      "Successfully addressed and resolved 1500 coverage holes, enhancing the quality and reliability of the system during the graphics transition from OpenGL to the Vulkan API for FAA Certification.", 
      "Worked with Vulkan API to port over the current testbench from OpenGL API.", 
      "Designed and developed a graphical simulation and environment adhering to Vulkan API standards, showcasing expertise in graphics programming, and contributing to an immersive and visually engaging simulation experience.", 
      "Developed a Python executable that efficiently sorted functions in files containing over a hundred functions, saving engineers 50% of their time on the project, streamlining organization and improving productivity and project workflow.", 
      "Languages Used: C/C++, Python, XML, Visual Studio, Vulkan API, Git"
    ]
  };
    const [openCategories, setOpenCategories] = useState({});
  
    const toggleCategory = (category) => {
      setOpenCategories(prev => ({
        ...prev,
        [category]: !prev[category]
      }));
    };

    return (
      <div>
        <h1>
          Experience
        </h1>
        {Object.entries(categories).map(([category, skills]) => (
          <div key={category} className="mt-3">
            <h3 
              onClick={() => toggleCategory(category)} 
              className="text-lg font-semibold cursor-pointer text-[#e0e0e0] flex items-center"
            >
              {category} <span className="ml-2">{openCategories[category] ? '' : ''}</span>
            </h3>
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openCategories[category] ? "auto" : 0, opacity: openCategories[category] ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              {openCategories[category] && (
                <ul className="ml-5 mt-2 list-disc text-[#a0a0a0]">
                  {skills.map((skill) => (
                    <li key={skill} className="text-md">{skill}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    );
};

export default Experience;