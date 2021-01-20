import React, { useState } from "react";
import "./Style.css";
import ListView from "./ListView";
import DetailsView from "./DetailsView";
import { PanelsProvider, SiteProvider } from "./Contexts";
import Test from "./test";

const views = {
  DetailsView,
  ListView,
};

function App(props) {
  const [view, setView] = useState("ListView");
  const CurrentView = views[view];

  if (props.compare === "panels") {
    return (
      <PanelsProvider>
        {CurrentView ? (
          <CurrentView changeView={setView} />
        ) : (
          <h3>No currrent view</h3>
        )}
      </PanelsProvider>
    );
  } else {
    return (
      <SiteProvider>
        <Test />
      </SiteProvider>
    );
  }
}

export default App;
