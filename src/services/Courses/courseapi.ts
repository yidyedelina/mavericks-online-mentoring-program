import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore'

import { db } from '../../config/firebase'

import type { Course, CourseState, Mentees, Tasks } from './types'

export const courseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    createTask: builder.mutation<CourseState, { tasks: Tasks }>({
      async queryFn({ tasks }: { tasks: Tasks }) {
        try {
          const courseId = 'FX7gxWWG5ZLDCykuaQYn'
          const taskRef = collection(db, 'course', courseId, 'tasks')
          await addDoc(taskRef, tasks)

          const ref = collection(db, 'course')
          const snapshot = await getDocs(ref)
          const courses: Course[] = []
          snapshot.forEach((doc) => {
            courses.push(doc.data() as Course)
          })
          return { data: { courses, error: null, loading: false } }
        } catch (err) {
          return {
            data: {
              courses: [],
              error: 'Something went wrong',
              loading: false,
            },
          }
        }
      },
    }),
    getCourses: builder.query<{ activities: Tasks[]; week: string }[], void>({
      async queryFn() {
        try {
          const courseid = 'FX7gxWWG5ZLDCykuaQYn'
          // retrieve course with specified id
          const colRef = collection(db, 'course', courseid, 'tasks')
          const snapshot = await getDocs(colRef)
          const tasks: Tasks[] = []
          snapshot.forEach((doc) => {
            tasks.push(doc.data() as Tasks)
          })
          const mp = new Map<string, Tasks[]>()
          tasks.forEach((task) => {
            if (!mp.has(task.week.toString())) {
              mp.set(task.week.toString(), [])
            }
            mp.get(task.week.toString()).push(task)
          })
          const mpToArray = Array.from(mp, (entry) => {
            return { week: entry[0], activities: entry[1] }
          })
          return { data: mpToArray }
        } catch (err) {
          return {
            data: {
              courses: [],
              error: 'Something went wrong',
              loading: false,
            },
          }
        }
      },
    }),
    getMentees: builder.query<Mentees[], void>({
      async queryFn() {
        try {
          const ref = collection(db, 'mentees')
          const snapshot = await getDocs(ref)
          const mentees: Mentees[] = []
          snapshot.forEach((doc) => {
            mentees.push(doc.data() as Mentees)
          })
          return { data: mentees }
        } catch (err) {
          return { data: [] }
        }
      },
    }),
    getMenteesTasks: builder.query<Tasks[], { menteesId: string }>({
      async queryFn({ menteesId }: { menteesId: string }) {
        try {
          const ref = collection(db, 'mentees', menteesId, 'tasks')
          const snapshot = await getDocs(ref)
          const tasks: Tasks[] = []
          snapshot.forEach((doc) => {
            tasks.push({
              ...(doc.data() as Tasks),
              id: doc.id,
            })
          })
          return { data: tasks }
        } catch (err) {
          return { data: [] }
        }
      },
    }),
    getTask: builder.query<Tasks, string>({
      async queryFn(taskId: string) {
        try {
          const courseId = 'FX7gxWWG5ZLDCykuaQYn'
          const docRef = doc(db, 'course', courseId, 'tasks', taskId)
          const dataSnapShot = await getDoc(docRef)
          const data = dataSnapShot.data() as Tasks
          return { data: data }
        } catch (err) {
          console.log(err)
          return { error: 'something went wrong' }
        }
      },
    }),
    getTasks: builder.query<Tasks[], { courseId: string }>({
      async queryFn({ courseId }: { courseId: string }) {
        try {
          const ref = collection(db, 'course', courseId, 'tasks')
          const snapshot = await getDocs(ref)
          const tasks: Tasks[] = []
          snapshot.forEach((doc) => {
            tasks.push({
              ...(doc.data() as Tasks),
              id: doc.id,
            })
          })
          return { data: tasks }
        } catch (err) {
          return { data: [] }
        }
      },
    }),
    getTodayTask: builder.query<
      Tasks[],
      { courseId: string; menteesId: string }
    >({
      async queryFn({
        courseId,
        menteesId,
      }: {
        courseId: string
        menteesId: string
      }) {
        try {
          const ref = collection(db, 'course', courseId, 'tasks')
          const snapshot = await getDocs(ref)
          const tasks: Tasks[] = []
          snapshot.forEach((doc) => {
            tasks.push({
              ...(doc.data() as Tasks),
              id: doc.id,
            })
          })
          const menteesRef = collection(db, 'mentees', menteesId, 'tasks')
          const menteesSnapshot = await getDocs(menteesRef)
          const menteesTasks: Tasks[] = []
          menteesSnapshot.forEach((doc) => {
            menteesTasks.push({
              ...(doc.data() as Tasks),
              id: doc.id,
            })
          })
          let today = new Date()
          let data = tasks
            .filter((task) => {
              let startDate = new Date()
              startDate.setDate(
                startDate.getDate() + (task.day - 1) + (task.week - 1) * 7
              )
              return (
                today.getDate() === startDate.getDate() &&
                today.getMonth() === startDate.getMonth() &&
                today.getFullYear() === startDate.getFullYear()
              )
            })
            .map((task) => {
              let menteesTask = menteesTasks.find((t) => t.id == task.id)
              if (menteesTask) {
                return {
                  ...task,
                  completed: true,
                }
              } else {
                return {
                  ...task,
                  completed: false,
                }
              }
            })
          return { data: data }
        } catch (err) {
          return { data: [] }
        }
      },
    }),
    markTaskCompleted: builder.mutation<boolean, Tasks>({
      async queryFn(task: Tasks) {
        try {
          const menteeId = 'K8zcusNSikRmBrOp8J7x'
  
          const ref = collection(db, 'mentees', menteeId, 'tasks')
          setDoc(doc(ref, task.id), {
            ...task,
            dateCompleted: new Date()
          })
          return { data: true }
        } catch (err) {
          return { data: false }
        }
      },
    }),

    removeTask: builder.mutation<boolean, string>({
      async queryFn(taskId: string) {
        try {
          const menteesId = 'K8zcusNSikRmBrOp8J7x'
          const ref = collection(db, 'mentees', menteesId, 'tasks')
          await deleteDoc(doc(ref, taskId))
          return { data: true }
        } catch (err) {
          return { data: false }
        }
      },
    }),
  }),
  reducerPath: 'courseApi',
})

export const {
  useCreateTaskMutation,
  useGetCoursesQuery,
  useGetTodayTaskQuery,
  useMarkTaskCompletedMutation,
  useRemoveTaskMutation,
  useGetTaskQuery,
  useGetMenteesTasksQuery,
} = courseApi
