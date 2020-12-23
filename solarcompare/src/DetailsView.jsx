import React from "react";
import { usePanelsDispatchContext, usePanelsStateContext } from "./Contexts";
import Navbar from "./Navbar.jsx";
import TableComponent from "./TableComponent";
import Wrapper from "./Wrapper.jsx";
import Header from "./Header.jsx";
import HeaderImage from "./HeaderImage.jsx";
import TableWithHeaders from "./TableWithHeaders.jsx";
import SideMenu from "./SideMenu.jsx";

const headerTitle = "Tabell för Solpaneler";

function DetailsView(props) {
  const { selectablePanels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();

  function handleClickUnselectAll() {
    dispatch({
      type: "UnSelectAll",
    });
    props.changeView("ListView");
  }

  function handleClick({ target }) {
    // value för img i SmallPanelCard är undefined men inte id
    // därav denna if sats.
    if (target.id !== "") target.value = target.id;
    dispatch({
      type: "toggleSelected",
      id: target.value,
    });
  }

  return (
    <Wrapper classProp="detailWrapper">
      <Header>
        <Navbar></Navbar>
        <h1>{headerTitle}</h1>
        <HeaderImage />
        <button onClick={handleClickUnselectAll}>Tillbaka</button>
      </Header>
      {selectablePanels ? (
        <div className="TableAndSideMenu">
          <TableWithHeaders />
          <TableComponent onClick={handleClick} />
          <SideMenu onClick={handleClick} />
        </div>
      ) : (
        <h3>wait data is fetching</h3>
      )}
    </Wrapper>
  );
}

export default DetailsView;
