import React from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import User from "./pages/user";
import Createuser from "./pages/Createuser";
import Updateuser from "./pages/Updateuser";
import Userdetail from "./pages/Userdetail";
import Screen from "./pages/screen";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-7 justify-end">
        <section className="col-span-1"></section>
        <div className="flex flex-col p-5 space-y-10 bg-stone-900 text-white fixed h-screen w-[13%]">
          <NavLink to={"/Admin/Dashboard"}>Dashboard</NavLink>
          <NavLink to={"/Admin/Books"}>Books</NavLink>
          <NavLink to={"/Admin/About"}>About</NavLink>
        </div>
        <div className="col-span-6 pr-3 py-5">
          <Routes>
            <Route path="/" element={<Screen />}>
              <Route path="/Admin/Dashboard" element={<Dashboard />} />
              <Route path="/Admin/Books" element={<User />}></Route>
              <Route path="/Admin/Books/Add" element={<Createuser />} />
              <Route path="/Admin/Books/:id/update" element={<Updateuser />} />
              <Route path="/Admin/Books/:id/view" element={<Userdetail />} />
              <Route path="/Admin/About" element={<About />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
