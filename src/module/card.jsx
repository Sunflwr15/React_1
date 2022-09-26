import React from "react";

function Card({ children }) {
  return (
    <React.Fragment>
      <div className="w-[300px] bg-white place-content-evenly border border-black flex flex-col p-5 shadow-md shadow-black">
        {children}
      </div>{" "}
    </React.Fragment>
  );
}

export default Card;
