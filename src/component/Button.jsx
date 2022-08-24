import React from "react";

function Button({ title, disabled = false, bg = "rgb(30 41 59)", ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      style={{ backgroundColor: bg, opacity: disabled ? 0.8 : 1 }}
      className={`w-full border text-white py-3 rounded-md`}
    >
      {title}
    </button>
  );
}

export default Button;
