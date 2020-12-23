import React from "react";
import SmallPanelCard from "./SmallPanelCard.jsx";

const sideMenuTitle = "Lägg till Paneler";

function SideMenu(props) {
  function RenderSideMenuTitle() {
    for (let panel of props.selectablePanels) {
      if (!panel.selected) return <p>{sideMenuTitle}</p>;
    }
  }
  return (
    <div className="sideMenuContainer">
      <div className="sideMenuTitle">{RenderSideMenuTitle()}</div>
      {props.selectablePanels.map((selectablePanel, index) => {
        if (!selectablePanel.selected) {
          return (
            <SmallPanelCard
              key={index}
              onClick={props.handleClick}
              panel={selectablePanel}
            />
          );
        }
        return <> </>;
      })}
    </div>
  );
}

export default SideMenu;
