import React from 'react';

const SkillCard = ({ title, icon, color, percentage }) => (
  <div className="skill-card bg-gray-800 bg-opacity-25 hover:bg-opacity-50 p-4 text-white rounded shadow flex flex-col items-center space-y-4 transition duration-300 w-full sm:w-64 h-64">
    <div className="skill-title text-white text-2xl font-bold">
      {title}
    </div>

    <div className="skill-icon text-8xl" style={{ color: color }}>
      {icon}
    </div>
    <div className="skill-percentage">
      <span className='text-2xl text-white font-bold'>{percentage}%</span>
    </div>
  </div>
);

export default SkillCard;