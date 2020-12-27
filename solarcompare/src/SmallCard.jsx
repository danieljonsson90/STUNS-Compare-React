import React from "react";
import { SmallCardButton, SmallCardStyle, SmallCardUl } from "./styles";
import TextForCard from "./TextForCard";

function SmallCard(props) {
  return (
    <div style={SmallCardStyle}>
      <button
        value={props.item.id}
        onClick={props.onClick}
        style={SmallCardButton}
      >
        <img
          src={props.item.smallImage}
          alt={props.item.model}
          onClick={() => props.onClick}
          id={props.item.id}
          style={{ cursor: "pointer" }}
        />
        <TextForCard item={props.item} styleUl={SmallCardUl} />
      </button>
    </div>
  );
}

export default SmallCard;
