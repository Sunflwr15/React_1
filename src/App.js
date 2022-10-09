import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import User from "./pages/pageUser/user";
import Createuser from "./pages/pageUser/Createuser";
import Updateuser from "./pages/pageUser/Updateuser";
import Userdetail from "./pages/pageUser/Userdetail";
import LoginScreen from "./pages/auth/loginScreen";
import ProtectRoutes from "./pages/routes/protectRoutes";
import Artikel from "./pages/artikel";
import Button from "./pages/components/Button";
import Cookies from "js-cookie";
import ArtikelUpdate from "./pages/artikelUpdate";
import ArtikelCreate from "./pages/artikelCreate";
import ArtikelDetail from "./pages/artikelDetail";
function App() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoutes>
              <Artikel />
            </ProtectRoutes>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/artikel"
          element={
            <ProtectRoutes>
              <Artikel />
            </ProtectRoutes>
          }
        />
        <Route
          path="/artikel/create"
          element={
            <ProtectRoutes>
              <ArtikelCreate />
            </ProtectRoutes>
          }
        />
        <Route
          path="/artikel/update/:slug/:id"
          element={
            <ProtectRoutes>
              <ArtikelUpdate />
            </ProtectRoutes>
          }
        />
        <Route
          path="/artikel/update/:slug"
          element={
            <ProtectRoutes>
              <ArtikelDetail />
            </ProtectRoutes>
          }
        />
        {/* <Route
          path="/user/:id/detail"
          element={
            <ProtectRoutes>
              <Userdetail />
            </ProtectRoutes>
          }
        />
        <Route
          path="/user/register"
          element={
            <ProtectRoutes>
              <Createuser />
            </ProtectRoutes>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectRoutes>
              <Updateuser />
            </ProtectRoutes>
          }
        /> */}
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
