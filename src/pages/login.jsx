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
    <div className="">
      <div className="space-x-5">
        <Button onClick={handleLogin} title="Login" />
        {""}
        <Button onClick={handleRegister} title="Register" />
      </div>
    </div>
  );
}

export default Login;
