import { CLEAR_SORT, SET_SORT } from "../constants/actions";
import { SortAction } from "../models/action";
import { SortType } from "../models/sort";

const initialSortState: SortType = { order: "asc", orderBy: "id" };

const sortReducer = (state: SortType, action: SortAction): SortType => {
  switch (action.type) {
    case SET_SORT:
      return {
        order:
          state.order === "asc" && state.orderBy === action.payload
            ? "desc"
            : "asc",
        orderBy: action.payload,
      };
    case CLEAR_SORT:
      return initialSortState;
    default:
      return state;
  }
};

export { sortReducer, initialSortState };
