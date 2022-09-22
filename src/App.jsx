import React from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import User from "./pages/user";
import Createuser from "./pages/Createuser";
import Updateuser from "./pages/Updateuser";
import Userdetail from "./pages/Userdetail";
import Screen from "./pages/screen";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex flex-col space-y-10">
          <NavLink to={"/Admin/Dashboard"}>Dashboard</NavLink>
          <NavLink to={"/Admin/Books"}>Books</NavLink>
          <NavLink to={"/About"}>About</NavLink>
        </div>
        <div className="col-span-2">
          <Routes>
            <Route path="/" element={<Screen />}>
              <Route path="/Admin/Dashboard" element={<Dashboard />} />
              <Route path="/Admin/Books" element={<User />}></Route>
              <Route path="/Admin/Books/Add" element={<Createuser />} />
              <Route path="/Admin/Books/:id/update" element={<Updateuser />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
