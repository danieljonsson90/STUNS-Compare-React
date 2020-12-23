import React from "react";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";
import { usePanelsStateContext } from "./Contexts";

function RenderTableData(props) {
  const { selectablePanels } = usePanelsStateContext();

  if (props.tableHeaderIndex === 0) {
    return (
      <div>
        <div className="RemoveButtonContainer">
          <button
            value={selectablePanels[props.panelIndex].id}
            onClick={props.onClick}
          >
            X
          </button>
        </div>
        <div className="img-container">
          <img
            src={selectablePanels[props.panelIndex].image}
            alt={selectablePanels[props.panelIndex].model}
          />
        </div>
      </div>
    );
  } else if (TableHeadersAndKeys[props.tableHeaderIndex].key === "-") {
    return "";
  } // Denna if-sats nedan kan tas bort om värdet i APIet för Efficiency
  // ändras till % istället för decimalform.
  else if (
    TableHeadersAndKeys[props.tableHeaderIndex].key === "Efficiency" &&
    props.panel.properties.find(
      (prop) => prop.key === TableHeadersAndKeys[props.tableHeaderIndex].key
    )
  ) {
    return (
      props.panel.properties.find(
        (prop) => prop.key === TableHeadersAndKeys[props.tableHeaderIndex].key
      ).value * 100
    ).toFixed(1);
  } else if (
    props.panel.properties.find(
      (prop) => prop.key === TableHeadersAndKeys[props.tableHeaderIndex].key
    )
  ) {
    return props.panel.properties.find(
      (prop) => prop.key === TableHeadersAndKeys[props.tableHeaderIndex].key
    ).value;
  }
  return "-";
}

export default RenderTableData;
