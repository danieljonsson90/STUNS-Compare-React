import React from "react";

function Navbar(props) {
  return (
    <nav className="Navbar">
      {
        props.children
        /*
        <a href="https://energiportalregionuppsala.se/">Hem</a>
        <a href="./About.html">Om projektet</a>*/
      }
    </nav>
  );
}

export default Navbar;
