import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../komponen/button";

function Login() {
  const navigate = useNavigate();
  const handleRegister = () => {
    return navigate("register", { replace: true });
  };
  const handleLogin = () => {
    return navigate("admin/dashboard", { replace: true });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <div className="flex space-x-5">
        <Button onClick={handleRegister} title="Register"/>
        <Button onClick={handleLogin} title="Login"/>
      </div>
    </div>
  );
}

export default Login;
