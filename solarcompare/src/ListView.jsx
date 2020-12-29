import ListViewCard from "./ListViewCard.jsx";
import React from "react";
import Navbar from "./Navbar.jsx";
import Wrapper from "./Wrapper.jsx";
import { usePanelsStateContext, usePanelsDispatchContext } from "./Contexts";
import Checkbox from "./Checkbox.jsx";
import Header from "./Header.jsx";
import HeaderImage from "./HeaderImage.jsx";
import { HeaderButtons, HeaderHeadLine, ListWrapper } from "./styles";

const HeaderTitle = "Jämför Solpaneler";
const FirstButtonText = "Jämför alla";
const SecondButtonText = "Jämför Valda";

function ListView(props) {
  const { selectablePanels, panels } = usePanelsStateContext();
  const dispatch = usePanelsDispatchContext();
  console.log(panels);
  function handleChange({ target }) {
    dispatch({
      type: "toggleSelected",
      id: target.value,
    });
  }

  function ChangeView({ target }) {
    switch (target.innerHTML) {
      case FirstButtonText:
        dispatch({
          type: "SelectAll",
        });
        props.changeView("DetailsView");
        break;
      case SecondButtonText:
        for (let panel of selectablePanels) {
          if (panel.selected) {
            return props.changeView("DetailsView");
          }
        }
        alert("Du måste välja något att jämföra");
        break;
      default:
    }
  }

  return (
    <div>
      <Header>
        <Navbar></Navbar>
        <h1 style={HeaderHeadLine}>{HeaderTitle}</h1>
        <HeaderImage />
        <button onClick={ChangeView} style={HeaderButtons}>
          {FirstButtonText}
        </button>
        <button onClick={ChangeView} style={HeaderButtons}>
          {SecondButtonText}
        </button>
      </Header>
      <Wrapper style={ListWrapper}>
        {selectablePanels.map((panel, index) => (
          <ListViewCard
            key={index}
            item={panel}
            checkBox={<Checkbox value={panel.id} onChange={handleChange} />}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default ListView;
