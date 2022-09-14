import React from "react";

function Input({ label, isError = false, textError, ...props }) {
  return (
    <React.Fragment>
      <form className="center-flex form">
        <div className="flex flex-col">
          <label htmlFor={label}>{label}</label>
          <input
            required
            {...props}
            id={label}
            className="border-b border-black w-full py-2"
          ></input>
          {isError && <p className="error"></p>}
        </div>
      </form>
    </React.Fragment>
  );
}

export default Input;
