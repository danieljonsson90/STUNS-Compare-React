import PanelCard from "./PanelCard.jsx";
import React from "react";
import Navbar from "./Navbar.jsx";
import Wrapper from "./Wrapper.jsx";
import { usePanelsStateContext, usePanelsDispatchContext } from "./Contexts";
import Checkbox from "./Checkbox.jsx";
import Header from "./Header.jsx";
const headerTitle = "Jämför Solpaneler";

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
        <Navbar>
          <a href="https://energiportalregionuppsala.se/">Hem</a>
          <a href="./About.html">Om projektet</a>
        </Navbar>
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
        <button onClick={() => ChangeView("Compare All")}>Jämför alla</button>
        <button onClick={() => ChangeView("Compare Selected")}>
          Jämför Markerade
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
