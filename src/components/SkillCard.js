import React from 'react';

const SkillCard = ({ skill, percentage }) => {
  return (
    <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white shadow-md p-4 rounded-md">
      <h3 className="text-lg font-semibold">{skill}</h3>
      <div className="relative h-2 w-full bg-gray-200 mt-2 rounded-md">
        <div
          className="absolute h-2 bg-blue-500 rounded-md"
          style={{ width: `\${percentage}%` }}
        ></div>
      </div>
      <p className="text-right mt-1">{percentage}%</p>
    </div>
  );
};

export default SkillCard;
