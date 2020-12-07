import React from "react";
import { usePanelsDispatchContext, usePanelsStateContext } from "./Contexts";
import Navbar from "./Navbar";

function DetailsView(props) {
  const { selectablePanels, panels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();
  console.log("panels", panels);
  const headerTitle = "Solar Table";
  const TableHeaders = [
    {
      key: "-",
      Header: "",
    },
    {
      key: "-",
      Header: "Specifikationer",
    },
    {
      key: "Brand",
      Header: "Märke",
    },
    {
      key: "Model",
      Header: "Model",
    },
    {
      key: "ModuleType",
      Header: "Ram",
    },
    {
      key: "CellType",
      Header: "Celltyp",
    },
    {
      key: "Busbars",
      Header: "Strömskenor",
    },
    {
      key: "Efficiency",
      Header: "Effekt (%)",
    },
    {
      key: "-",
      Header: "Mått",
    },
    {
      key: "Height",
      Header: "Höjd",
    },
    {
      key: "Width",
      Header: "Bredd",
    },
    {
      key: "Weight",
      Header: "Vikt",
    },
    {
      key: "Thickness",
      Header: "Tjocklek",
    },
    {
      key: "-",
      Header: "Läs mer",
    },
  ];
  const TableStyles = {
    width: "75%",
    margin: "auto",
    overflow: "auto",
  };
  const NumberOfTableRows = TableHeaders.length;

  function handleClick() {
    props.changeView("ListView");
  }

  function RenderData(panel, tableHeaderIndex, panelIndex) {
    if (tableHeaderIndex === 0) {
      return (
        <img
          src={selectablePanels[panelIndex].image}
          alt={selectablePanels[panelIndex].model}
        ></img>
      );
    }
    if (
      panel.properties.find(
        (prop) => prop.key === TableHeaders[tableHeaderIndex].key
      )
    ) {
      return panel.properties.find(
        (prop) => prop.key === TableHeaders[tableHeaderIndex].key
      ).value;
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
          <table id="solarPanels">
            <thead id="headers">
              {TableHeaders.map((data, tableHeaderIndex) => {
                return (
                  <tr key={tableHeaderIndex}>
                    <th>{data.Header}</th>
                    {panels.map((panel, panelIndex) => {
                      return (
                        <td>
                          {RenderData(panel, tableHeaderIndex, panelIndex)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody>{/*data.map(RenderData)*/}</tbody>
          </table>
        </div>
      ) : (
        <h3>wait data is fetching</h3>
      )}
    </div>
  );
}

export default DetailsView;
