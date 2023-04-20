import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore'

import { app, db } from '../../config/firebase'
import { AuthState, login } from '../../features/AuthState/auth'
import { store } from '../../store'

import type {
  Course,
  CourseState,
  Mentees,
  Mentors,
  Schedule,
  Tasks,
} from './types'

export const courseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    createTask: builder.mutation<CourseState, { tasks: Tasks }>({
      async queryFn({ tasks }: { tasks: Tasks }) {
        try {
          const courseId = store.getState().auth.user?.course.trim()
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
    getCourse: builder.query<Course, string>({
      async queryFn(courseId: string) {
        try {
          console.log(courseId, 'courseId')
          const docRef = doc(db, 'course', courseId.trim())
          const dataSnapShot = await getDoc(docRef)
          const data = dataSnapShot.data() as Course
          console.log(data, 'getCoruse')
          return { data: data }
        } catch (err) {
          console.log(err)
          return { error: 'something went wrong' }
        }
      },
    }),
    getCourses: builder.query<{ activities: Tasks[]; week: string }[], void>({
      async queryFn() {
        try {
          const courseid = store.getState().auth.user?.course.trim()
          // retrieve course with specified id
          const colRef = collection(db, 'course', courseid, 'tasks')
          const snapshot = await getDocs(colRef)
          const tasks: Tasks[] = []
          snapshot.forEach((doc) => {
            tasks.push({
              ...(doc.data() as Tasks),
              id: doc.id,
            })
          })
          const mp = new Map<string, Tasks[]>()
          tasks.forEach((task) => {
            if (!mp.has(task.week.toString())) {
              mp.set(task.week.toString(), [])
            }
            mp.get(task.week.toString()).push(task)
          })
          const mpToArray = Array.from(mp, (entry) => {
            return { activities: entry[1], week: entry[0] }
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
          const mentorId = store.getState().auth.user?.id
          const ref = collection(db, 'mentees')
          const snapshot = await getDocs(ref)
          const mentees: Mentees[] = []
          snapshot.forEach((doc) => {
            mentees.push({
              ...(doc.data() as Mentees),
              id: doc.id,
            })
          })
          console.log(mentees)
          const data = mentees.filter((mentee) => mentee.mentor === mentorId)
          return { data: data }
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
    getMentorsList: builder.query<Mentors[], string>({
      async queryFn(courseId: string) {
        try {
          const colRef = collection(db, 'mentors')
          const snapshot = await getDocs(colRef)
          const mentors: Mentors[] = []
          snapshot.forEach((doc) => {
            mentors.push({
              ...(doc.data() as Mentors),
              id: doc.id,
            })
          })
          let data = mentors.filter((mentor) => mentor.course === courseId)
          return { data: data }
        } catch (err) {
          return { data: [] }
        }
      },
    }),
    selectMentor: builder.mutation<bool, { mentorId: string }>({
      async queryFn({ mentorId }: { mentorId: string }) {
        try {
          const menteeId = store.getState().auth.user?.id
          const docRef = doc(db, 'mentees', menteeId)
          const snapshot = await getDoc(docRef)
          const data = snapshot.data() as Mentees
          let newData = {
            ...data,
            mentor: mentorId,
          }
          console.log(newData)
          await setDoc(doc(db, 'mentees', menteeId), newData)
          let extractData = localStorage.getItem('auth') || '{}'
          let x = JSON.parse(extractData) as AuthState
          let newD = {
            ...x,
            user: {
              ...x.user,
              mentor: mentorId,
            },
          }
          store.dispatch(login(newD))
          return { data: true }
        } catch (err) {
          return { data: false }
        }
      },
    }),
    getTask: builder.query<Tasks, string>({
      async queryFn(taskId: string) {
        try {
          const courseId = store.getState().auth.user?.course.trim()
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
          console.log(courseId, menteesId, 'from get today task')
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
          const menteeId = store.getState().auth.user?.id

          const ref = collection(db, 'mentees', menteeId, 'tasks')
          setDoc(doc(ref, task.id), {
            ...task,
            dateCompleted: new Date(),
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
          const menteesId = store.getState().auth.user?.id
          const ref = collection(db, 'mentees', menteesId, 'tasks')
          await deleteDoc(doc(ref, taskId))
          return { data: true }
        } catch (err) {
          return { data: false }
        }
      },
    }),
    scheduleMeeting: builder.mutation<boolean, { schedule: Schedule }>({
      async queryFn({ schedule }: { schedule: Schedule }) {
        try {
          const colRef = collection(db, 'schedules')
          await addDoc(colRef, schedule)
          return { data: true }
        } catch (err) {
          return { data: false }
        }
      },
    }),
    signInMentee: builder.mutation<
      Mentees,
      { email: string; password: string }
    >({
      async queryFn({ email, password }) {
        try {
          const auth = getAuth(app)
          const authenticate = await signInWithEmailAndPassword(
            auth,
            email,
            password
          )
          const user = doc(db, 'mentees', authenticate.user.uid)
          const userSnapShot = await getDoc(user)
          const data = {
            ...(userSnapShot.data() as Mentees),
            id: userSnapShot.id,
          }
          if (data !== undefined)
            store.dispatch(
              login({
                error: null,
                isLoggedIn: true,
                role: 'mentee',
                user: data,
              })
            )
          return { data: data }
        } catch (error: any) {
          return { error: error.message as string }
        }
      },
    }),
    getMentor: builder.query<Mentors, string>({
      async queryFn(mentorId: string) {
        try {
          const ref = doc(db, 'mentors', mentorId)
          const snapshot = await getDoc(ref)
          const data = {
            ...(snapshot.data() as Mentors),
            id: snapshot.id,
          }
          return { data: data }
        } catch (err) {
          return { data: {} as Mentors }
        }
      },
    }),
    signInMentor: builder.mutation<
      Mentors,
      { email: string; password: string }
    >({
      async queryFn({ email, password }) {
        try {
          const auth = getAuth(app)
          const authenticate = await signInWithEmailAndPassword(
            auth,
            email,
            password
          )
          const user = doc(db, 'mentors', authenticate.user.uid)
          const userSnapShot = await getDoc(user)
          const data = {
            ...(userSnapShot.data() as Mentors),
            id: userSnapShot.id,
          }
          if (data !== undefined)
            store.dispatch(
              login({
                error: null,
                isLoggedIn: true,
                role: 'mentor',
                user: data,
              })
            )

          return { data: data }
        } catch (error: any) {
          return { error: error.message as string }
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
  useGetMenteesQuery,
  useScheduleMeetingMutation,
  useSignInMenteeMutation,
  useSignInMentorMutation,
  useGetCourseQuery,
  useGetMentorsListQuery,
  useGetMentorQuery,
  useSelectMentorMutation,
} = courseApi
