import {
  CLEAR_FILTER,
  CLEAR_SORT,
  SET_ROWS,
  SET_FILTER,
  SET_SORT,
  SET_COLUMNS,
} from "../constants/actions";
import { ColumnType } from "./column";
import { FilterType } from "./filter";
import { RowType } from "./row";

// FILTER ACTIONS

type SetFilterAction = { type: typeof SET_FILTER; payload: FilterType };
type ClearFilterAction = { type: typeof CLEAR_FILTER };

type FilterAction = SetFilterAction | ClearFilterAction;

// ROWS ACTIONS

type SetRowsAction = { type: typeof SET_ROWS; payload: RowType[] };

type RowsAction = SetRowsAction;

// COLUMNS ACTIONS

type SetColumnsAction = { type: typeof SET_COLUMNS; payload: ColumnType[] };

type ColumnsAction = SetColumnsAction;

// SORT ACTIONS

type SetSortAction = { type: typeof SET_SORT; payload: keyof RowType };
type ClearSortAction = { type: typeof CLEAR_SORT };

type SortAction = SetSortAction | ClearSortAction;

export type { FilterAction, RowsAction, SortAction, ColumnsAction };
