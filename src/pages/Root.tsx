import { Outlet } from "react-router-dom";
import ProfileBanner from "../components/ProfileBanner";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
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
