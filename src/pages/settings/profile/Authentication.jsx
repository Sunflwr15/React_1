import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Authentication() {
  return (
    <div>
      <div>
        <NavLink to="/setting/profile/authentication/tes">Tes</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Authentication;
