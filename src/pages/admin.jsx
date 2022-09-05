import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Button from "../komponen/button";


export default function Admin() {
  const navigate = useNavigate();
  const handleBack = () => {
    return navigate("/", {replace: true})
  }
  return (
    <div className="grid grid-cols-5 gap-5 h-screen w-screen">
      <div className="col-span-1 ">
        <nav className="flex-col flex space-x-10 mb-5">
          <NavLink to="/admin/dashboard" className={({isActive}) => isActive ? "underline font-bold" : undefined}>Dashboard</NavLink>
          <NavLink to="/admin/user" className={({isActive}) => isActive ? "underline font-bold" : undefined}>User</NavLink>
          <NavLink to="/admin/kelas" className={({isActive}) => isActive ? "underline font-bold" : undefined}>Kelas</NavLink>
        </nav>
        <Button onClick={handleBack} title="Log Out" />
      </div>
      <div className="col-span-4 ">
        <Outlet />
      </div>
    </div>
  );
}
