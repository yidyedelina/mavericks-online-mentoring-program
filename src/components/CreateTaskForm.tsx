import { useState } from 'react'
import Select from './basic/Select'
import AddTaskContent from './RichText'
import { useCreateTaskMutation } from '../services/Courses/courseapi'

export default function CreateTaskForm() {
  const [type, setType] = useState<'Video' | 'Article' | 'Project'>('Video')
  const [week, setWeek] = useState<number>(1)
  const [day, setDay] = useState<number>(1)
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [video, setVideo] = useState<string>('');
  const [createTask, status] = useCreateTaskMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //validate fields 
    if (!title || !content || (type === 'Video' && video === '')) {
      alert('invalid')
      return;
    }
    createTask({
      tasks: {
        title: title,
        type: type,
        week: week,
        day: day,
        content: type === 'Video' ? video : JSON.stringify(content),
      }
    })
  }
  const handleContent = (val: string)=> {
    setContent(val);
  }
  return (
    <form className='text-left' onSubmit={
      handleSubmit
    }>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          task title
        </label>
        <input
          type="text"
          id="email"
          className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="react hooks"
          value={title}
          onChange = {(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <Select
          category={type}
          setCategory={setType}
          data={[
            { key: 'Video', value: 'Video' },
            { key: 'Article', value: 'Article' },
            { key: 'Project', value: 'Project' },
          ]}
          title="Type"
        />
      </div>
      {type === 'Video' && (
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            link to video
          </label>
          <input
            type="text"
            id="email"
            className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 "
            placeholder="react hooks"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
      )}
      {(type === 'Article' || type === 'Project') && (
        <div className="mb-6">
          <AddTaskContent task={content} setTask={handleContent} />
        </div>
      )}
      <div className="mb-6 flex w-full gap-3">
        <Select
          category={week.toString()}
          setCategory={setWeek}
          data={[
            { key: '1', value: 'Week 1' },
            { key: '2', value: 'Week 2' },
            { key: '3', value: 'Week 3' },
            { key: '4', value: 'Week 4' },
            { key: '5', value: 'Week 5' },
            { key: '6', value: 'Week 6' },
          ]}
          title="week"
        />
        <Select
          category={day.toString()}
          setCategory={setDay}
          data={[
            { key: '1', value: 'Monday' },
            { key: '2', value: 'Tuesday' },
            { key: '3', value: 'Wednesday' },
            { key: '4', value: 'Thursday' },
            { key: '5', value: 'Friday' },
            { key: '6', value: 'Saturday' },
            { key: '7', value: 'Sunday' },
          ]}
          title="day"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {status.isLoading ? 'loading...' : 'Create Task'}
      </button>
      {status?.error ? <div>error</div> : ''}
    </form>
  )
}
