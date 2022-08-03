import React from "react";

function Button({ title, color = "light gray", disabled, ...props }) {
  return (
    <div>
      <button
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: color,
          opacity: disabled ? 0.3 : 1,
        }}
        className="button"
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
