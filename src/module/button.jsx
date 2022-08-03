import React from "react";

function Button({ title, color, ...props }) {
  return (
    <div>
      <button
        {...props}
        style={{
          backgroundColor: color,
        }}
        className="button"
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
