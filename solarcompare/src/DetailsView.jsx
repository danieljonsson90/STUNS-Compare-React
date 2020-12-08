import React from "react";
import { usePanelsDispatchContext, usePanelsStateContext } from "./Contexts";
import Navbar from "./Navbar";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";

const TableStyles = {
  width: "75%",
  margin: "auto",
  overflow: "auto",
};
const headerTitle = "Tabell för Solpaneler";

function DetailsView(props) {
  const { selectablePanels, panels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();
  console.log("selectablePanels", selectablePanels);
  let RowId;

  function handleClick() {
    dispatch({
      type: "UnSelectAll",
    });
    props.changeView("ListView");
  }

  function RenderData(panel, tableHeaderIndex, panelIndex) {
    if (tableHeaderIndex === 0) {
      return (
        <div>
          <img
            src={selectablePanels[panelIndex].image}
            alt={selectablePanels[panelIndex].model}
          />
          <button>X</button>
        </div>
      );
    } else if (
      panel.properties.find(
        (prop) => prop.key === TableHeadersAndKeys[tableHeaderIndex].key
      )
    ) {
      return panel.properties.find(
        (prop) => prop.key === TableHeadersAndKeys[tableHeaderIndex].key
      ).value;
    } else if (tableHeaderIndex === 1 || tableHeaderIndex === 8) {
      return "";
    }
    return "-";
  }

  return (
    <div>
      <Navbar title={headerTitle}>
        <button onClick={handleClick}>Go back to start!</button>
      </Navbar>
      {selectablePanels ? (
        <div style={TableStyles}>
          <table id="solarPanels" style={{ width: "100%" }}>
            <tbody>
              {TableHeadersAndKeys.map((data, tableHeaderIndex) => {
                if (tableHeaderIndex === 1 || tableHeaderIndex === 8) {
                  RowId = "TableHeadline";
                } else {
                  RowId = "";
                }
                return (
                  <tr key={tableHeaderIndex} id={RowId}>
                    <th>{data.Header}</th>
                    {panels.map((panel, panelIndex) => {
                      if (selectablePanels[panelIndex].selected) {
                        return (
                          <td>
                            {RenderData(panel, tableHeaderIndex, panelIndex)}
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>wait data is fetching</h3>
      )}
    </div>
  );
}

export default DetailsView;
