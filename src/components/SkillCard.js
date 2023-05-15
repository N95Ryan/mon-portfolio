import React from "react";

const SkillCard = ({ title, icon, color }) => (
  <div className="skill-card bg-gray-800 bg-opacity-25 hover:bg-opacity-50 p-4 text-white rounded shadow flex flex-col items-center space-y-2 transition duration-300 w-full sm:w-64 h-48">
    <div className="skill-title text-white text-2xl font-bold">{title}</div>
    <div className="skill-icon text-8xl" style={{ color: color }}>
      {icon}
    </div>
  </div>
);

export default SkillCard;
