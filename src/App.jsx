import React from "react";
import { Route, Routes } from "react-router-dom";
import Forgot_password from "./lrpPages/forgot_password";
import Login from "./lrpPages/login";
import Register from "./lrpPages/register";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot_password" element={<Forgot_password />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
