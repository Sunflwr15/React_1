import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaSearch, FaCheckDouble } from "react-icons/fa";
import {
  BsSearch,
  BsThreeDotsVertical,
  BsMicFill,
  BsPaperclip,
  BsEmojiSmile,
} from "react-icons/bs";

function Pages() {
  return (
    <div className="bg-[#111B21] w-full h-screen grid grid-rows-6 border-r border-gray-600">
      {/* Profile */}
      <section className="w-full bg-[#0B141A] grid grid-rows-2 ">
        <div className="flex justify-between bg-[#222E35] p-4 items-center ">
          <div className="flex space-x-5">
            <div className="bg-white rounded-full w-10 h-10"></div>
            <div className="text-gray-400 flex flex-col">
              <p className="text-md text-white">Person</p>
              <p className="text-sm">Online</p>
            </div>
          </div>
          <div className="text-xl text-gray-400 space-x-6">
            <button>
              <FaSearch />
            </button>
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        {/* Search */}
      </section>
      <section className="bg-[#0B141A] flex flex-row justify-between space-x-6 h-full w-full row-span-4" />
      <section className="w-full bg-[#0B141A] grid grid-rows-2 ">
        <div />
        <div className="flex justify-between bg-[#222E35] p-6 items-center">
          <div className="text-2xl text-gray-400 space-x-6">
            <button>
              <BsEmojiSmile />
            </button>
            <button className="transform rotate-45">
              <BsPaperclip />
            </button>
          </div>
          <input
            type="text"
            className="w-[85%] bg-[#2A3942] px-5 p-3 rounded-xl font-light text-sm text-white font-medium"
            placeholder="Type a message"
          />
          <div className="text-2xl text-gray-400 space-x-6">
            <button>
              <BsMicFill />
            </button>
          </div>
        </div>
        {/* Search */}
      </section>
    </div>
  );
}

export default Pages;
