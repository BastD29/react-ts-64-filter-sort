import { RowType } from "./row";

// type SortType = {
//   key: keyof RowType;
//   order: "asc" | "desc";
// };

type SortType = {
  order: "asc" | "desc";
  orderBy: keyof RowType;
};

export type { SortType };
