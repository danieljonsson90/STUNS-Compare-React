import PanelCard from "./PanelCard";
import React from "react";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import { usePanelsStateContext, usePanelsDispatchContext } from "./Contexts";
import Checkbox from "./Checkbox";

function ListView(props) {
  const { selectablePanels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();

  function handleClick({ target: { value, checked } }) {
    //ändra state för de solpaneler som är icheckade.
    dispatch({
      type: "toggleSelected",
      id: value,
      checked,
    });
  }

  console.log(selectablePanels);
  return (
    <Wrapper>
      <Navbar>
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
