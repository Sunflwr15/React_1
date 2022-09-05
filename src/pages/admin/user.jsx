import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

export default function User() {
  const [user, setUser] = React.useState([
    {
      name: "akbar",
      kelas: "XI RPL",
    },
    {
      name: "bayu",
      kelas: "XI RPL",
    },
    {
      name: "hilmi",
      kelas: "XI RPL",
    },
    {
      name: "nabil",
      kelas: "XI RPL",
    },
    {
      name: "rauza",
      kelas: "XI TKJ",
    },
  ]);
  return (
    <div>
      <h1>User Page</h1>
      <div className="flex flex-col">
      {user?.map((item) => {
            return (
              <div>
                <NavLink to={`${item.name}/${item.kelas}`}>{item.name}</NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}
