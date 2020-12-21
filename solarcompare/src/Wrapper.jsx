import React from "react";

function Wrapper(props) {
  return <div className={props.classProp}> {props.children} </div>;
}

export default Wrapper;
