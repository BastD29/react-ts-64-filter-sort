import { Dispatch, createContext } from "react";
import { SortType } from "../../models/sort";
import { SortAction } from "../../models/action";

type SortContextType = {
  state: SortType;
  dispatch: Dispatch<SortAction>;
};

export const SortContext = createContext<SortContextType | undefined>(
  undefined
);
