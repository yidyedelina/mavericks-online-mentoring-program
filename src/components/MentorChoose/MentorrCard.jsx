import React from 'react';

function MentorrCard({ mentor }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={mentor.image} alt={mentor.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{mentor.name}</h2>
        <h3 className="text-lg mb-2">{mentor.profession}</h3>
        <p className="text-gray-700 text-base mb-4">{mentor.description}</p>
        <div className="flex flex-wrap">
          <span className="text-gray-600 text-sm mr-2">Areas:</span>
          {mentor.projects.map((project) => (
            <span key={project} className="bg-gray-200 text-gray-700 text-sm py-1 px-2 rounded-lg mr-2 mb-2">
              {project}
            </span>
          ))}
          <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Mentor</button>
        </div>
      </div>
    </div>
  );
}

export default MentorrCard;