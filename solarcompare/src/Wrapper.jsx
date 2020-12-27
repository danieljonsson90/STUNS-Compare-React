import React from "react";

function Wrapper(props) {
  return <div style={props.style}> {props.children} </div>;
}

export default Wrapper;
