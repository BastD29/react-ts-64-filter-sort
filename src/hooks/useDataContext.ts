import { useContext } from "react";
import { DataContext } from "../context/DataContext/DataContext";

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }

  return context;
};
