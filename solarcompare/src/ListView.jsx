import PanelCard from "./PanelCard";
import React from "react";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import { usePanelsStateContext, usePanelsDispatchContext } from "./Contexts";
import Checkbox from "./Checkbox";

function ListView(props) {
  const { selectablePanels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();
  const headerTitle = "Jämför Solpaneler";
  function handleClick({ target }) {
    dispatch({
      type: "toggleSelected",
      id: target.value,
      checked: target.checked,
    });
  }

  return (
    <Wrapper>
      <Navbar title={headerTitle}>
        <button onClick={() => props.changeView("DetailsView")}>
          Jämför alla
        </button>
        <button onClick={() => props.changeView("DetailsView")}>
          Jämför Markerade
        </button>
      </Navbar>

      {selectablePanels.map((panel, index) => (
        <PanelCard
          key={index}
          onClick={handleClick}
          solarpanel={panel}
          checkBox={<Checkbox value={panel.id} onChange={handleClick} />}
        />
      ))}
    </Wrapper>
  );
}

export default ListView;
