import React from "react";
import axios from "axios";
import Button from "../components/Button";
import Swal from "sweetalert2";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { deleteAllUser, getAllUser } from "../../API/user";
import Cookies from "js-cookie";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);
  const [isFetch, setIsFetch] = React.useState(false);

  const getUserHandle = async () => {
    try {
      const response = await getAllUser(page);
      console.log("Response =>", response.data);

      setUsers(response.data.data);
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
          await deleteAllUser(id);
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
        <h1 className="p-2 font-bold text-center">Table User</h1>
        <div className="">
          <Button
            onClick={() => {
              return navigate("/user/register", { replace: true });
              
            }}
            title="Create User"
            add="w-fit"

          >
            Add User
          </Button>
          <Button
            title={"Log Out"}
            onClick={() => {
              Cookies.remove("token");
              return navigate("/login", { replace: true });
            }}
            add="w-fit bg-red-600 text-white"
          >
            Add User
          </Button>
        </div>
      </div>

      <section className="w-screen flex justify-center ">
        <table className="table-auto w-[90%] rounded-xl">
          <thead>
            <tr className="border border-black bg-black text-white text-justify font-medium grid grid-cols-12 place-items-center">
              <th className="py-5 col-span-1">No</th>
              <th className="col-span-1">ID</th>
              <th className="col-span-2">Email</th>
              <th className="col-span-2">Name</th>
              <th className="col-span-2">Username</th>
              <th className="col-span-2">Gender</th>
              <th className="col-span-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            {isFetch ? (
              <tr>
                <td colSpan={8}>
                  <Skeleton
                    count={6}
                    className="border border-black"
                    height={70}
                    borderRadius={0}
                    duration={5}
                  />{" "}
                </td>
              </tr>
            ) : (
              users.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="text-start bg-white border-y-8 border-[#F8F8FF] grid grid-cols-12 place-items-center"
                  >
                    <td className="p-3 text-center col-span-1">{index + 1}</td>
                    <td className="text-center col-span-1">{item.id}</td>
                    <td className="col-span-2">{item.email}</td>
                    <td className="col-span-2">{item.name}</td>
                    <td className="col-span-2">{item.username}</td>
                    <td className="col-span-2">
                      {item.jenis_kelamin}
                      {users.id}
                    </td>
                    <td className="text-center col-span-2">
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
    </section>
  );
};

export default User;
