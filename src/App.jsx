import React from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import User from "./pages/user";
import Createuser from "./pages/Createuser";
import Updateuser from "./pages/Updateuser";
import Userdetail from "./pages/Userdetail";
import Screen from "./pages/screen";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Login from "./pages/login";

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Admin" element={<Screen />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Books" element={<User />}></Route>
            <Route path="Books/Add" element={<Createuser />} />
            <Route path="Books/:id/update" element={<Updateuser />} />
            <Route path="Books/:id/view" element={<Userdetail />} />
            <Route path="About" element={<About />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
