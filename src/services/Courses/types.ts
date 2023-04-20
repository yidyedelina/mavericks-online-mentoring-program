export interface Course {
  id: string
  title: string
  description: string
  duration: string
  task: Tasks[]
}
export interface CourseState {
  courses: Course[]
  loading: boolean
  error: string | null
}

export interface Tasks {
  dateCompleted: Date
  completed?: boolean | undefined
  id?: string
  title: string
  type: 'Video' | 'Article' | 'Project'
  content: string
  week: number
  day: number
  createdBy?: string
}
export interface Schedule {
  id?: string
  title: string
  type: 'Voice Call' | 'Video Call' | 'Text Chat'
  date: Date
  mentor: string
}
export interface EnrolledCourse {
  id: string
  title: string
  description: string
  duration: string
  task: Tasks[]
}
export interface Mentees {
  mentor: string
  id: string
  name: string
  email: string
  phone: string
  courses: EnrolledCourse[]
  github: string
  linkedin: string
}
export interface Mentors {
  image: string | undefined
  description: ReactNode
  id: string
  name: string
  email: string
  phone: string
  assignedMentees: Mentees[]
  github: string
  linkedin: string
  specialization: string
  areas: String[]
}


