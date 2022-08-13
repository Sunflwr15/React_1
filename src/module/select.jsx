import React, { Children } from "react";

function Input({ label, isError = false, textError, children,...props }) {
  return (
    <React.Fragment>
      <form className="center-flex form">
        <div className="flex flex-column">
          <label htmlFor={label}>{label}</label>
          <select {...props} id={label} className={''}>
            {children}
          </select>
          {isError && <p className="error">Required</p>}
        </div>
      </form>
    </React.Fragment>
  );
}

export default Input;
