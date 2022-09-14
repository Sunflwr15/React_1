import React from "react";
import axios from "axios";
import Button from "./components/Button";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section>
      <div className="flex flex-row justify-between p-5">
        <h1 className="p-2 font-bold">Table User</h1>
        <div className="flex space-x-3">
          <NavLink
            to={"/register"}
            className={`border border-black p-2 px-5 self-center`}
          >
            Add User
          </NavLink>
          <NavLink
            to={"/user/update/:id"}
            className={`border border-black p-2 px-5 self-center`}
          >
            Update User
          </NavLink>
        </div>
      </div>

      <section className="w-screen flex justify-center">
        <table className="table-auto w-[1100px]">
          <thead>
            <tr className="border border-black">
              <th className="py-3">No</th>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Username</th>
              <th>Gender</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index} className="border border-black text-center ">
                  <td className="p-3">{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>
                    {item.jenis_kelamin}
                    {users.id}
                  </td>
                  <td>
                    <Button
                      title="Edit"
                      onClick={() => {
                        return navigate(`/user/update/${item.id}`, {
                          replace: true,
                        });
                      }}
                    />
                    <Button
                      title="Delete"
                      add="text-white bg-red-600 hover:bg-red-800"
                      onClick={() => {
                        return navigate(`/user/update/${item.id}`, {
                          replace: true,
                        });
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <p className="text-center m-3">Current Page {page}</p>
      <div className="flex flex-row space-x-5 w-screen justify-center m-2">
        <Button
          title="Previous"
          onClick={() => {
            setPage(-1);
          }}
        />
        <Button
          title="Next"
          onClick={() => {
            setPage(+1);
          }}
        />
      </div>
    </section>
  );
};

export default User;
