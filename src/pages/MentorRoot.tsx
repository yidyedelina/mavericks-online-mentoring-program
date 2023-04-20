import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import ProfileBanner from '../components/ProfileBanner'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function MentorRoot() {
  const auth = useSelector((state: RootState) => state.auth)
  
  if (!auth.isLoggedIn) return <Navigate to="/mentors/login"  replace />;
  if(auth.role === 'mentee') return <Navigate to="/mentors/login"  replace />;
  else return (
    <>
      <Navbar />
      <ProfileBanner />
      <div className="sm:ml-64">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}
