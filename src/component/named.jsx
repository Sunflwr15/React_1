import React from "react";


function Button() {
  return (
    <React.Fragment>
      <button
        style={{
          borderRadius: "0 50px 50px 0",
          color:'white',
          padding:"10px 30px",
          background: "CornFlowerBlue",
        }}
      >
        Insert
      </button>
    </React.Fragment>
  );
}

function Input() {
  return (
    <React.Fragment>
      <input placeholder="Input Here" className="input"/>
    </React.Fragment>
  );
}

export { Button, Input }; // Dapat mengeskpor 1 atau lebih komponen dalam satu file
