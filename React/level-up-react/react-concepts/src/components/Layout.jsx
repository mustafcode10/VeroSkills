import React from "react";

function Layout(props) {
  return (
    <>
      <div className="layout">
        <header>My App Header</header>
        <main>{props.children}</main>
        <footer>footer Info.</footer>
      </div>
    </>
  );
}

export default Layout;
