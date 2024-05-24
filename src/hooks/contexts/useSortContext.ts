import { useContext } from "react";
import { SortContext } from "../../context/SortContext/SortContext";

export const useSortContext = () => {
  const context = useContext(SortContext);

  if (!context) {
    throw new Error("useSortContext must be used within a SortProvider");
  }

  return context;
};
