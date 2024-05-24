import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App6";
import "./style/index.scss";
import { DataProvider } from "./context/DataContext/DataProvider";
import { FilterProvider } from "./context/FilterContext/FilterProvider";
import { SortProvider } from "./context/SortContext/SortProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SortProvider>
      <FilterProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </FilterProvider>
    </SortProvider>
  </React.StrictMode>
);
