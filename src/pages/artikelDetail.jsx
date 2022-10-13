import Cookies from "js-cookie";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  article,
  articleCreate,
  articleDetail,
  articleUpdate,
} from "../API/auth";
import Input from "../module/input";
import Button from "./components/Button";

function ArtikelDetail() {
  const { slug, id } = useParams();
  const navigate = useNavigate();
  const [Art, setArt] = React.useState({
    slug: "",
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const handleChange = (e) => {
    setArt((Art) => {
      return { ...Art, [e.target.name]: e.target.value };
    });
  };
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await articleUpdate(id, Art);
      console.log(response);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Success creating article",
      });
      return navigate("/", { replace: true });
    } catch (err) {
      console.log("tes", err);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "Failed creating article",
      });
      const response = await articleDetail(slug, Art);
      const dataUser = response.data.data;
      setArt((e) => {
        return {
          judul: dataUser.judul,
          slug: dataUser.slug,
          thumbnail: dataUser.thumbnail,
          id: dataUser.id,
          imagePreview: null,
          artikel: dataUser.artikel,
          created_at: dataUser.created_at,
        };
      });
    } finally {
      setLoading(false);
    }
  };
  const getDetailUser = async () => {
    try {
      const response = await articleDetail(slug, Art);
      const dataUser = response.data.data;
      setArt((e) => {
        return {
          judul: dataUser.judul,
          slug: dataUser.slug,
          thumbnail: dataUser.thumbnail,
          id: dataUser.id,
          artikel: dataUser.artikel,
          created_at: dataUser.created_at,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getDetailUser(id);
  }, []);
  return (
    <React.Fragment>
      <div className="grid border-b w-full h-screen p-10 bg-white shadow-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          <div className="w-full h-full flex justify-center place-items-center">
            {" "}
            <img src={Art.thumbnail} alt={Art.thumbnail} className="w-96" />
          </div>
          <div className="flex flex-col justify-around ">
            <div>
              <div className="flex flex-row justify-between">
                <p className="uppercase font-bold">{Art.judul}</p>
                <p className="uppercase text-gray-400">{Art.slug}</p>
              </div>{" "}
              <p className="uppercase text-gray-400">{Art.created_at}</p>
            </div>
            <div>
              <p className="font-bold">Article</p>
              <div className="h-[150px] overflow-auto">
                <p className="">{Art.artikel}</p>
              </div>{" "}
            </div>
            <div className="flex flex-row justify-between">
              <Button
                title="Back"
                onClick={() => {
                  return navigate(`/`);
                }}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ArtikelDetail;
