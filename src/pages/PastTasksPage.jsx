import React from 'react';

const tasks = [
  {
    id: 1,
    title: 'Complete Chapter 1',
    category: 'Week 1',
    completed: true,
  },
  {
    id: 2,
    title: 'Watch Video Tutorial',
    category: 'Week 1',
    completed: false,
  },
  {
    id: 3,
    title: 'Submit Assignment',
    category: 'Week 2',
    completed: true,
  },
  {
    id: 4,
    title: 'Read Article',
    category: 'Week 3',
    completed: false,
  },
  {
    id: 5,
    title: 'Watch Video Tutorial',
    category: 'Week 1',
    completed: false,
  },
  {
    id: 6,
    title: 'Submit Assignment',
    category: 'Week 2',
    completed: true,
  },
  {
    id: 7,
    title: 'Read Article',
    category: 'Week 3',
    completed: false,
  },
  {
    id: 8,
    title: 'Read Article',
    category: 'Week 3',
    completed: true,
  },
];

function PastTasksPage() {
  const categories = Array.from(new Set(tasks.map((task) => task.category)));

  return (
    <div className="bg-cyan-800 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">Past Tasks</h1>
        <p className="text-white mb-8">View all past tasks that you may have missed and completed.</p>
        <div className="flex justify-center mb-4">
          <div className="flex rounded-md shadow">
            {categories.map((category) => (
              <button
                key={category}
                className="py-2 px-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-l-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${task.completed ? 'opacity-50' : ''}`}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{task.title}</h2>
                <p className="text-gray-700 text-base mb-4">{task.category}</p>
                <div className="flex justify-end">
                  {task.completed ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm">Completed</span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm">Incomplete</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastTasksPage;