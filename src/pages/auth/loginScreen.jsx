import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../API/auth";
import Input from "../../module/input";
import Button from "../components/Button";
function LoginScreen() {
  const navigate = useNavigate();
  const [users, setUser] = React.useState({
    email: "hannam@gmail.com",
    password: "Nabilgathfan15",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    setUser((users) => {
      return { ...users, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const responses = await login(users);
      const data = responses.data;
      Cookies.set("appToken", data?.token);
      return navigate("/", { replace: true });
    } catch (error) {
      
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center place-items-center">
      {isLoading ? (
        <p className="animate-pulse">Loading...</p>
      ) : (
        <form
          className="mt-5 space-y-5 w-fit h-[510px] bg-white border border-black p-5 flex flex-col shadow-lg"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-2xl">Login</p>
          <div className="space-y-5 w-[300px]">
            <Input
              value={users.email}
              onChange={handleChange}
              label="Email"
              type="email"
              name="email"
              id="Email"
              placeholder="Email"
            />
            <Input
              value={users.password}
              onChange={handleChange}
              label="Password"
              type="text"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <Button title="Login" />{" "}
        </form>
      )}
    </div>
  );
}

export default LoginScreen;
