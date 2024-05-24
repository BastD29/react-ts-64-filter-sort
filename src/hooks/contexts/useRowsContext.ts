import { useContext } from "react";
import { RowsContext } from "../../context/RowsContext/RowsContext";

export const useRowsContext = () => {
  const context = useContext(RowsContext);

  if (!context) {
    throw new Error("useRowsContext must be used within a RowsProvider");
  }

  return context;
};
