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
import Tes from './pages/settings/profile/authentication/Tes'
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Detail from "./pages/detail";

function App() {
  return (
    <React.Fragment>
      <div className="font-sans flex">
        <section className="bg-zinc-900 text-white p-5 flex flex-wrap flex-col font-sans justify-start text-1xl w-[20%] max-h-screen space-y-3">
          <p className="text-3xl font-bold px-5 my-5 tracking-tigh">Gathfan<span className="text-violet-500">.</span></p>
          <NavLink
            exact
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 text-violet-500 font-semibold rounded-2xl "
                : "p-3 px-5 text-neutral-400 hover:text-neutral-200 font-semibold"
            }
          >
            Home<span className="text-violet-500">.</span>
          </NavLink>
          <NavLink
            exact
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 text-violet-500 font-semibold rounded-2xl "
                : "p-3 px-5 text-neutral-400 hover:text-neutral-200 font-semibold"
            }
          >
            About<span className="text-violet-500">.</span>
          </NavLink>
          <NavLink
            exact
            to={"/setting"}
            className={({ isActive }) =>
              isActive
                ? "p-3 px-5 text-violet-500 font-semibold rounded-2xl "
                : "p-3 px-5 text-neutral-400 hover:text-neutral-200 font-semibold"
            }
          >
            Setting<span className="text-violet-500">.</span>
          </NavLink>
        </section>
        <div className="bg-zinc-900 h-full w-screen">
          <div className="p-10 h-screen bg-neutral-50 rounded-l-[30px]">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/setting" element={<Setting />}>
              <Route path="phone" element={<Phone />} />
              <Route path="email" element={<Email />} />
              <Route path="profile" element={<Profile />}>
                <Route path="edit_account" element={<EditAccount/>} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="authentication" element={<Authentication />} >
                  <Route path="tes" element={<Tes/>}></Route>
                </Route>
              </Route>
            </Route>
            <Route path="/about/:id" element={<Detail />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="404" replace />} />
          </Routes>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
