import PanelCard from "./PanelCard";
import React from "react";
import Navbar from "./Navbar.jsx";
import Wrapper from "./Wrapper";
import { usePanelsStateContext, usePanelsDispatchContext } from "./Contexts";
import Checkbox from "./Checkbox";

const headerTitle = "Jämför Solpaneler";

function ListView(props) {
  const { selectablePanels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();

  function handleClick({ target }) {
    dispatch({
      type: "toggleSelected",
      id: target.value,
    });
  }

  function ChangeView(str) {
    switch (str) {
      case "Compare All":
        dispatch({
          type: "SelectAll",
        });
        props.changeView("DetailsView");
        break;
      case "Compare Selected":
        let selected = false;
        for (let panel of selectablePanels) {
          if (panel.selected) {
            props.changeView("DetailsView");
            selected = true;
            break;
          }
        }
        if (!selected) {
          alert("Du måste checka i någon panel");
        }
        break;

      default:
    }
  }

  return (
    <div>
      <Navbar title={headerTitle}>
        <button onClick={() => ChangeView("Compare All")}>Jämför alla</button>
        <button onClick={() => ChangeView("Compare Selected")}>
          Jämför Markerade
        </button>
      </Navbar>
      <Wrapper class="listWrapper">
        {selectablePanels.map((panel, index) => (
          <PanelCard
            key={index}
            onClick={handleClick}
            solarpanel={panel}
            checkBox={<Checkbox value={panel.id} onChange={handleClick} />}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default ListView;
