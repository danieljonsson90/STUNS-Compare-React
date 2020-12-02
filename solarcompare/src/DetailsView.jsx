import React from "react";
import { usePanelsStateContext } from "./Contexts";

function DetailsView(props) {
  const { selectablePanels } = usePanelsStateContext();
  console.log(selectablePanels);
  const TableHeaders = [
    "Specifikationer",
    "Märke",
    "Model",
    "Ram",
    "Maxkapacitet (kWp)",
    "Celltyp",
    "Strömskenor",
    "Effekt (%)",
    "Mått",
    "Höjd",
    "Bredd",
    "Vikt",
    "Tjocklek",
    "läs mer",
  ];
  function RenderData(data, index) {
    return (
      <tr key={index}>
        <td>{data.deviceId}</td>
        <td>{data.identity}</td>
        <td>{data.displayName}</td>
      </tr>
    );
  }

  function handleClick() {
    //ändra state för de solpaneler som är icheckade.
    selectablePanels.map((panel) => {
      return panel.clicked === false;
    });
    console.log(selectablePanels);
    props.changeView("ListView");
  }

  return (
    <div>
      <button onClick={handleClick}>Go back to start!</button>
      {selectablePanels ? (
        <div>
          <h1 id="title">Solar Table</h1>
          <table id="solarPanels">
            <thead id="headers">
              {TableHeaders.map((data, index) => {
                return <tr key={index}>{data}</tr>;
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
