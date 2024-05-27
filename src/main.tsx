import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App9";
import { RowsProvider } from "./context/RowsContext/RowsProvider";
import { FilterProvider } from "./context/FilterContext/FilterProvider";
import { SortProvider } from "./context/SortContext/SortProvider";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SortProvider>
      <FilterProvider>
        <RowsProvider>
          <App />
        </RowsProvider>
      </FilterProvider>
    </SortProvider>
  </React.StrictMode>
);
