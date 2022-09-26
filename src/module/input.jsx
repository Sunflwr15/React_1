import React from "react";

function Input({ label, isError = false, textError, ...props }) {
  return (
    <React.Fragment>
      <form className="center-flex form w-full">
        <div className="flex flex-col">
          <label htmlFor={label}>{label}</label>
          <input
            required
            {...props}
            id={label}
            className="border-b border-black bg-transparent w-full py-2"
          ></input>
          {isError && <p className="text-white text-[10px] w-full bg-red-600 text-center">{label} is empty</p>}
        </div>
      </form>
    </React.Fragment>
  );
}

export default Input;
