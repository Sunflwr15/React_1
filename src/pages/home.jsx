import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [msg, setMsg] = React.useState("Belum Login");
  const navigate = useNavigate();
  const handleLogin = () => {
    setMsg("Proses Login")
    return navigate("about", {replace: true})
};
setTimeout(handleLogin, 5000)
return (
    <React.Fragment>
      <div>
        <p className="text-2xl font-bold antialiased">Home</p>
        <p>{msg}</p>
        <button className="h-10 w-40 bg-slate-700 text-white rounded-md" onClick={handleLogin}>
          Login
        </button>
      </div>
    </React.Fragment>
  );
}

export default Home;
