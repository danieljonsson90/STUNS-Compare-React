import React from "react";

function TextForCard(props) {
  return (
    <div style={props.styleTextContainer}>
      <ul style={props.styleUl}>
        <li>
          <strong>Märke: </strong>
          {props.item.brand}
        </li>
        <li>
          <strong>Model: </strong>
          {props.item.model}
        </li>
        <li>
          <strong>Celltyp: </strong>
          {props.item.celltype}
        </li>
        <li>
          <strong>Maxeffekt (kWp): </strong>
          {props.item.power}
        </li>
      </ul>
    </div>
  );
}

export default TextForCard;
