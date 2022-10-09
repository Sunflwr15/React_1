import Cookies from "js-cookie";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { article, articleDelete } from "../API/auth";
import Button from "./components/Button";

function Artikel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Art, setArt] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDelet, setIsDelete] = React.useState(false);
  const getUserHandle = async () => {
    try {
      setIsLoading(true);
      const response = await article();
      console.log("Response =>", response.data.data.data);

      setArt(response.data.data.data);
    } catch (err) {
      // console.log("tes", err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserHandle();
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-row justify-between p-5">
        <h1 className="p-2 font-bold text-center">Article</h1>
        <div className="">
          <Button
            onClick={() => {
              return navigate(`/artikel/create`, { replace: true });
            }}
            title="Create User"
            add="w-fit"
          ></Button>
          <Button
            title={"Log Out"}
            onClick={() => {
              Cookies.remove("token");
              return navigate("/login", { replace: true });
            }}
            add="w-fit bg-red-600 text-white"
          ></Button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex w-screen h-screen place-items-center justify-center">
          <p className="text-center text-xl animate-pulse ">Loading...</p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-5 p-5">
            {Art.map((item, index) => {
              return (
                <div className=" bg-white">
                  <div className="grid grid-cols-3 border-b w-full h-[200px] border border-black p-5">
                    <div className="space-y-3 h-full flex justify-between flex-col col-span-2">
                      <div className="flex flex-col">
                        {" "}
                        <p className="text-1xl uppercase font-bold">
                          {item.judul}
                        </p>
                        <p className="text-1xl uppercase text-gray-500">
                          {item.slug}
                        </p>
                      </div>
                      <div className="w-full h-[50px] overflow-hidden">
                        <p>{item.artikel}</p>
                      </div>{" "}
                      <p className="text-1xl uppercase text-gray-500">
                        {item.created_at}
                      </p>
                    </div>
                    <img
                      src={item.thumbnail}
                      alt="thumbnail"
                      className="rounded-xl w-52 h-44 object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3">
                    <Button
                      title="View"
                      onClick={() => {
                        return navigate(`/artikel/update/${item.slug}`);
                      }}
                    ></Button>
                    <Button
                      title="Edit"
                      onClick={() => {
                        return navigate(
                          `/artikel/update/${item.slug}/${item.id}`
                        );
                      }}
                    ></Button>
                    <Button
                      title={isDelet ? "Deleting" : "Delete"}
                      onClick={async () => {
                        const response = await articleDelete(item.id);
                        console.log("response", response);
                        try {
                          setIsDelete(true);
                          if (response.data.status === "Fail") {
                            const Toast = Swal.mixin({
                              toast: true,
                              position: "top-start",
                              showConfirmButton: false,
                              timer: 3000,
                              timerProgressBar: true,
                              didOpen: (toast) => {
                                toast.addEventListener(
                                  "mouseenter",
                                  Swal.stopTimer
                                );
                                toast.addEventListener(
                                  "mouseleave",
                                  Swal.resumeTimer
                                );
                              },
                            });

                            Toast.fire({
                              icon: "error",
                              title: response.data.message,
                            });
                          } else {
                            const Toast = Swal.mixin({
                              toast: true,
                              position: "top-start",
                              showConfirmButton: false,
                              timer: 3000,
                              timerProgressBar: true,
                              didOpen: (toast) => {
                                toast.addEventListener(
                                  "mouseenter",
                                  Swal.stopTimer
                                );
                                toast.addEventListener(
                                  "mouseleave",
                                  Swal.resumeTimer
                                );
                              },
                            });

                            Toast.fire({
                              icon: "success",
                              title: "Success Deleting Article",
                            });
                            getUserHandle();
                          }
                        } catch (error) {
                        } finally {
                          setIsDelete(false);
                        }
                      }}
                    ></Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Artikel;
