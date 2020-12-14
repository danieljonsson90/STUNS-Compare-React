import React from "react";

function Navbar(props) {
  return (
    <header className="Navbar">
      <div className="row">
        <h1 className="col-sm-8"> {props.title} </h1>{" "}
        <nav className="col-sm-4"> {props.children} </nav>{" "}
      </div>{" "}
    </header>
  );
}

export default Navbar;
