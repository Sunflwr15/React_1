import React from "react";

function Button({ title, add, ...props }) {
  return (
    <button
      className={`border border-black p-2 px-6 bg-white shadow-sm shadow-black hover:bg-black hover:text-white h-10 w-full text-sm ${add}`}

      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
