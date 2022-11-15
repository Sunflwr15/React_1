import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Pages from "./pages/pages";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/tes" element={<Pages />}></Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
