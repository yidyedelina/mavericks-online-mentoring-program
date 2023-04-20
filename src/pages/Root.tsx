import { Navigate, Outlet, useNavigate } from "react-router-dom";
import ProfileBanner from "../components/ProfileBanner";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Root() {
  const auth = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()
  if (!auth.isLoggedIn) return <Navigate to="/mentees/login"  replace />;
  if(auth.role === 'mentor') return <Navigate to="/mentees/login"  replace />;
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
