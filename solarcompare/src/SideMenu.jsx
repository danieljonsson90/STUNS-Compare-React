import React from "react";
import SmallCard from "./SmallCard.jsx";
import { usePanelsStateContext } from "./Contexts";
import SideMenuTitle from "./SideMenuTitle.jsx";

function SideMenu(props) {
  const { selectablePanels } = usePanelsStateContext();

  return (
    <div className="sideMenuContainer">
      <SideMenuTitle />
      {selectablePanels.map((selectablePanel, index) => {
        if (!selectablePanel.selected) {
          return (
            <SmallCard
              key={index}
              onClick={props.onClick}
              item={selectablePanel}
            />
          );
        }
        return <> </>;
      })}
    </div>
  );
}

export default SideMenu;
