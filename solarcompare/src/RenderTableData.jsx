import React from "react";
import ColumnPicture from "./ColumnPicture.jsx";

function RenderTableData(props) {
  if (props.dataObject.key === "img") {
    return (
      <div>
        <ColumnPicture onClick={props.onClick} panelIndex={props.panelIndex} />
      </div>
    );
  } else if (props.dataObject.key === "-") {
    return "";
  } // Denna if-sats nedan kan tas bort om värdet i APIet för Efficiency
  // ändras till % istället för decimalform.
  else if (
    props.dataObject.key === "Efficiency" &&
    props.panel.properties.find((prop) => prop.key === props.dataObject.key)
  ) {
    return (
      props.panel.properties.find((prop) => prop.key === props.dataObject.key)
        .value * 100
    ).toFixed(1);
  } else if (
    props.panel.properties.find((prop) => prop.key === props.dataObject.key)
  ) {
    return props.panel.properties.find(
      (prop) => prop.key === props.dataObject.key
    ).value;
  }
  return "-";
}

export default RenderTableData;
