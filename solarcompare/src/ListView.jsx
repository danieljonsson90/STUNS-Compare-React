import PanelCard from "./PanelCard";
import React from "react";
import Navbar from "./Navbar";
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
      checked: target.checked,
    });
  }

  function ChangeView(str) {
    switch (str) {
      case "Jämför Alla":
        dispatch({
          type: "SelectAll",
        });
        props.changeView("DetailsView");
        break;
      case "Jämför Markerade":
        for (let panel of selectablePanels) {
          if (panel.selected) {
            props.changeView("DetailsView");
            break;
          } else {
            alert("Du måste checka i någon panel");
            break;
          }
        }
        break;
      default:
    }
  }

  return (
    <Wrapper>
      <Navbar title={headerTitle}>
        <button onClick={() => ChangeView("Jämför Alla")}>Jämför alla</button>
        <button onClick={() => ChangeView("Jämför Markerade")}>
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
