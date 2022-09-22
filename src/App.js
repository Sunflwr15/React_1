import React from "react";
import { Route, Routes, Navigate, } from "react-router-dom";
import User from "./pages/user";
import Createuser from "./pages/Createuser";
import Updateuser from "./pages/Updateuser";
import Userdetail from "./pages/Userdetail";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id/detail" element={<Userdetail />} />
        <Route path="/user/register" element={<Createuser />} />
        <Route path="/user/update/:id" element={<Updateuser />} />
        <Route path="*" element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
