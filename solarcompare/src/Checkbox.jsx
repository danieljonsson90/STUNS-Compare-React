import React from "react";

function Checkbox(props) {
  return (
    <input
      type="checkbox"
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
}

export default Checkbox;
