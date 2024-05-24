import {
  CLEAR_FILTER,
  CLEAR_SORT,
  SET_DATA,
  SET_FILTER,
  SET_SORT,
} from "../constants/actions";
import { FilterType } from "./filter";
import { RowType } from "./row";
// import { SortType } from "./sort";

// FILTER ACTIONS

type SetFilterAction = { type: typeof SET_FILTER; payload: FilterType };
// type ClearFilterAction = { type: typeof CLEAR_FILTER; payload: FilterType };
type ClearFilterAction = { type: typeof CLEAR_FILTER };

type FilterAction = SetFilterAction | ClearFilterAction;

// DATA ACTIONS

type SetDataAction = { type: typeof SET_DATA; payload: RowType[] };

type DataAction = SetDataAction;

// SORT ACTIONS

// type SetSortAction = { type: typeof SET_SORT; payload: SortType };
type SetSortAction = { type: typeof SET_SORT; payload: keyof RowType };
// type ClearSortAction = { type: typeof CLEAR_SORT; payload: SortType };
type ClearSortAction = { type: typeof CLEAR_SORT };

type SortAction = SetSortAction | ClearSortAction;

export type { FilterAction, DataAction, SortAction };
