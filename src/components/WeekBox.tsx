import { useState } from 'react'
import { useGetCoursesQuery } from '../services/Courses/courseapi';

export default function WeekBox() {
  const weeks = [
    { activities: ['Activity 1', 'Activity 2'], week: 'Week 1' },
    { activities: ['Activity 3', 'Activity 4'], week: 'Week 2' },
    { activities: ['Activity 5'], week: 'Week 3' },
    { activities: ['Activity 6', 'Activity 7', 'Activity 8'], week: 'Week 4' },
    { activities: ['Activity 9', 'Activity 10'], week: 'Week 5' },
    // Add more objects for additional weeks
  ]
  const { data, error, isLoading } = useGetCoursesQuery();
  console.log(data, "data")
  const [activeWeek, setActiveWeek] = useState(null)
  const [open, setOpen] = useState(false);
  const handleWeekClick = (index) => {
    setActiveWeek(activeWeek === index ? null : index)
  }
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="mx-auto max-w-lg">
      <div className="bg-cyan-400 px-6 py-4 hover:bg-cyan-500">
        <button className="text-2xl font-bold text-white" onClick={handleOpen}>
          Weekly Schedule
        </button>
      </div>
      <div className="px-6">
        {data &&
          data.map((week, index) => (
            <div
              key={index}
              className={`mb-4 rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl ${
                activeWeek === index ? 'bg-cyan-400' : ''
              }`}
            >
              <h3
                className={`mb-2 cursor-pointer text-lg font-bold ${
                  activeWeek === index ? 'text-cyan-400' : 'text-gray-700'
                }`}
                onClick={() => handleWeekClick(index)}
              >
                Week
                {' ' + week.week}
              </h3>
              {activeWeek === index && (
                <div className="mt-2">
                  {week.activities.map((activity, index) => (
                    <p key={index} className="text-gray-700">
                      {activity.title}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
