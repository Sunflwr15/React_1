import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Setting from "./pages/setting";
import NotFound from "./pages/notFound";
import { Email, Phone, Profile } from "./pages/settings/index";
import {
  EditAccount,
  Privacy,
  Authentication,
} from "./pages/settings/profile/index";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Detail from "./pages/detail";

function App() {
  return (
    <React.Fragment>
      <div className="font-sans flex">
        <section className="bg-neutral-900 text-white p-5 flex flex-wrap flex-col font-sans justify-start text-1xl w-[20%] h-screen">
          <NavLink
            exact
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 bg-neutral-200 text-black rounded-2xl"
                : "p-3 px-5 text-neutral-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            exact
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 bg-neutral-200 text-black rounded-2xl"
                : "p-3 px-5 text-neutral-400"
            }
          >
            About
          </NavLink>
          <NavLink
            exact
            to={"/setting"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 bg-neutral-200 text-black rounded-2xl"
                : "p-3 px-5 text-neutral-400"
            }
          >
            Setting
          </NavLink>
        </section>
        <div className="p-10 h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/setting" element={<Setting />}>
              <Route path="phone" element={<Phone />} />
              <Route path="email" element={<Email />} />
              <Route path="profile" element={<Profile />}>
                <Route path="edit_account" element={<EditAccount/>} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="authentication" element={<Authentication />} />
              </Route>
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
