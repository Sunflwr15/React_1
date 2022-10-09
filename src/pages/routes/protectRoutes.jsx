import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

function ProtectRoutes({ children }) {
  const auth = Cookies.get("appToken");
  console.log("auth =>", auth);
  return auth !== undefined ? children : <Navigate to="/login" replace={true} />;
}

export default ProtectRoutes;
