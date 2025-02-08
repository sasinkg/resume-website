import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = {
    "Programming": [
      "C/C++", "Python", "Java/JavaScript", "Git", "React.js", 
      "Rust", "Assembly (LC-3)", "HTML/CSS", "Swift", "SQL", "SystemVerilog"
    ],
    "Design & Modeling": [
      "Adobe Creative Cloud", "Figma/Adobe XD", "OpenGL", "Vulkan Graphics", 
      "Blender", "AutoCAD"
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
    <section className="my-5">
      <p></p>
      <h1 className="text-xl font-bold">Skills</h1>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="mt-3">
          <h4 
            onClick={() => toggleCategory(category)} 
            className="text-lg font-semibold cursor-pointer"
          >
            {category} {openCategories[category] ? '▼' : '▶'}
          </h4>
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openCategories[category] ? "auto" : 0, opacity: openCategories[category] ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {openCategories[category] && (
              <ul className="ml-5 mt-2 list-disc">
                {skills.map((skill) => (
                  <li key={skill} className="text-md">{skill}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
