import React from "react";
import { usePanelsDispatchContext, usePanelsStateContext } from "./Contexts";
import Navbar from "./Navbar";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";

const TableStyles = {
  width: "97%",
  margin: "auto",
  marginLeft: "0",
  overflow: "auto",
  border: "solid 1px",
  gridColumnStart: "1",
  gridColumnEnd: "2",
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

  function handleRemoveClick({ target }) {
    console.dir(target);
    dispatch({
      type: "toggleSelected",
      id: target.value,
    });
  }
  function RenderData(panel, tableHeaderIndex, panelIndex) {
    if (tableHeaderIndex === 0) {
      return (
        <div>
          <div className="RemoveButtonContainer">
            <button
              value={selectablePanels[panelIndex].id}
              onClick={handleRemoveClick}
            >
              X
            </button>
          </div>
          <div className="img-container">
            <img
              src={selectablePanels[panelIndex].image}
              alt={selectablePanels[panelIndex].model}
            />
          </div>
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
        <button onClick={handleClick}>Tillbaka</button>
      </Navbar>
      {selectablePanels ? (
        <div className="TableAndSideMenu">
          <div style={TableStyles}>
            <table id="solarPanels">
              <tbody>
                {TableHeadersAndKeys.map((data, tableHeaderIndex) => {
                  if (tableHeaderIndex === 1 || tableHeaderIndex === 8) {
                    RowId = "TableHeadline";
                  } else {
                    RowId = "";
                  }
                  return (
                    <tr key={tableHeaderIndex} id={RowId}>
                      <th id="firstColumn">{data.Header}</th>
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
          <div className="sideMenu">
            <button>SidePanel</button>
            <button>SidePanel</button>
            <button>SidePanel</button>
            <button>SidePanel</button>
          </div>
        </div>
      ) : (
        <h3>wait data is fetching</h3>
      )}
    </div>
  );
}

export default DetailsView;
