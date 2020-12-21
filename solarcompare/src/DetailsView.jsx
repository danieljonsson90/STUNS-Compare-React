import React from "react";
import { usePanelsDispatchContext, usePanelsStateContext } from "./Contexts";
import Navbar from "./Navbar.jsx";
import SmallPanelCard from "./SmallPanelCard";
import TableComponent from "./TableComponent";
import Wrapper from "./Wrapper.jsx";
import Header from "./Header.jsx";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";

const headerTitle = "Tabell för Solpaneler";
const sideMenuTitle = "Lägg till Paneler";
let RowId;
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
    <Wrapper classProp="detailWrapper">
      <Header>
        <Navbar></Navbar>
        <h1>{headerTitle}</h1>
        <div>
          <a href="https://energiportalregionuppsala.se/">
            <img
              className="STUNSenergi"
              src={"./img/STUNSenergi.png"}
              alt={"STUNSenergi"}
            />
          </a>
        </div>
        <button onClick={handleClickUnselectAll}>Tillbaka</button>
      </Header>
      {selectablePanels ? (
        <div className="TableAndSideMenu">
          <table className="tableHeaders">
            <tbody>
              {TableHeadersAndKeys.map((data, tableHeaderIndex) => {
                if (tableHeaderIndex === 0) return <></>;
                if (tableHeaderIndex === 1 || tableHeaderIndex === 8) {
                  RowId = "TableHeadline";
                } else {
                  RowId = "";
                }
                return (
                  <tr key={tableHeaderIndex} id={RowId}>
                    <th id="firstColumn">{data.Header}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <TableComponent
            panels={panels}
            selectablePanels={selectablePanels}
            onClick={handleClick}
          />
          <div className="sideMenuContainer">
            <div className="sideMenuTitle">{RenderSideMenuTitle()}</div>
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
