import { SET_COLUMNS } from "../constants/actions";
import { columns } from "../data/columns";
import { ColumnsAction } from "../models/action";
import { ColumnType } from "../models/column";

const initialColumnsState: ColumnType[] = [];

const columnsReducer = (state: ColumnType[], action: ColumnsAction) => {
  switch (action.type) {
    case SET_COLUMNS:
      //   return action.payload;
      return columns; // to be replaced by an api call in the real world
    default:
      return state;
  }
};

export { columnsReducer, initialColumnsState };
