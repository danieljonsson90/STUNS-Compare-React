import React from "react";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";
import RenderTableData from "./RenderTableData.jsx";
import { usePanelsStateContext } from "./Contexts";

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
  const { selectablePanels, panels } = usePanelsStateContext();
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
                {panels.map((panel, panelIndex) => {
                  if (selectablePanels[panelIndex].selected) {
                    return (
                      <td key={panelIndex}>
                        <RenderTableData
                          panel={panel}
                          tableHeaderIndex={tableHeaderIndex}
                          panelIndex={panelIndex}
                          onClick={props.onClick}
                        />
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
