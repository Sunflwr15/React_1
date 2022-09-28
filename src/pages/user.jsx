import React from "react";
import axios from "axios";
import Button from "./components/Button";
import Swal from "sweetalert2";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);
  const [isFetch, setIsFetch] = React.useState(false);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/100`
      );
      console.log("Response =>", response.data);

      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {
      console.log("tes", err);
    }
  };

  React.useEffect(() => {
    getUserHandle();
  }, [page]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setIsFetch(true);
          await axios.delete(
            `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`
          );
          console.log("TES");
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          getUserHandle();
        } catch (error) {
          Swal.fire("Failed!", "Your file can't be deleted.", "error");
        } finally {
          setIsFetch(false);
        }
      }
    });
    console.log("Delete", id);
  };

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section>
      <div className="flex flex-row justify-between p-5">
        <h1 className="p-2 font-bold">Table User</h1>
        <NavLink
          to={"/user/register"}
          className={`border border-black p-2 px-5 self-center`}
        >
          Add User
        </NavLink>
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
            {isFetch ? (
              <tr>
                <td colSpan={8}>
                  <Skeleton count={8} className="border border-black" height={50} borderRadius={0} duration={5} />{" "}
                </td>
              </tr>
            ) : (
              users.map((item, index) => {
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
                          handleDelete(item.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            )}
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
