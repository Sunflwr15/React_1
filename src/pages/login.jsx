import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate("/register", {replace: true})
    }
    const handleLogin = () => {
        navigate("/login", {replace: true})
    }
  return (
    <div>
      <h1>Login Page</h1>
      <div className="flex">
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
