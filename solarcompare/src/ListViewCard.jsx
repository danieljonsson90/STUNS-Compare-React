import React from "react";
import { CardTextContainer } from "./styles";
import TextForCard from "./TextForCard";

function ListViewCard(props) {
  return (
    <div className="Card">
      <div className="img-container">
        <img alt={props.item.model} src={props.item.image} />
      </div>
      <div className="checkboxContainer">{props.checkBox}</div>
      <TextForCard
        item={props.item}
        styleTextContainer={CardTextContainer}
        styleUl={{ listStyleType: "none" }}
      />
    </div>
  );
}

export default ListViewCard;
