import React from "react";
import TextForCard from "./TextForCard";

function SmallPanelCard(props) {
  return (
    <div className="SmallPanelCard">
      <button value={props.panel.id} onClick={props.onClick}>
        <img
          src={props.panel.smallImage}
          alt={props.panel.model}
          onClick={() => props.onClick}
          id={props.panel.id}
        />
        <TextForCard solarpanel={props.panel} />
      </button>
    </div>
  );
}

export default SmallPanelCard;
