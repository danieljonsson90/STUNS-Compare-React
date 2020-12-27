import React from "react";
import { usePanelsStateContext } from "./Contexts";

function ColumnPicture(props) {
  const { selectablePanels } = usePanelsStateContext();
  return (
    <div>
      <div className="XButtonContainer">
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
}

export default ColumnPicture;
