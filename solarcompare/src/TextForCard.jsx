import React from "react";

function TextForCard(props) {
  return (
    <div className="img-content">
      <ul>
        <li>
          <strong>Märke: </strong>
          {props.solarpanel.brand}
        </li>
        <li>
          <strong>Model: </strong>
          {props.solarpanel.model}
        </li>
        <li>
          <strong>Celltyp: </strong>
          {props.solarpanel.celltype}
        </li>
        <li>
          <strong>Maxeffekt (kWp): </strong>
          {props.solarpanel.power}
        </li>
      </ul>
    </div>
  );
}

export default TextForCard;
