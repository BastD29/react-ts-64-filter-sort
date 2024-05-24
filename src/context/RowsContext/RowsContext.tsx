import { Dispatch, createContext } from "react";
import { RowType } from "../../models/row";
import { RowsAction } from "../../models/action";

type RowsContextType = {
  state: RowType[];
  dispatch: Dispatch<RowsAction>;
};

export const RowsContext = createContext<RowsContextType | undefined>(
  undefined
);
