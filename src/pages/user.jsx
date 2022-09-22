import React from "react";
import axios from "axios";
import Button from "./components/Button";
import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(10);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan?kode=10102`
      );
      console.log("Response =>", response.data.data.data);

      setUsers(response.data.data.data);
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
            to={"/Admin/Books/Add"}
            className={`border border-black p-2 px-5 self-center`}
          >
            Add User
          </NavLink>
        </div>
      </div>

      <section className="w-full flex justify-center">
        <table className="table-auto w-full">
          <thead>
            <tr className="border border-black">
              <th className="py-3">No</th>
              <th>ID</th>
              <th>Writer Code</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Thickness</th>
              <th>Sinopsis</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => {
              return (
                <tr className="border border-black text-center ">
                  <td>{users.id}</td>
                  <td>{users.kode_penulis}</td>
                  <td>{users.judul_buku}</td>
                  <td>{users.nama_pengarang}</td>
                  <td>{users.ketebalan_buku}</td>
                  <td>{users.sinopsis}</td>
                  <td>{users.tahun_terbit_buku}</td>
                  <td>
                    <Button
                      title="Edit"
                      onClick={() => {
                        return navigate(`/Admin/Books/:id/update`, {
                          replace: true,
                        });
                      }}
                    />
                    <Button
                      title="Delete"
                      add="text-white bg-red-600 hover:bg-red-800"
                      onClick={() => {
                        return navigate(`/Admin/Books/:id/update`, {
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
    </section>
  );
};

export default User;
