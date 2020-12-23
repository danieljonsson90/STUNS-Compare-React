import PanelCard from "./PanelCard.jsx";
import React from "react";
import Navbar from "./Navbar.jsx";
import Wrapper from "./Wrapper.jsx";
import { usePanelsStateContext, usePanelsDispatchContext } from "./Contexts";
import Checkbox from "./Checkbox.jsx";
import Header from "./Header.jsx";
import HeaderImage from "./HeaderImage.jsx";

const HeaderTitle = "Jämför Solpaneler";
const FirstButtonText = "Jämför alla";
const SecondButtonText = "Jämför Valda";

function ListView(props) {
  const { selectablePanels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();

  function handleChange({ target }) {
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
        for (let panel of selectablePanels) {
          if (panel.selected) {
            return props.changeView("DetailsView");
          }
        }
        alert("Du måste checka i någon panel");
        break;
      default:
    }
  }

  return (
    <div>
      <Header>
        <Navbar></Navbar>
        <h1>{HeaderTitle}</h1>
        <HeaderImage />
        <button onClick={() => ChangeView("Compare All")}>
          {FirstButtonText}
        </button>
        <button onClick={() => ChangeView("Compare Selected")}>
          {SecondButtonText}
        </button>
      </Header>
      <Wrapper classProp="listWrapper">
        {selectablePanels.map((panel, index) => (
          <PanelCard
            key={index}
            solarpanel={panel}
            checkBox={<Checkbox value={panel.id} onChange={handleChange} />}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default ListView;
