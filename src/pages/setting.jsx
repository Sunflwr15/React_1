import React from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleBack = () => {
    return navigate(-1);
  };
  const location = useLocation()
  let path = location.pathname.split("/")[1]
  console.log(path)
  return (
    <React.Fragment>
      <div>
        <section>
          <button onClick={handleBack}>Back</button>
        </section>
        <section className="space-x-10 mt-5">
          <Link to={`/${path}/phone`}>Phone Settings</Link>
          <Link to={`/${path}/email`}>Email Settings</Link>
          <Link to={`/${path}/profile`}>Profile Settings</Link>
        </section>

        <section>
          <Outlet />
        </section>
      </div>
    </React.Fragment>
  );
}

export default About;
