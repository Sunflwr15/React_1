import React from "react";
import { NavLink } from "react-router-dom";

function About() {

  return (
    <React.Fragment className="">
      <section className="font-bold underline mb-10">
        <NavLink to={"/about"} className={({isActive}) => isActive ? "text-violet-600" : undefined}>
          about/
        </NavLink>
        <NavLink to={"/about/1"} className={({isActive}) => isActive ? "text-violet-600" : undefined}>
          detail_1/
        </NavLink>
        <NavLink to={"/about/2"} className={({isActive}) => isActive ? "text-violet-600" : undefined}>
          detail_2/
        </NavLink>
        <NavLink to={"/about/3"} className={({isActive}) => isActive ? "text-violet-600" : undefined}>
          detail_3/
        </NavLink>
      </section>
      <div className="">
        <p className="text-2xl font-mono font-bold antialiased">About</p>
      </div>
    </React.Fragment>
  );
}

export default About;
