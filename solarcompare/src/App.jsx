import React from "react";
import "./StartView.css";
import ListView from "./ListView";
import DetailsView from "./DetailsView";
import { PanelsProvider } from "./Contexts";
//import { Form } from "react-final-form";

const views = {
  DetailsView,
  ListView,
};

function App() {
  const [view, setView] = React.useState("ListView");

  const CurrentView = views[view];

  return (
    <PanelsProvider>
      {CurrentView ? (
        <CurrentView changeView={setView} />
      ) : (
        <h3>No currrent view</h3>
      )}
    </PanelsProvider>
  );
}

export default App;
