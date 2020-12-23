import React from "react";
import SmallPanelCard from "./SmallPanelCard.jsx";
import { usePanelsStateContext } from "./Contexts";

const sideMenuTitle = "Lägg till Paneler";

function SideMenu(props) {
  const { selectablePanels } = usePanelsStateContext();
  function RenderSideMenuTitle() {
    for (let panel of selectablePanels) {
      if (!panel.selected) return <p>{sideMenuTitle}</p>;
    }
  }
  return (
    <div className="sideMenuContainer">
      <div className="sideMenuTitle">{RenderSideMenuTitle()}</div>
      {selectablePanels.map((selectablePanel, index) => {
        if (!selectablePanel.selected) {
          return (
            <SmallPanelCard
              key={index}
              onClick={props.onClick}
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
