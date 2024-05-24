import { SET_ROWS } from "../constants/actions";
import { rows } from "../data/rows";
import { RowsAction } from "../models/action";
import { RowType } from "../models/row";

const initialRowsState: RowType[] = [];

const rowsReducer = (state: RowType[], action: RowsAction): RowType[] => {
  switch (action.type) {
    case SET_ROWS:
      // return action.payload;
      return rows; // to be replaced by an api call in the real world
    default:
      return state;
  }
};

export { rowsReducer, initialRowsState };
