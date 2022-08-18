import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Setting from "./pages/setting";
import { Route, Routes, NavLink } from "react-router-dom";
import Detail from "./pages/detail";

function App() {
  return (
    <React.Fragment>
      <div className="font-mono">
        <section className="bg-violet-600 text-white mb-5 p-5 border flex flex-wrap font-mono justify-end space-x-10 text-1xl">
          <NavLink
            exact
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-violet-600 bg-white" : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            exact
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-violet-600 bg-white" : undefined
            }
          >
            About
          </NavLink>
          <NavLink
            exact
            to={"/setting"}
            className={({ isActive }) =>
              isActive ? "text-violet-600 bg-white" : undefined
            }
          >
            Setting
          </NavLink>
        </section>
        <div className="p-10 mx-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/about/:id" element={<Detail />}></Route>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
