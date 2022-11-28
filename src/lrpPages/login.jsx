import React from "react";
import Button from "../component/Button";
import Container from "../component/Container";
import TextField from "../component/TextField";
import { BsEnvelopeFill, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <x />
      <Container className={"space-y-10 w-[500px]"}>
        {/* Header */}
        <p className="font-medium">Login</p>
        {/* TextFiel */}
        <div className="space-y-5">
          <div className="space-y-5">
            <TextField label={"Email"} Icons={<BsEnvelopeFill />} />
            <TextField label={"Password"} Icons={<BsEyeFill />} />
          </div>
          {/* CheckBox */}
          <div className="flex items-center justify-between">
            <div className=" flex items-center ">
              <div className="border-2 border-black h-5 w-5 mr-3" />
              <p>Remember Me</p>
            </div>
            <Link to="/forgot_password" className="underline">
              Forgot Password
            </Link>
          </div>
          {/* Button */}
          <div className="grid grid-cols-2">
            <p className="text-center self-center underline">Cancel</p>
            <Button title={"Submit"} />
          </div>{" "}
        </div>
        <div className="flex h-36 items-end justify-center">
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="font-bold underline">
              Register
            </Link>
          </p>
        </div>
      </Container>
      <x />
    </div>
  );
}

export default Login;
