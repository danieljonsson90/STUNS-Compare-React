import React from "react";

function Checkbox(props) {
  return (
    <input type="checkbox" id={props.id} onChange={props.onChange}></input>
  );
}

export default Checkbox;
