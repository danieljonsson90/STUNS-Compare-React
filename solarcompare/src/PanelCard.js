import React from "react";

function PanelCard(props) {
  return (
    <div className="card ">
      <div className="img-container">
        <img alt={props.solarpanel.model} src={props.solarpanel.image} />
      </div>
      <div className="checkBox">{props.checkBox}</div>
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
            <strong>Maxeffekt: </strong>
            {props.solarpanel.power}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PanelCard;
