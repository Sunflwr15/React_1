import React from "react";

function Container({ width, children, className }) {
  return (
    <section
      className={`border-2 border-black w-full h-fit p-7 py-10 ${className} bg-white`}
    >
      {children}
    </section>
  );
}

export default Container;
