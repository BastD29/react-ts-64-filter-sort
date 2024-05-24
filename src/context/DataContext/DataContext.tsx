import { Dispatch, createContext } from "react";
import { RowType } from "../../models/row";
import { DataAction } from "../../models/action";

type DataContextType = {
  state: RowType[];
  dispatch: Dispatch<DataAction>;
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);
