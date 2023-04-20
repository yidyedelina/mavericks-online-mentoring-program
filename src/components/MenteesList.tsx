import React from 'react';
import { useGetMenteesQuery } from '../services/Courses/courseapi';

function MenteesList() {
  const {data, isLoading, error} = useGetMenteesQuery();

  return (
    <div className="w-full">
      <h1>Mentees List </h1>
      {data && <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {data.map((task) => (
          <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
            <p className="text-sm font-semibold">{task.name}</p>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default MenteesList;
