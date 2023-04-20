import { useSelector, useDispatch } from 'react-redux'
import { useGetCourseQuery } from '../services/Courses/courseapi'
import { logout } from '../features/AuthState/auth'
import { RootState } from '../store'
import { useEffect } from 'react'

export default function ProfileBanner() {
  const auth = useSelector((state: RootState) => state.auth)
  const { data, isLoading, error } = useGetCourseQuery(auth.user.course)
  const dispatch = useDispatch()
  return (
    <div className="flex h-96 w-full items-center bg-cyan-400 p-8 text-left text-white hover:bg-cyan-500">
      <div className="flex w-3/4 flex-col gap-5 mx-auto">
        <h1 className="text-3xl font-semibold text-white">
          {isLoading ? 'loading...' : data?.name}
        </h1>
        <p>{auth.role}</p>
        <div className="flex items-center gap-2 ">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Rounded avatar"
          ></img>
          <p className="text-base font-semibold">{auth.user.name}</p>
        </div>
        <button
          className="w-32 rounded-md bg-white px-4 py-2 text-cyan-400"
          onClick={()=>dispatch(logout())}
        >
          log out
        </button>
      </div>
    </div>
  )
}
