import React from "react";
import Swal from "sweetalert2";
import Input from "../module/input";
import Button from "./components/Button";
import Select from "../module/select";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Createuser() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUser] = React.useState({
    kode_penulis: "10102",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: 2004,
    sinopsis: "",
  });

  const handleChange = (e) => {
    setUser((users) => {
      return { ...users, [e.target.name]: e.target.value };
    });
    console.log("tes");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api-react-2.herokuapp.com/api/perpustakaan",
        users
      );
      setIsLoading(false);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
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
        title: "Success Adding New Book",
      });
      return navigate("/Admin/Books");
    } catch (err) {
      console.log(err);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
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
        title: "Failed Adding New Book",
      });
      setIsLoading(false);
      setUser({
        kode_penulis: "10102",
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit_buku: 2004,
        sinopsis: "",
      });
    }
  };
  return (
    <React.Fragment>
      <p className="text-center font-bold uppercase mt-10">User Register</p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-5 w-[400px] h-[510px] border border-black p-5"
        >
          <div className="flex flex-row space-between space-x-[45px]">
            <Input
              onChange={handleChange}
              value={users.nama_pengarang}
              isError={""}
              label="Name"
              type="text"
              name="nama_pengarang"
              id="name"
              placeholder="Name"
            />
            <Input
              onChange={handleChange}
              value={users.nama_penerbit_buku}
              isError={""}
              label="Publisher"
              type="text"
              name="nama_penerbit_buku"
              id="Publisher"
              placeholder="Publisher"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.judul_buku}
              isError={""}
              label="Book Thickness"
              type="text"
              name="judul_buku"
              id="Book Title"
              placeholder="Book Title"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.ketebalan_buku}
              isError={""}
              label="Book Thickness"
              type="text"
              name="ketebalan_buku"
              id="BookThickness"
              placeholder="BookThickness"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.sinopsis}
              isError={""}
              label="Sinopsis"
              type="text"
              name="sinopsis"
              id="Sinopsis"
              placeholder="Sinopsis"
            />
          </div>
          <div className="flex flex-row space-between space-x-[45px]">
              <Input
                onChange={handleChange}
                value={users.tahun_terbit_buku}
                isError={""}
                label="Year Published"
                type="number"
                name="tahun_terbit_buku"
                id="tahun_terbit_buku"
                placeholder="Year Published"
              />
              <Input
                onChange={handleChange}
                value={users.kode_penulis}
                isError={""}
                label="Author Code"
                type="number"
                name="kode_penulis"
                id="AuthorCode"
                placeholder="AuthorCode"
              />
          </div>

          <div className="flex flex-row justify-between">
            <NavLink
              to="/Admin/Books"
              className={`border border-black p-2 px-5`}
            >
              Cancel
            </NavLink>
            <Button
              className={`border border-black p-2 px-5`}
              title={isLoading ? "Submitting" : "Submit"}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Createuser;
