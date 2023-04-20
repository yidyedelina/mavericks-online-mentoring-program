import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // import the English locale for dayjs
import 'dayjs/plugin/weekday'; // import the weekday plugin for dayjs

dayjs.locale('en'); // set the locale for dayjs
dayjs.extend(require('dayjs/plugin/weekday')); // extend dayjs with the weekday plugin

const Calendar = ({ tasks }) => {
  const today = dayjs();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthDays = today.daysInMonth();
  const monthStart = today.startOf('month').weekday();
  const monthEnd = today.endOf('month').weekday();

  return (
    <div className="grid grid-cols-7 sm:grid-cols-3 gap-2 sm:gap-4">
      {/* Render the weekdays */}
      {weekdays.map((weekday) => (
        <div key={weekday} className="text-center font-medium text-gray-500">
          {weekday}
        </div>
      ))}

      {/* Render the empty cells for the start of the month */}
      {Array.from({ length: monthStart }, (_, index) => (
        <div key={`empty-${index}`} className="text-center text-gray-300">
          {''}
        </div>
      ))}

      {/* Render the days of the month */}
      {Array.from({ length: monthDays }, (_, index) => {
        const day = index + 1;
        const date = today.date(day);
        const task = tasks[date.format('YYYY-MM-DD')] || '';

        return (
          <div key={`day-${day}`} className="text-center">
            <div className="font-medium">{day}</div>
            <div className="text-sm text-gray-500">{task}</div>
          </div>
        );
      })}

      {/* Render the empty cells for the end of the month */}
      {Array.from({ length: 6 - monthEnd }, (_, index) => (
        <div key={`empty-${index + monthDays}`} className="text-center text-gray-300">
          {''}
        </div>
      ))}
    </div>
  );
};

export default Calendar;