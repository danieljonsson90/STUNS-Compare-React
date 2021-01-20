import * as React from "react";
import axios from "axios";

const PanelsStateContext = React.createContext();
const PanelsDispatchContext = React.createContext();
const SiteStateContext = React.createContext();
const SiteDispatchContext = React.createContext();

const PANELAPIURL = "https://stunssolar.azurewebsites.net/api/devices";
const SITEURL =
  "https://stuns.entryscape.net/rowstore/dataset/f16eb5e3-c352-40c5-84a2-d15fd5325f8f/json";
// Här kanske jag ska kolla om det är solpaneler eller anläggningar jag vill kolla och isf
// göra på olika sätt.

function siteReducer(state, action) {
  switch (action.type) {
    case "init":
      return action.data;
    default:
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "init":
      return action.data;
    case "toggleSelected":
      return {
        ...state,
        selectablePanels: state.selectablePanels.map((panel) => {
          if (panel.id === action.id) {
            return {
              ...panel,
              selected: !panel.selected,
            };
          }
          return panel;
        }),
      };
    case "SelectAll":
      return {
        ...state,
        selectablePanels: state.selectablePanels.map((panel) => {
          return {
            ...panel,
            selected: true,
          };
        }),
      };
    case "UnSelectAll":
      return {
        ...state,
        selectablePanels: state.selectablePanels.map((panel) => {
          return {
            ...panel,
            selected: false,
          };
        }),
      };
    default:
      return state;
  }
}

function getPanelsForLists(panels) {
  const selectablePanels = panels.reduce((acc, panel) => {
    acc.push({ panels: [], selectablePanels: [] });
    if (panel.properties.length > 0) {
      if (
        acc[0].selectablePanels.find(
          (item) =>
            item.model ===
            panel.properties.find((prop) => prop.key === "Model").value
        )
      );
      else if (
        // Jag hittade inte att det fanns någon modell p6_61 eller p6_62
        // så därför vill jag inte lägga till dem i panellistan.
        // Det är tydligen ett fel i datatbasen så om den uppdateras
        // kan denna sats tas bort.
        panel.properties.find((prop) => prop.key === "Model").value ===
          "P6_61" ||
        panel.properties.find((prop) => prop.key === "Model").value === "P6_62"
      );
      else {
        //Här kan jag eventuellt bara pusha selected och images till panel och ha en lista som state.
        acc[0].selectablePanels.push({
          id: panel.identity,
          selected: false,
          brand: panel.properties.find((prop) => prop.key === "Brand").value,
          model: panel.properties.find((prop) => prop.key === "Model").value,
          celltype: panel.properties.find((prop) => prop.key === "CellType")
            .value,
          power: panel.properties.find((prop) => prop.key === "Power").value,
          image: `/img/sol-${
            panel.properties.find((prop) => prop.key === "Model").value
          }.jpg`,
          smallImage: `/img/small/sol-${
            panel.properties.find((prop) => prop.key === "Model").value
          }.jpg`,
        });
        acc[0].panels.push(panel);
      }
    }
    return acc;
  }, []);
  return selectablePanels;
}

function PanelsProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    panels: [],
    selectablePanels: [],
  });

  React.useEffect(() => {
    axios.get(PANELAPIURL).then((res) => {
      dispatch({
        type: "init",
        data: {
          panels: getPanelsForLists(res.data)[0].panels,
          selectablePanels: getPanelsForLists(res.data)[0].selectablePanels,
        },
      });
    });
  }, []);

  return (
    <PanelsStateContext.Provider value={state}>
      <PanelsDispatchContext.Provider value={dispatch}>
        {children}
      </PanelsDispatchContext.Provider>
    </PanelsStateContext.Provider>
  );
}

function SiteProvider({ children }) {
  const [state, dispatch] = React.useReducer(siteReducer, { sites: [] });

  React.useEffect(() => {
    axios.get(SITEURL).then((res) => {
      dispatch({
        type: "init",
        data: res.data,
      });
    });
  }, []);

  return (
    <SiteStateContext.Provider value={state}>
      <SiteDispatchContext.Provider value={dispatch}>
        {children}
      </SiteDispatchContext.Provider>
    </SiteStateContext.Provider>
  );
}

function usePanelsStateContext() {
  const state = React.useContext(PanelsStateContext);
  if (state === undefined) {
    throw new Error(
      "usePanelsStateContext must be used within a PanelsProvider"
    );
  }
  return state;
}

function usePanelsDispatchContext() {
  const dispatch = React.useContext(PanelsDispatchContext);
  if (dispatch === undefined) {
    throw new Error(
      "usePanelsDispatchContext must be used within a PanelsProvider"
    );
  }
  return dispatch;
}

function useSiteStateContext() {
  const state = React.useContext(SiteStateContext);
  if (state === undefined) {
    throw new Error("useSiteStateContext must be used within a SiteProvider");
  }
  return state;
}

function useSiteDispatchContext() {
  const dispatch = React.useContext(SiteDispatchContext);
  if (dispatch === undefined) {
    throw new Error(
      "useSiteDispatchContext must be used within a SiteProvider"
    );
  }
  return dispatch;
}

export {
  PanelsProvider,
  usePanelsStateContext,
  usePanelsDispatchContext,
  SiteProvider,
  useSiteStateContext,
  useSiteDispatchContext,
};
