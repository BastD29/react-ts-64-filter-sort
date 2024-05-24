import { Dispatch, createContext } from "react";
import { ColumnType } from "../../models/column";
import { ColumnsAction } from "../../models/action";

type ColumnsContextType = {
  state: ColumnType[];
  dispatch: Dispatch<ColumnsAction>;
};

export const ColumnsContext = createContext<ColumnsContextType | undefined>(
  undefined
);
