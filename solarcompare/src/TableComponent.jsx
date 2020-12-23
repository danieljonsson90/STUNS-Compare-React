import React from "react";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";

const TableStyles = {
  width: "100%",
  margin: "auto",
  marginLeft: "0",
  marginRight: "1%",
  marginTop: "0",
  overflow: "auto",
  gridColumnStart: "2",
  gridColumnEnd: "3",
  gridRowStart: "1",
};

let RowId;

function TableComponent(props) {
  function RenderData(panel, tableHeaderIndex, panelIndex) {
    if (tableHeaderIndex === 0) {
      return (
        <div>
          <div className="RemoveButtonContainer">
            <button
              value={props.selectablePanels[panelIndex].id}
              onClick={props.onClick}
            >
              X
            </button>
          </div>
          <div className="img-container">
            <img
              src={props.selectablePanels[panelIndex].image}
              alt={props.selectablePanels[panelIndex].model}
            />
          </div>
        </div>
      );
    } else if (TableHeadersAndKeys[tableHeaderIndex].key === "-") {
      return "";
    } // Denna if-sats nedan kan tas bort om värdet i APIet för Efficiency
    // ändras till % istället för decimalform.
    else if (
      TableHeadersAndKeys[tableHeaderIndex].key === "Efficiency" &&
      panel.properties.find(
        (prop) => prop.key === TableHeadersAndKeys[tableHeaderIndex].key
      )
    ) {
      return (
        panel.properties.find(
          (prop) => prop.key === TableHeadersAndKeys[tableHeaderIndex].key
        ).value * 100
      ).toFixed(1);
    } else if (
      panel.properties.find(
        (prop) => prop.key === TableHeadersAndKeys[tableHeaderIndex].key
      )
    ) {
      return panel.properties.find(
        (prop) => prop.key === TableHeadersAndKeys[tableHeaderIndex].key
      ).value;
    }
    return "-";
  }

  return (
    <div style={TableStyles}>
      <table id="solarPanels">
        <tbody>
          {TableHeadersAndKeys.map((data, tableHeaderIndex) => {
            if (TableHeadersAndKeys[tableHeaderIndex].key === "-") {
              RowId = "TableHeadline";
            } else {
              RowId = "";
            }
            return (
              <tr key={tableHeaderIndex} id={RowId}>
                {props.panels.map((panel, panelIndex) => {
                  if (props.selectablePanels[panelIndex].selected) {
                    return (
                      <td key={panelIndex}>
                        {RenderData(panel, tableHeaderIndex, panelIndex)}
                      </td>
                    );
                  }
                  return <> </>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
