import React from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { deleteArtikel, getAllArtikel } from "../../API/artikel_API/artikel";
import Skeleton from "react-loading-skeleton";
import { Button } from "../../component";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Artikel = () => {
  const [listArtikel, setListArtikel] = React.useState([]);
  const [fetchArtikel, setFetchArtikel] = React.useState(false);
  const navigate = useNavigate();

  const getArtikelHandle = async () => {
    try {
      setFetchArtikel(true);
      const response = await getAllArtikel();
      console.log("Response =>", response);
      setListArtikel(response.data.data.data);
    } catch (err) {
      console.log("error =>", err);
    } finally {
      setFetchArtikel(false);
    }
  };

  React.useEffect(() => {
    getArtikelHandle();
  }, []);

  console.log("artikel =>", listArtikel);
  return (
    <section className="grid grid-rows-7 w-screen h-screen p-3">
      <div className="flex justify-between items-center">
        <NavLink
          to={"/artikel/create"}
          className="h-fit border-2 border-neutral-800 p-3"
        >
          Buat Artikel
        </NavLink>
        <Button
          edit="h-fit border-2 border-neutral-800 p-3"
          title={"Logout"}
          onClick={() => {
            Cookies.remove("myapps_token");
            return navigate("/login", { replace: true });
          }}
        />
      </div>

      {fetchArtikel ? (
        <div className="h-full flex justify-center row-span-6">
          <p className="animate-pulse self-center">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 h-full overflow-auto row-span-6">
          {listArtikel?.map((artikel, index) => {
            return (
              <div className="border-2 border-neutral-800 grid grid-cols-4 ">
                <div className="col-span-3 flex flex-row space-x-3">
                  <img
                    src={artikel.thumbnail}
                    alt=""
                    className="w-[150px] h-[150px] bg-cover"
                  />
                  <div className="space-y-2">
                    <p className="font-bold">{artikel.judul}</p>
                    <div className="h-[120px] overflow-auto">
                      <p>{artikel.artikel}</p>
                    </div>{" "}
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <Button
                    title={"Hapus"}
                    edit={"h-full"}
                    onClick={async () => {
                      const response = await deleteArtikel(artikel.id);
                      try {
                        if (response.data.status === "Fail") {
                          const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
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
                            position: "top-end",
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
                            title: "Artikel berhasil di Update!",
                          });
                        }
                      } catch (err) {
                        console.log("delete err =>", err);
                      } finally {
                      }
                    }}
                  />

                  <Button
                    title={"Edit"}
                    edit={"h-full"}
                    onClick={() => {
                      return navigate(
                        `/artikel/update/${artikel.id}/${artikel.slug}`
                      );
                    }}
                  />
                  <Button
                    title={"Detail"}
                    edit={"h-full"}
                    onClick={() => {
                      return navigate(`/artikel/detail/${artikel.slug}`);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Artikel;
