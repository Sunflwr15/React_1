import React from "react";
import { NavLink } from "react-router-dom";

function Createuser() {
  return (
    <React.Fragment>
      <p className="text-center font-bold uppercase mt-10">User Register</p>
      <div className="flex justify-center">
        <form
          action=""
          className="mt-5 space-y-5 w-[300px] border border-black p-5"
        >
          <div>
            <p>Userame</p>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="border-b border-black w-full"
            />
          </div>
          <div>
            <p>Name</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="border-b border-black w-full"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Username"
              className="border-b border-black w-full"
            />
          </div>
          <div>
            <p>Gender</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="border-b border-black w-full"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="border-b border-black w-full"
            />
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="border-b border-black w-full"
            />
          </div>
        <div className="flex flex-row justify-between">
          <NavLink to="/user" className={``}>Cancel</NavLink>
          <NavLink to="/user" className={`border border-black p-2 px-5`}>Submit</NavLink>
        </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Createuser;
