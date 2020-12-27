import React from "react";
import { HeaderStyle } from "./styles";

function Header(props) {
  return <header style={HeaderStyle}>{props.children}</header>;
}

export default Header;
