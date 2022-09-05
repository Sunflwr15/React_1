import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Profile() {
  return (
    <div>
      <div className="space-x-10">
        <NavLink
          to="/setting/profile/edit_account"
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          Edit Account
        </NavLink>
        <NavLink
          to="/setting/profile/privacy"
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          Privacy
        </NavLink>
        <NavLink
          to="/setting/profile/authentication"
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          Authentication
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
