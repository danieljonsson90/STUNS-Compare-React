import React from "react";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";
import RenderTableData from "./RenderTableData.jsx";
import { usePanelsStateContext } from "./Contexts";
import { TableStyles } from "./styles";

let RowId;

function TableComponent(props) {
  const { selectablePanels, panels } = usePanelsStateContext();
  return (
    <div style={TableStyles}>
      <table>
        <tbody>
          {TableHeadersAndKeys.map((dataObject, tableHeaderIndex) => {
            if (dataObject.key === "-") {
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
                          dataObject={dataObject}
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
