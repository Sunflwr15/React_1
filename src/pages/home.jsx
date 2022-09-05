import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [msg, setMsg] = React.useState("Belum Login");
  const navigate = useNavigate();
  const handleLogin = () => {
    setMsg("Proses Login")
    return navigate("about", {replace: true})
};
return (
    <React.Fragment>
      <div>
        <p className="text-2xl font-bold antialiased">Home</p>
        <p>{msg}</p>
        <button className="p-3 bg-violet-500 text-white rounded-xl" onClick={handleLogin}>
          Login
        </button>
      </div>
    </React.Fragment>
  );
}

export default Home;
