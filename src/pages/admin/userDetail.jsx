import { useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "../../komponen/button";

export default function UserDetail() {
const navigate = useNavigate()
const {id, kelas} = useParams()
const handleBack = () => {
  return navigate("/admin/user", {replace: true})
}

  return (
    <div>
      <h1>User Detail </h1>
      <div className="mt-5">Nama : {id}</div>
      <div>Kelas : {kelas}</div>
      
      <Button onClick={handleBack} title="Kembali ke Halaman User"/>
    </div>
  );
}
