import { useState, useEffect } from "react";

const MissedTasks = () => {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    // Similate fetching mentee data
    setMentees([
      { id: 1, name: 'Mentee 1', tasks: [
          { id: 1, title: 'Task 1', deadline: '2023-04-18', completed: true },
          { id: 2, title: 'Task 2', deadline: '2023-04-18', completed: false },
          { id: 3, title: 'Task 3', deadline: '2023-04-11', completed: true },
          { id: 4, title: 'Task 4', deadline: '2023-04-11', completed: true },
          { id: 5, title: 'Task 5', deadline: '2023-04-04', completed: false },
        ]
      },
      { id: 2, name: 'Mentee 2', tasks: [
          { id: 6, title: 'Task 6', deadline: '2023-04-18', completed: false },
          { id: 7, title: 'Task 7', deadline: '2023-04-11', completed: true },
          { id: 8, title: 'Task 8', deadline: '2023-04-04', completed: true },
        ]
      },
    ]);
  }, [])

  const [groupBy, setGroupBy] = useState('week');

  const getTasksByWeek = () => {
    const tasksByWeek = {};
    mentees.forEach(mentee => {
      mentee.tasks.forEach(task => {
        if (!task.completed) {
          const week = getWeekFromDate(task.deadline);
          if (!tasksByWeek[week]) {
            tasksByWeek[week] = [];
          }
          tasksByWeek[week].push({ menteeId: mentee.id, taskId: task.id, taskTitle: task.title });
        }
      });
    });
    return tasksByWeek;
  };

  const getTasksByMentee = () => {
    const tasksByMentee = {};
    mentees.forEach(mentee => {
      mentee.tasks.forEach(task => {
        if (!task.completed) {
          if (!tasksByMentee[mentee.id]) {
            tasksByMentee[mentee.id] = [];
          }
          tasksByMentee[mentee.id].push({ taskId: task.id, taskTitle: task.title, deadline: task.deadline });
        }
      });
    });
    return tasksByMentee;
  };

  const getWeekFromDate = (dateStr) => {
    const date = new Date(dateStr);
    const onejan = new Date(date.getFullYear(), 0, 1);
    const week = Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    return `${date.getFullYear()}-W${week.toString().padStart(2, '0')}`;
  };

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };
  const renderTasksByWeek = () => {
    const tasksByWeek = getTasksByWeek();
    const weeks = Object.keys(tasksByWeek).sort();
    return weeks.map((week) => (
      <div key={week}>
        <h3>{`Week ${week}`}</h3>
        <ul>
          {tasksByWeek[week].map((task) => (
            <li key={task.taskId}>
              <span>{`Mentee ${task.menteeId}`}</span>
              <span>{task.taskTitle}</span>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const renderTasksByMentee = () => {
    const tasksByMentee = getTasksByMentee();
    const menteeIds = Object.keys(tasksByMentee).sort();
    return menteeIds.map((menteeId) => (
      <div key={menteeId}>
        <h3>{`Mentee ${menteeId}`}</h3>
        <ul>
          {tasksByMentee[menteeId].map((task) => (
            <li key={task.taskId}>
              <span>{task.taskTitle}</span>
              <span>{task.deadline}</span>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const renderMissedTasks = () => {
    if (groupBy === 'week') {
      return renderTasksByWeek();
    } else {
      return renderTasksByMentee();
    }
  };

  return (
    <div>
      <h2>Missed Tasks</h2>
      <div>
        <label>
          Group by:
          <select value={groupBy} onChange={handleGroupByChange}>
            <option value="week">Week</option>
            <option value="mentee">Mentee</option>
          </select>
        </label>
      </div>
      {renderMissedTasks()}
    </div>
  );
};

export default MissedTasks;