import React from "react";

function Button({ title, ...props }) {
  return <button className="border border-black p-2 px-6 hover:bg-black hover:text-white" {...props}>{title}</button>;
}

export default Button;
