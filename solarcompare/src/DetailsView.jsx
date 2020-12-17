import React from "react";
import { usePanelsDispatchContext, usePanelsStateContext } from "./Contexts";
import Navbar from "./Navbar.jsx";
import SmallPanelCard from "./SmallPanelCard";
import TableComponent from "./TableComponent";
import Wrapper from "./Wrapper";

const headerTitle = "Tabell för Solpaneler";
const sideMenuTitle = "Lägg till Paneler";

function DetailsView(props) {
  const { selectablePanels, panels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();

  function handleClickUnselectAll() {
    dispatch({
      type: "UnSelectAll",
    });
    props.changeView("ListView");
  }

  function handleClick({ target }) {
    // value för img blev undefined men inte id
    // därav denna if sats.
    if (target.id !== "") target.value = target.id;
    dispatch({
      type: "toggleSelected",
      id: target.value,
    });
  }

  function RenderSideMenuTitle() {
    for (let panel of selectablePanels) {
      if (!panel.selected) return <p>{sideMenuTitle}</p>;
    }
  }

  return (
    <Wrapper class="detailWrapper">
      <Navbar title={headerTitle}>
        <button onClick={handleClickUnselectAll}>Tillbaka</button>
      </Navbar>
      {selectablePanels ? (
        <div className="TableAndSideMenu">
          <TableComponent
            panels={panels}
            selectablePanels={selectablePanels}
            onClick={handleClick}
          />
          <div className="sideMenuContainer">
            <p>{RenderSideMenuTitle()}</p>
            {selectablePanels.map((selectablePanel, index) => {
              if (!selectablePanel.selected) {
                return (
                  <SmallPanelCard
                    key={index}
                    onClick={handleClick}
                    panel={selectablePanel}
                  />
                );
              }
              return <> </>;
            })}
          </div>
        </div>
      ) : (
        <h3>wait data is fetching</h3>
      )}
    </Wrapper>
  );
}

export default DetailsView;
