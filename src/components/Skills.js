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
    <section className="my-5 p-4 bg-[#2a2a2a] rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-[#4dabf7]">Skills</h2>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="mt-3">
          <h3 
            onClick={() => toggleCategory(category)} 
            className="text-lg font-semibold cursor-pointer text-[#e0e0e0] flex items-center"
          >
            {category} <span className="ml-2">{openCategories[category] ? '▼' : '▶'}</span>
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
    </section>
  );
};

export default Skills;
