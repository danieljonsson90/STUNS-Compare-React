import React from "react";
import TextForCard from "./TextForCard";

function PanelCard(props) {
  return (
    <div className="panelCard">
      <div className="img-container">
        <img alt={props.solarpanel.model} src={props.solarpanel.image} />
      </div>
      <div className="checkboxContainer">{props.checkBox}</div>
      <TextForCard solarpanel={props.solarpanel} />
    </div>
  );
}

export default PanelCard;
