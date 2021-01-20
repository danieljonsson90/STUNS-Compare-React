import React from "react";
import { useSiteStateContext } from "./Contexts";
function Test(props) {
  const state = useSiteStateContext();
  console.log("state", state);
  return <h1>SItes</h1>;
}

export default Test;
