import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaSearch, FaCheckDouble } from "react-icons/fa";
import {
  BsCheck2All,
  BsFillPeopleFill,
  BsThreeDotsVertical,
  BsFillChatLeftTextFill,
  BsFilter,
  BsSignal,
} from "react-icons/bs";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="grid grid-cols-8 w-screen h-screen bg-[#222E35]">
        <div className="col-span-3 bg-[#111B21] w-full h-screen grid grid-rows-6 border-r border-gray-600">
          {/* Profile */}
          <section className="w-full bg-[#111B21] row-span-1 grid grid-rows-2 ">
            <div className="flex justify-between bg-[#222E35] p-4 items-center">
              <div className="bg-white rounded-full w-10 h-10"></div>
              <div className="text-gray-400 flex flex-row space-x-8 text-2xl">
                <button>
                  <BsFillPeopleFill />
                </button>{" "}
                <button>
                  <BsSignal />
                </button>{" "}
                <button>
                  <BsFillChatLeftTextFill />
                </button>{" "}
                <button>
                  <BsThreeDotsVertical />
                </button>{" "}
              </div>
            </div>
            {/* Search */}
            <div className="bg-[#111B21] p-2 py-2 flex flex-row justify-between space-x-2 h-fit">
              <section className="bg-[#222E35] w-full h-10 rounded-xl px-5 p-2 text-white flex-row flex items-center justify-between">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  className="w-[85%] bg-transparent font-light text-sm"
                  placeholder="Search or Start New Chat"
                />
              </section>
              <BsFilter className="text-gray-400 text-3xl self-center"/>
            </div>
          </section>
          {/* Contact */}
          <section className="row-span-5 h-[537px] overflow-auto p-2 py-2 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((items, index) => {
              return (
                <button
                  onClick={() => {
                    return navigate("/tes");
                  }}
                >
                  <div className="grid grid-cols-6 h-fit items-center gap-10">
                    <section className="col-span-1 ">
                      <div className="bg-white rounded-full w-12 h-12"></div>
                    </section>
                    <section className="border-b border-gray-600 col-span-5 text-white py-4 pr-5 space-y-1">
                      <div className="flex flex-row justify-between">
                        <p>Person {items}</p>
                        <p className="text-gray-500">
                          0{items}:{items * 4}
                        </p>
                      </div>
                      <div className="flex flex-row items-center space-x-2 text-gray-500">
                        <BsCheck2All className="text-xl" />
                        <p className="h-5 overflow-hidden text-left w-full">
                          Lorem ipsum dolor sit am consectetur adipisicing elit.
                          Numquam architecto minima alias nihil, ullam repellat
                          vero cum atque labore, assumenda obcaecati? Blanditiis
                          ipsa molestias laboriosam dolore exercitationem at
                          architecto tempora.
                        </p>
                      </div>
                    </section>
                  </div>
                </button>
              );
            })}
          </section>
        </div>
        <div className="col-span-5 w-full h-full">
          <Outlet />
        </div>{" "}
      </section>
    </div>
  );
}

export default Main;
