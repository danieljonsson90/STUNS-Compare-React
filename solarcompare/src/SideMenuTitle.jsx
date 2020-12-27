import React from "react";
import { usePanelsStateContext } from "./Contexts";

const sideMenuTitle = "Lägg till Paneler";

function SideMenuTitle() {
  const { selectablePanels } = usePanelsStateContext();

  function RenderSideMenuTitle() {
    for (let panel of selectablePanels) {
      if (!panel.selected) return <p>{sideMenuTitle}</p>;
    }
  }

  return <div className="sideMenuTitle">{RenderSideMenuTitle()}</div>;
}

export default SideMenuTitle;
