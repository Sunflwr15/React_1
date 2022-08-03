import React from "react";

function Layout({ children, title }) {
  return (
    <div className="layout text-center">
      <h3>Ini Adalah Layout</h3>
      {children}
    </div>
  );
}

export default Layout;
