import React from "react";
import { Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Main() {
  return (
    <div>
      <section className="grid grid-cols-7 w-screen h-screen bg-[#222E35]">
        <div className="col-span-2 bg-[#111B21] w-full h-screen grid grid-rows-5 border-r border-gray-500">
          <section className="w-full bg-[#222E35] row-span-1 grid grid-rows-2 ">
            <div className="flex flex-space-between p-4 items-center">
              <div className="bg-white rounded-full w-10 h-10"></div>
            </div>
            <div className="bg-[#111B21] p-2 py-2">
              <section className="bg-[#222E35] w-full h-10 rounded-xl px-5 p-2 text-white flex-row flex items-center justify-between">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  className="w-[80%] bg-transparent font-light text-sm"
                  placeholder="Search or Start New Chat"
                />
              </section>
            </div>
          </section>
          <section className="row-span-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((items, index) => {
              return (
                <div className="grid grid-cols-4">
                  <section className="col-span-1 ">
                    <div className="bg-white rounded-full w-10 h-10"></div>
                  </section>
                </div>
              );
            })}
          </section>
        </div>
        <div className="col-span-3 w-full h-full">
          <Outlet />
        </div>{" "}
      </section>
    </div>
  );
}

export default Main;
