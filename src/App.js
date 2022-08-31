import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Setting from "./pages/setting";
import NotFound from "./pages/notFound";
import Email from "./pages/settings/Email";
import Phone from "./pages/settings/Phone";
import Profile from "./pages/settings/Profile";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Detail from "./pages/detail";

function App() {
  return (
    <React.Fragment>
      <div className="font-sans">
        <section className="bg-slate-900 text-white p-5 flex flex-wrap font-sans justify-center space-x-10 text-1xl fixed top-0 w-screen">
          <NavLink
            exact
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 bg-slate-800 rounded-2xl"
                : "p-3 px-5 text-slate-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            exact
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 bg-slate-800 rounded-2xl"
                : "p-3 px-5 text-slate-600"
            }
          >
            About
          </NavLink>
          <NavLink
            exact
            to={"/setting"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 bg-slate-800 rounded-2xl"
                : "p-3 px-5 text-slate-600"
            }
          >
            Setting
          </NavLink>
        </section>
        <div className="p-10 pt-36 mx-auto h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/setting" element={<Setting />}>
              <Route path="phone" element={<Phone />} />
              <Route path="email" element={<Email />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/about/:id" element={<Detail />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="404" replace />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
