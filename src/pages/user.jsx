import React from "react";
import axios from "axios";
import Button from "./components/Button";
import { NavLink } from "react-router-dom";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`
      );
      console.log("Response =>", response.data);

      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section>
      <div className="flex flex-row justify-evenly py-5">
        <h1>Table User</h1>
        <NavLink to={"/register"} className={`border border-black p-2 px-5`}>
          Tambah User
        </NavLink>
      </div>

      <table className="table-auto w-screen">
        <thead>
          <tr className="border">
            <th className="py-3">No</th>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Userame</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index} className="border text-center ">
                <td className="p-3">{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.jenis_kelamin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>Saat ini page {page}</p>
      <div className="flex flex-row space-x-5 w-screen justify-center">
        <Button
          title="Previous"
          onClick={() => {
            setPage(+1);
          }}
        />
        <Button
          title="Next"
          onClick={() => {
            setPage(-1);
          }}
        />
      </div>
    </section>
  );
};

export default User;
