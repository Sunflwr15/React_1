import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Artikel, CreateArtikel, DetailArtikel, UpdateArtikel } from "./page";
import { Input, Select } from "./component";
import ProtectRoute from "./routers/protectRoute";
import Login from "./page/auth/login";

function App() {
  return (
    <React.Fragment>


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/artikel"
          element={
            <ProtectRoute>
              <Artikel />
            </ProtectRoute>
          }
        />
        <Route
          path="/artikel/create"
          element={
            <ProtectRoute>
              <CreateArtikel />
            </ProtectRoute>
          }
        />
        <Route
          path="/artikel/update/:id/:slug"
          element={
            <ProtectRoute>
              <UpdateArtikel />
            </ProtectRoute>
          }
        />
        <Route
          path="/artikel/detail/:slug"
          element={
            <ProtectRoute>
              <DetailArtikel />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
