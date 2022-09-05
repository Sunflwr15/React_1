import React from "react";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard";
import Kelas from "./pages/admin/kelas";
import User from "./pages/admin/user";
import UserDetail from "./pages/admin/userDetail";

function App() {
  return (
    <React.Fragment>
      <div className="p-5 h-screen w-screen flex">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="kelas" element={<Kelas />} />
            <Route path="user" element={<User />} />
            <Route path="user/:id/:kelas" element={<UserDetail />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
