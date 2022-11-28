import React from "react";
import Button from "../component/Button";
import Container from "../component/Container";
import TextField from "../component/TextField";
import { BsFillPersonFill, BsEyeFill, BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <x />
      <Container className={"space-y-10 w-[500px]"}>
        {/* Header */}
        <p className="font-medium">Register</p>
        {/* TextFiel */}
        <div className="space-y-5">
          <div className="space-y-5">
            <TextField label={"Name"} Icons={<BsFillPersonFill />} />
            <TextField label={"Email"} Icons={<BsEnvelopeFill />} />
            <TextField label={"Password"} Icons={<BsEyeFill />} />
            <TextField label={"Confirm Password"} Icons={<BsEyeFill />} />
          </div>
          {/* CheckBox */}
          {/* <div className="flex space-x-3 items-center">
            <div className="border-2 border-black h-5 w-5" />
            <p>Remember Me</p>
          </div> */}
          {/* Button */}
          <div className="grid grid-cols-2">
            <p className="text-center self-center underline">Cancel</p>
            <Button title={"Submit"} />
          </div>{" "}
        </div>
        <div className="flex items-end justify-center">
          <p>
            Already hace an account?{" "}
            <Link to="/login" className="font-bold underline">
              Login
            </Link>
          </p>
        </div>
      </Container>
      <x />
    </div>
  );
}

export default Register;
