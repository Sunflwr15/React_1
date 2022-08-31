import React from "react";
import { Outlet, Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <div>
        <section className="space-x-10">
          <Link to="/setting/phone">Phone Settings</Link>
          <Link to="/setting/email">Email Settings</Link>
          <Link to="/setting/profile">Profile Settings</Link>
        </section>
        <section>
          <Outlet />
        </section>
      </div>
    </React.Fragment>
  );
}

export default About;
