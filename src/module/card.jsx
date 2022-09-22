import React from "react";

function Card({ children }) {
  return (
    <React.Fragment>
      <div className="w-[200px] bg-white rounded-xl shadow-xl h-[200px] shadow-black">
        {children}
      </div>{" "}
    </React.Fragment>
  );
}

export default Card;
