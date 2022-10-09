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

function ArtikelCreate() {
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

      console.log("response", response.data);

      if (response.data.status === "Fail") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-start",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
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
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Success creating article",
        });
      }

      return navigate("/", { replace: true });
    } catch (err) {
      console.log("tes", err);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3000,
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
          imagePreview: null,
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
            <img
              src={Art.imagePreview}
              alt={Art.imagePreview}
              className="w-96"
            />
          </div>
          <div className="flex flex-col justify-around ">
            <Input
              onChange={(e) => {
                let file = e.target.files[0];
                console.log(e.target.files[0]);
                if (
                  file.type === "image/jpeg" ||
                  file.type === "image/png" ||
                  file.type === "application/pdf"
                ) {
                  let reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    setArt((Art) => {
                      return {
                        ...Art,
                        imagePreview: reader.result,
                        thumbnail: file,
                      };
                    });
                    console.log(reader);
                  };
                } else {
                  alert("Bruh");
                }
              }}
              value={Art.file}
              isError={""}
              label="File"
              type="file"
              name="thumbnail"
            />
            <Input
              onChange={handleChange}
              value={Art.judul}
              isError={""}
              label="Judul"
              type="text"
              name="judul"
              id="username"
              placeholder="Username"
            />
            <div>
              <p>Artikel</p>
              <textarea
                onChange={handleChange}
                value={Art.artikel}
                name={"artikel"}
                placeholder="Ketik Disini"
                className="w-full h-40 border border-black"
              />
            </div>
            <div className="flex flex-row justify-between">
              <Button
                title="Cancel"
                onClick={() => {
                  return navigate(`/`);
                }}
              ></Button>
              <Button title={loading ? "Sending" : "Send"}></Button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ArtikelCreate;
