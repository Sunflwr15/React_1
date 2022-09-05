import React from "react";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import second from "./pages/admin";

function App() {
  return (
    <React.Fragment>
      <Login />

      <Routes>
        <Route to="/" element={<Login />}></Route>
        <Route to="login" element={<Login />}></Route>
        <Route to="register" element={<Register />}></Route>
        <Route to="*" element={<Navigate to="/" replace/>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
