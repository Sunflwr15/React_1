import React from "react";
import Input from "../../module/input";
import Button from "../components/Button";
import Select from "../../module/select";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { detailAllUser, putAllUser } from "../../API/user";

function Createuser() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUser] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "",
    password: "",
    password_confirmation: "",
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
      const response = await putAllUser(id, users);
      setIsLoading(false);
      alert("Success Creating User");
      return navigate("/users");
    } catch (err) {
      console.log(err);
      alert("Failed Creating User");
      setIsLoading(false);
      setUser({
        username: "",
        email: "",
        name: "",
        jenis_kelamin: "",
      });
    }
  };

  const getDetailUser = async () => {
    try {
      const response = await detailAllUser(id, users);
      const dataUser = response.data.data;
      setUser(() => {
        return {
          username: dataUser.username,
          email: dataUser.email,
          name: dataUser.name,
          jenis_kelamin: dataUser.jenis_kelamin,
        };
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailUser(id);
  });
  return (
    <React.Fragment>
      <div className="flex justify-center place-items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white w-fit h-[510px] border border-black p-5 shadow-lg"
        >
      <p className="text-center font-bold uppercase">User {id}</p>
          <div className="flex space-x-2 space-between">
            <div className=" w-[50%]">
              <Input
                onChange={handleChange}
                value={users.name}
                isError={""}
                label="Name"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="w-[50%]">
              <Input
                onChange={handleChange}
                value={users.username}
                isError={""}
                label="Username"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.email}
              isError={""}
              label="Email"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <Select
              onChange={handleChange}
              value={users.jenis_kelamin}
              isError={""}
              label="Gender"
              name="jenis_kelamin"
              id="jenis_kelamin"
              placeholder="Email"
            >
              <option value="none">Pilih Kelamin</option>
              <option value={"laki-laki"}>Laki-Laki</option>
              <option value={"perempuan"}>Perempuan</option>
            </Select>
          </div>

          <div className="flex flex-row justify-between">
            <NavLink to="/user" className={`border border-black p-2 px-5`}>
              Cancel
            </NavLink>
            <Button
              className={`border border-black p-2 px-5`}
              title={isLoading ? "Updatting" : "Update"}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Createuser;
