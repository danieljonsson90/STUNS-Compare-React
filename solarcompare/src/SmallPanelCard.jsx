import React from "react";

function SmallPanelCard(props) {
  console.log("panel", props.panel);
  console.log("id", props.panel.id);
  return (
    <div className="SmallPanelCard">
      <button value={props.panel.id} onClick={props.onClick}>
        <img
          src={props.panel.smallImage}
          alt={props.panel.model}
          onClick={() => props.onClick}
          id={props.panel.id}
        />
        <div className="img-content">
          <ul>
            <li>
              <strong>Märke: </strong>
              {props.panel.brand}
            </li>
            <li>
              <strong>Model: </strong>
              {props.panel.model}
            </li>
            <li>
              <strong>Celltyp: </strong>
              {props.panel.celltype}
            </li>
            <li>
              <strong>Maxeffekt (kWp): </strong>
              {props.panel.power}
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
}

export default SmallPanelCard;
