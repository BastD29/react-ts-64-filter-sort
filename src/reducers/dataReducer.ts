import { SET_DATA } from "../constants/actions";
import { DataAction } from "../models/action";
import { RowType } from "../models/row";

const initialDataState: RowType[] = [];

const dataReducer = (state: RowType[], action: DataAction): RowType[] => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export { dataReducer, initialDataState };
